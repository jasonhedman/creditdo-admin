import React, {useState} from 'react'

import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack';

import ClassHeader from './ClassHeader'
import HeaderRow from './HeaderRow'
import EventRow from './EventRow';

const events = [
    {
        id: 1,
        date: 'AUG 24',
        name: 'Target School Supply Drive',
        collectedPounds: 1342,    
    }
]

const ClassView = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <Stack
            spacing={1}
        >
            <ClassHeader
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
            <Grid 
                container
                spacing={2}
            >
                <HeaderRow />
                {
                    events.map(event => (
                        <EventRow
                            key={event.id}
                            // event={event}
                        />
                    ))
                }
            </Grid>
        </Stack>
    )
}

export default ClassView