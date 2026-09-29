import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import LoadingScreen from '../components/LoadingScreen';
import ErrorScreen from './ErrorScreen'
import Stats from '../components/Stats'
import axios from 'axios'
import { Box, Typography, Button, Container } from '@mui/material'

const SeachedPokemon = () => {
  const { pokemon } = useParams();
  const [selectedPokemon, setSelectedPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [stats, setStats] = useState({
    height: 0, weight: 0, exp: 0, hp: 0, attack: 0,
    defence: 0, splAttack: 0, splDefence: 0, speed: 0,
  });

  const colours = {
    normal: "#A8A77A", fire: "#EE8130", water: "#6390F0", electric: "#F7D02C",
    grass: "#7AC74C", ice: "#96D9D6", fighting: "#C22E28", poison: "#A33EA1",
    ground: "#E2BF65", flying: "#A98FF3", psychic: "#F95587", bug: "#A6B91A",
    rock: "#B6A136", ghost: "#735797", dragon: "#6F35FC", dark: "#705746",
    steel: "#B7B7CE", fairy: "#D685AD",
  };

  useEffect(() => {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

    async function fetchPokemon() {
      setLoading(true);
      try {
        const response = await axios.get(apiUrl);
        const data = response.data;

        setSelectedPokemon(data)
        setStats({
          height: (data.height / 3.048).toFixed(1),
          weight: (data.weight / 10).toFixed(1),
          exp: data.base_experience,
          hp: data.stats[0].base_stat,
          attack: data.stats[1].base_stat,
          defence: data.stats[2].base_stat,
          splAttack: data.stats[3].base_stat,
          splDefence: data.stats[4].base_stat,
          speed: data.stats[5].base_stat,
        });

        setTimeout(() => {
          setLoading(false);
        });
      } catch (error) {
        setLoading(false)
        setError(true)
      }
    }
    fetchPokemon();
  }, [pokemon])

  if (loading) return <LoadingScreen />;
  if (error) return <ErrorScreen />;

  return (
    <Container maxWidth="lg" sx={{ minHeight: '100vh', padding: '1rem', display: 'flex', flexDirection: 'column' }}>
      
      <Box sx={{ marginBottom: '1rem' }}>
        <Button component={Link} to="/" variant="contained">
          Back
        </Button>
      </Box>

      <Box sx={{ 
        flex: 1, display: 'flex', alignItems: 'center', 
        gap: { xs: 3, md: 4 }, 
        flexDirection: { xs: 'column-reverse', md: 'row' } 
      }}>
        
        <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' }, width: '100%' }}>
          <Typography variant="h4" sx={{ fontSize: 'clamp(2rem, 6vw, 4rem)', textTransform: 'capitalize', fontWeight: 800 }}>
            {selectedPokemon.name}
          </Typography>

          <Box sx={{ display: 'flex', gap: 1, marginY: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
            {selectedPokemon.types.map((type, index) => (
              <Box key={index} sx={{
                backgroundColor: colours[type.type.name],
                padding: '0.5rem',
                color: 'white',
                fontWeight: 600,
                textTransform: 'capitalize',
                minWidth: '100px',
                textAlign: 'center',
                borderRadius: '5px' 
              }}>
                {type.type.name}
              </Box>
            ))}
          </Box>

          <Stats stats={stats} />
        </Box>

        <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
          <Box component="img" src={selectedPokemon.sprites.other.home.front_default} alt={selectedPokemon.name} sx={{
            width: '100%',
            maxWidth: { xs: '260px', md: '400px' },
            height: { xs: 'auto', md: '400px' },
            objectFit: 'contain'
          }} />
        </Box>

      </Box>
    </Container>
  )
}

export default SeachedPokemon;