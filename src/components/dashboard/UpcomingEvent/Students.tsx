import React from 'react'

import { useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

const numStudents = 10;

const Students = () => {

    const theme = useTheme();

    return (
        <Stack
            direction="row"
            justifyContent="flex-end"
        >
            <Stack direction="row">
                {
                    [...Array(5)].map((_, i) => (
                        <Box
                            key={i}
                            sx={{
                                height: 40,
                                width: 40,
                                borderRadius: '50%',
                                border: '1px solid #FFF',
                                backgroundColor: theme.palette.secondary.main,
                                marginLeft: -1.75
                            }}
                        />
                    ))
                }
                <Box
                    sx={{
                        height: 40,
                        width: 40,
                        borderRadius: '50%',
                        border: '1px solid #FFF',
                        backgroundColor: theme.palette.secondary.main,
                        marginLeft: -1.75,
                        color: '#FFF',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    +{numStudents - 5}
                </Box>
            </Stack>
        </Stack>
    )
}

export default Students;