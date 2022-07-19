import { useState, FC } from 'react'

import Stack from '@mui/material/Stack'

import ClassHeader from './ClassHeader'
import EventDisplay from '../EventDisplay';

import { Class } from '../../../../hooks/types'
import useEvents from '../../../../hooks/useEvents';
import moment from 'moment';

interface Props {
    classData: Class;
    filterDate: Date | null;
}

const ClassView : FC<Props> = ({ classData, filterDate }) => {

    const { events, loading } = useEvents(classData.id);

    const [isOpen, setIsOpen] = useState(true);

    return (
        <Stack>
            <ClassHeader
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                classData={classData}
            />
            {
                isOpen && events
                    .filter(event => !filterDate || moment(event.date.seconds * 1000).isSame(filterDate, 'day'))
                    .map((event, index) => (
                    <EventDisplay
                        key={index}
                        event={event}
                        classId={classData.id}
                    />
                ))
            }
        </Stack>
    )
}

export default ClassView