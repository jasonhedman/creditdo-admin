import { useState, FC } from 'react'

import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack';

import ClassHeader from './ClassHeader'
import HeaderRow from './HeaderRow'
import EventRow from './EventRow';
import { Class } from '../../../hooks/useClasses';
import useEvents from '../../../hooks/useEvents';

const events = [
    {
        id: 1,
        date: 'AUG 24',
        name: 'Target School Supply Drive',
        collectedPounds: 1342,    
    }
]

interface Props {
    classData: Class
}

const ClassView : FC<Props> = ({ classData }) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const { events, loading } = useEvents(classData.id); 

    return (
        <Stack
            spacing={1}
        >
            <ClassHeader
                classData={classData}
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
                            event={event}
                        />
                    ))
                }
            </Grid>
        </Stack>
    )
}

export default ClassView