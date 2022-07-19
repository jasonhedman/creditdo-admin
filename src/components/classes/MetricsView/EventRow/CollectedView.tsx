import { FC } from 'react';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import TakeoutDiningIcon from '@mui/icons-material/TakeoutDining';

interface Props {
    collectedPounds: number
}

const CollectedView : FC<Props> = ({ collectedPounds }) => (
    <Stack
        width='100%'
        spacing={0.5}
    >
        <Stack
            direction='row'
            ml='auto'
            alignItems='center'
        >
            <TakeoutDiningIcon
                fontSize='small'
                sx={{
                    color: 'gray'
                }}
            />
            <Typography
                fontWeight='bold'
                color='gray'
                fontSize='10px'
            >
                = 100 pounds
            </Typography>
        </Stack>
        <Stack
            direction="row"
            spacing={1}
        >
            <Stack>
                <Typography
                    fontWeight='bold'
                    variant='h5'
                    color='secondary.main'
                >
                    {collectedPounds}
                </Typography>
                <Typography
                    fontWeight='bold'
                    variant='body2'
                    color='secondary.main'
                >
                    Pounds
                </Typography>
            </Stack>
            <Stack
                direction='row'
                flexWrap='wrap'
            >
                {
                    Array.from({ length: Math.floor(collectedPounds / 100) }).map((_, index) => (
                        <TakeoutDiningIcon
                            key={index}
                            fontSize='small'
                            color='secondary'
                        />
                    ))
                }
                {
                    collectedPounds % 100 > 0 && (
                        <Box
                            width={`${(collectedPounds % 100) / 100 * 20}px`}
                            overflow='hidden'
                        >
                            <TakeoutDiningIcon
                                fontSize='small'
                                color='secondary'
                            />
                        </Box>
                    )
                }
            </Stack>
        </Stack>
    </Stack>
)

export default CollectedView;