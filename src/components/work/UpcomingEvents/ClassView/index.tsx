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
                    .filter(event => !filterDate || moment(filterDate).isBetween(
                        moment(event.startDate.seconds * 1000).hours(0).minutes(0).seconds(0),
                        moment(event.endDate.seconds * 1000).hours(23).minutes(59).seconds(59)
                    ))
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