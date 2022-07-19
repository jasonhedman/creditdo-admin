import { useState, FC } from 'react'

import Stack from '@mui/material/Stack'

import UpcomingEvents from './UpcomingEvents'
import Calendar from './Calendar'
import ToDos from './ToDos'

const WorkComponent : FC = () => {

    const [filterDate, setFilterDate] = useState<Date | null>(null);

    const setDate = (date: Date | null) => {
        setFilterDate(date);
    }

    return (
        <Stack
            direction='row'
            spacing={1}
        >
            <UpcomingEvents 
                filterDate={filterDate}
            />
            <Stack
                flex={1}
                spacing={4}
            >
                <Calendar 
                    filterDate={filterDate}
                    setDate={setDate}
                />
                <ToDos />
            </Stack>
        </Stack>
    )
}

export default WorkComponent