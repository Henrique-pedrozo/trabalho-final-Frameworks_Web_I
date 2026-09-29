import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Feed from '../components/Feed.jsx'
import LoadingScreen from '../components/LoadingScreen.jsx';
import axios from 'axios';
import { Button, Box } from '@mui/material';

export const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [offSet, setOffSet] = useState(() => {
    const storedOffSet = sessionStorage.getItem("offset");
    return storedOffSet ? parseInt(storedOffSet, 10) : 0;
  });
  const [loading, setLoading] = useState(true);

  // Estados dos filtros que vão para o Header
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  function handleNextPage() {
    const newOffSet = offSet + 50;
    setOffSet(newOffSet);
    sessionStorage.setItem("offset", newOffSet.toString());
  }

  function handlePreviusPage() {
    const newOffSet = offSet <= 50 ? 0 : offSet - 50;
    setOffSet(newOffSet);
    sessionStorage.setItem('offset', newOffSet.toString());
  }

  useEffect(() => {
    async function fetchPokemon() {
      setLoading(true);
      const apiUrl = `https://pokeapi.co/api/v2/pokemon?limit=50&offset=${offSet}`;

      try {
        const res = await axios.get(apiUrl);
        const basicPokemons = res.data.results;


        const detailedPokemons = await Promise.all(
          basicPokemons.map(async (pokemon) => {
            const pokeDetails = await axios.get(pokemon.url);
            return {
              ...pokemon, 
              types: pokeDetails.data.types.map(t => t.type.name) 
            };
          })
        );

        setPokemons(detailedPokemons);
      } catch (error) {
        console.error("Erro ao buscar pokemons:", error);
      }

      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
    
    fetchPokemon();
  }, [offSet]);

  const filteredPokemons = pokemons.filter((pokemon) => {
    // Verifica a busca por texto
    const matchName = pokemon.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Verifica a busca por categoria (tipo)
    const matchType = typeFilter === "" || pokemon.types.includes(typeFilter);

    return matchName && matchType;
  });

  return (
    <Box className='Home maxWidth' sx={{ paddingBottom: '2rem' }}>
      {loading && <LoadingScreen />}
      {!loading && (
        <>
          <Header 
            searchQuery={searchQuery} 
            setSearchQuery={setSearchQuery} 
            typeFilter={typeFilter} 
            setTypeFilter={setTypeFilter} 
          />
          
          <Feed pokemons={filteredPokemons} />
          
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginTop: 4 }}>
            <Button 
              variant="contained" 
              onClick={handlePreviusPage} 
              disabled={offSet === 0} 
            >
              Voltar
            </Button>
            <Button 
              variant="contained" 
              onClick={handleNextPage}
            >
              Proximo
            </Button>
          </Box>
        </>
      )}
    </Box>
  )
}