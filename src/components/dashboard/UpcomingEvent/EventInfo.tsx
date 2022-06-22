import React from 'react'

import { useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const EventInfo = () => {

    const theme = useTheme();

    return (
        <Stack
            direction="row"
            alignItems='center'
            spacing={2}
        >
            <Stack
                p={1}
                borderRadius={1}
                alignItems='center'
                sx={{
                    backgroundColor: theme.palette.secondary.main,
                    color: '#FFF',
                }}
            >
                <Typography variant='body1'>
                    Aug
                </Typography>
                <Typography
                    fontSize='1.25rem'
                >
                    24
                </Typography>
            </Stack>
            <Stack>
                <Typography
                    variant='body1'
                    fontWeight='bold'
                >
                    Target School Supply Drive
                </Typography>
                <Typography
                    variant='body2'
                >
                    Sat, 10:00 AM
                </Typography>
                <Typography
                    variant='body2'
                >
                    400 Grand St, Manhattan, NY
                </Typography>
            </Stack>
        </Stack>
    )
}

export default EventInfo