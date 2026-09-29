import React from 'react'
import Stat from './Stat'
import { Box } from '@mui/material'

function Stats({ stats }) {
    return (
        <Box sx={{
            marginTop: '1rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
            gap: 2
        }}>
            <Stat parameter={"Altura"} value={stats.height} units={"ft"} />
            <Stat parameter={"Peso"} value={stats.weight} units={"kg"} />
            <Stat parameter={"Base Exp"} value={stats.exp} />
            <Stat parameter={"HP"} value={stats.hp} />
            <Stat parameter={"Attack"} value={stats.attack} />
            <Stat parameter={"Defence"} value={stats.defence} />
            <Stat parameter={"Spl Attack"} value={stats.splAttack} />
            <Stat parameter={"Spl Defence"} value={stats.splDefence} />
            <Stat parameter={"Speed"} value={stats.speed} />
        </Box>
    )
}

export default Stats