import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Box, TextField, Button, Container, Select, MenuItem, InputLabel, FormControl } from '@mui/material'

const Header = ({ searchQuery, setSearchQuery, typeFilter, setTypeFilter }) => {
    
    const pokemonTypes = [
        "normal", "fire", "water", "electric", "grass", "ice",
        "fighting", "poison", "ground", "flying", "psychic", "bug",
        "rock", "ghost", "dragon", "dark", "steel", "fairy"
    ];

    return (
        <AppBar position="fixed" sx={{ backgroundColor: '#f5f5f5', padding: '0.5rem 0' }} elevation={1}>
            <Container maxWidth="lg"> 
                <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, flexWrap: 'wrap' }}>
                    <Link to="/">
                        <Box component="img" src={logo} alt="logo" sx={{ width: 100 }} />
                    </Link>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
                        
                       {/* Filtro */}
                        {setTypeFilter && (
                            <FormControl size="small" sx={{ minWidth: 120, backgroundColor: 'white', borderRadius: '5px' }}>
                                <InputLabel id="type-select-label">Tipo</InputLabel>
                                <Select
                                    labelId="type-select-label"
                                    value={typeFilter}
                                    label="Tipo"
                                    onChange={(e) => setTypeFilter(e.target.value)}
                                >
                                    <MenuItem value=""><em>Todos</em></MenuItem>
                                    {pokemonTypes.map(type => (
                                        <MenuItem key={type} value={type} sx={{ textTransform: 'capitalize' }}>
                                            {type}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        )}
                        {/* Buscar em tempo real */}
                        {setSearchQuery && (
                            <TextField 
                                variant="outlined"
                                size="small"
                                placeholder='Buscar na página...' 
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)} 
                                sx={{ backgroundColor: 'white', borderRadius: '5px' }}
                            />
                        )}
                        
                        <Button 
                            component={Link} 
                            to={`/${searchQuery}`} 
                            variant="contained" 
                            color="primary"
                            sx={{ textTransform: 'none' }}
                            disabled={!searchQuery}
                        >
                            Detalhes
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header