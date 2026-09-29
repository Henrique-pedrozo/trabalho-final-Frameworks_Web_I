import React from 'react'
import { Box, Typography } from '@mui/material'

function Stat({ parameter, value, units }) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', gap: 0.5 }}>
            <Typography sx={{ fontSize: '0.9rem', fontWeight: 800 }}>
                {parameter}
            </Typography>

            <Box sx={{
                border: '1px solid rgba(0, 0, 0, 0.2)',
                padding: '1rem',
                borderRadius: '5px',
                fontSize: '1.5rem',
                fontWeight: 400,
                minWidth: '120px',
                textAlign: 'center'
            }}>
                {value}
                {units && (
                    <Typography component="span" sx={{ marginLeft: '4px', fontWeight: 300, fontSize: '0.9rem' }}>
                        {units}
                    </Typography>
                )}
            </Box>
        </Box>
    )
}

export default Stat