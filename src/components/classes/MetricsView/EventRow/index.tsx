import { FC } from 'react'

import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'

import CollectedView from './CollectedView'
import EventView from './EventView'
import AvgCostView from './AvgCostView'
import ImpactView from './ImpactView'
import ValueView from './ValueView'

import { colWidths } from '../types'
import { Event } from '../../../../hooks/useEvents'

const poundsPerMeal = 1.2;
const dollarsPerMeal = 4;


interface Props {
    event: Event
}

const EventRow : FC<Props> = ({ event }) => {

    const views = [
        <EventView 
            key='event'
            event={event}
        />,
        <CollectedView 
            key='collected' 
            collectedPounds={event.poundsCollected} 
        />,
        <ImpactView 
            key='impact'
            meals={event.poundsCollected / poundsPerMeal}
        />,
        <ValueView 
            key='value'
            dollars={event.poundsCollected / poundsPerMeal * dollarsPerMeal}
        />,
        <AvgCostView
            key='avgCost'
            dollarsPerPound={dollarsPerMeal / poundsPerMeal}

        />
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