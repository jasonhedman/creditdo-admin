import React from 'react'

import { useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

interface Props {
    numStudents: number;
    size: number;
}

const UserAvatars : React.FC<Props> = ({ numStudents, size }) => {

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
                                height: size,
                                width: size,
                                borderRadius: '50%',
                                border: '1px solid #FFF',
                                backgroundColor: theme.palette.secondary.main,
                                marginLeft: `-${size / 3}px`
                            }}
                        />
                    ))
                }
                <Box
                    sx={{
                        height: size,
                        width: size,
                        borderRadius: '50%',
                        border: '1px solid #FFF',
                        backgroundColor: theme.palette.secondary.main,
                        marginLeft: `-${size / 3}px`,
                        color: '#FFF',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: size / 2
                    }}
                >
                    +{numStudents - 5}
                </Box>
            </Stack>
        </Stack>
    )
}

export default UserAvatars;