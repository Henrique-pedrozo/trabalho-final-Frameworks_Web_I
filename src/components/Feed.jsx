import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'
import { Box } from '@mui/material'

const Feed = ({ pokemons }) => {
    return (
        <Box sx={{ 
            marginTop: '8rem', 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
            gap: 2 
        }}>
            {pokemons.map((pokemon) => (
                <Link to={`/${pokemon.name}`} key={pokemon.name} style={{ textDecoration: 'none' }}>
                    <Card data={pokemon} />
                </Link>
            ))}
        </Box>
    )
}

export default Feed