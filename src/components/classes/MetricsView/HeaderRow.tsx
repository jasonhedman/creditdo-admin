import React from 'react'

import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { colWidths } from './types'

const rows = [
    'Event',
    'Collected',
    'Impact',
    'Value',
    'Avg. Cost'
]

const HeaderRow = () => {
  return (
    <Stack
        direction="row"
        alignItems="center"
        spacing={1}
    >
        {rows.map((row, index) => (
            <Stack
                key={row}
                direction="row"
                alignItems="center"
                flexGrow={colWidths[index]}
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
            </Stack>
        ))}
    </Stack>
  )
}

export default HeaderRow