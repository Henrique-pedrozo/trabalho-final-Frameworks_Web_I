import React from 'react'
import { Card as MuiCard, CardContent, Typography, Box } from '@mui/material'

const Card = ({ data }) => {
    const urlParts = data.url.split("/");
    const pokeId = urlParts[urlParts.length - 2];
    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokeId}.png`
    
    return (
        <MuiCard sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            padding: 2, 
            cursor: 'pointer',
            transition: '0.3s',
            textDecoration: 'none',
            '&:hover': { boxShadow: '0 0 20px rgba(0,0,0,0.2)' } // Efeito Hover feito direto no JS!
        }}>
            <Box component="img" src={imgUrl} alt={data.name} sx={{ width: 100, height: 100, objectFit: 'cover' }} />
            <CardContent sx={{ paddingBottom: '8px !important', textAlign: 'center' }}>
                <Typography variant="body2" color="text.secondary">
                    {pokeId}.
                </Typography>
                <Typography variant="h6" sx={{ textTransform: 'capitalize', fontWeight: 'bold' }}>
                    {data.name}
                </Typography>
            </CardContent>
        </MuiCard>
    )
}

export default Card