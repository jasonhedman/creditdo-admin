import React from 'react'

import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import TakeoutDiningIcon from '@mui/icons-material/TakeoutDining';

import { colWidths } from './types'

const EventView : React.FC = () => (
    <Stack>
        <Stack
            alignItems='flex-start'
        >
            <Typography
                variant='caption'
                fontWeight='bold'
                color='white'
                p={0.5}
                borderRadius={1}
                sx={{
                    backgroundColor: 'secondary.main'
                }}
            >
                AUG 24
            </Typography>
        </Stack>
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
)

interface CollectedProps {
    collectedPounds: number
}

const CollectedView : React.FC<CollectedProps> = ({ collectedPounds }) => (
    <Stack
        width='100%'
        spacing={0.5}
    >
        <Stack
            direction='row'
            ml='auto'
        >
            <TakeoutDiningIcon 
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
                    variant='body2'
                    color='secondary.main'
                >
                    {collectedPounds}
                </Typography>
                <Typography
                    fontWeight='bold'
                    variant='caption'
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

const ImpactView : React.FC = () => (
    <Stack
        height='80px'
        width='80px'
        borderRadius='50%'
        alignItems='center'
        justifyContent='center'
        sx={{
            backgroundColor: 'primary.main'
        }}
    >
        <Typography
            fontWeight='bold'
            color='white'
        >
            250
        </Typography>
        <Typography
            fontWeight='bold'
            color='white'
            variant='caption'
        >
            Meals
        </Typography>
    </Stack>
)

const ValueView : React.FC = () => (
    <Stack>
        <Typography
            fontWeight='bold'
            color='success.main'
        >
            $2,500
        </Typography>
    </Stack>
)

const AvgCostView : React.FC = () => (
    <Stack>
        <Typography
            fontWeight='bold'
        >
            $10 Per Pound
        </Typography>
    </Stack>
)

const EventRow = () => {

    const views = [
        <EventView key='event' />,
        <CollectedView 
            key='collected' 
            collectedPounds={1342} 
        />,
        <ImpactView key='impact' />,
        <ValueView key='value' />,
        <AvgCostView key='avgCost' />
    ]

    return (
        <Grid
            py={2}
            container
            spacing={1}
        >
            {colWidths.map((width, index) => (
                <Grid
                    key={index}
                    item
                    xs={width}
                >
                    <Stack
                        height='100%'
                        justifyContent='center'
                        alignItems='center'
                    >
                        {views[index]}
                    </Stack>
                </Grid>
            ))}
        </Grid>
    )
}

export default EventRow