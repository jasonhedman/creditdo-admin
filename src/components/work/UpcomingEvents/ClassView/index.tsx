import { useState, FC } from 'react'

import Stack from '@mui/material/Stack'

import ClassHeader from './ClassHeader'
import EventDisplay from '../EventDisplay';

import { Class } from '../../../../hooks/types'
import useEvents from '../../../../hooks/useEvents';

interface Props {
    classData: Class;
}

const ClassView : FC<Props> = ({ classData }) => {

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
            isOpen && events.map((event, index) => (
                <EventDisplay
                    key={index}
                    event={event}
                />
            ))
        }
    </Stack>
  )
}

export default ClassView