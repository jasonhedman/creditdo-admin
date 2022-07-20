import React from 'react'

import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import { colWidths } from '../types'

const rows = [
    'Student',
    'Lesson Progress',
    'Hours',
    'Events',
    'Pre-Test',
    'Post-Test',
]

const HeaderRow = () => {
  return (
    <Grid
        container
        spacing={1}
    >
        {rows.map((row, index) => (
            <Grid
                key={row}
                item
                xs={colWidths[index]}
            >
                <Box
                    alignItems="center"
                    borderRadius={1}
                    px={1.5}
                    py={0.5}
                    sx={{
                        backgroundColor: '#f6f6f6'
                    }}
                >
                    <Typography
                        fontWeight='bold'
                    >
                        {row}
                    </Typography>
                </Box>
            </Grid>
        ))}
    </Grid>
  )
}

export default HeaderRow