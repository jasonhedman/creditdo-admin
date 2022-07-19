import { useState, FC } from 'react'

import Stack from '@mui/material/Stack'

import UpcomingEvents from './UpcomingEvents'
import Calendar from './Calendar'

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
            >
                <Calendar 
                    filterDate={filterDate}
                    setDate={setDate}
                />
            </Stack>
        </Stack>
    )
}

export default WorkComponent