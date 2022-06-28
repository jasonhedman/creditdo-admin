import React from 'react'

import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { colWidths } from './types'

const EventRow = () => {
  return (
    <Stack
        direction="row"
        alignItems="center"
        spacing={1}
    >
        <Stack
            flexBasis={colWidths[0]}
        >
            <Typography
                variant='caption'
                fontWeight='bold'
            >
                AUG 24
            </Typography>
            <Typography
                variant='body2'
                fontWeight='bold'
                sx={{
                    textWrap: 'wrap'
                }}
            >
                Target School Supply Drive
            </Typography>
        </Stack>
        <Stack
            flexBasis={colWidths[1]}
        >
            <Typography
                fontWeight='bold'
            >
                = 1000 pounds
            </Typography>
            <Stack
                direction="row"
            >
                <Stack>
                    <Typography
                        fontWeight='bold'
                    >
                        1342
                    </Typography>
                    <Typography
                        fontWeight='bold'
                    >
                        Pounds
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
        <Stack
            flexBasis={colWidths[2]}
        >
            <Stack>
                <Typography
                    fontWeight='bold'
                >
                    250
                </Typography>
                <Typography
                    fontWeight='bold'
                >
                    Meals
                </Typography>
            </Stack>
        </Stack>
        <Stack
            flexBasis={colWidths[3]}
        >
            <Typography
                fontWeight='bold'
            >
                $2,500
            </Typography>
        </Stack>
        <Stack
            flexBasis={colWidths[4]}
        >
            <Typography
                fontWeight='bold'
            >
                $10 Per Pound
            </Typography>
        </Stack>
    </Stack>
  )
}

export default EventRow