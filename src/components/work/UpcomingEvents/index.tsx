import React from 'react'

import moment from 'moment';

import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import EventDisplay from './EventDisplay'

import { Event } from './types'

const events : Event[] = [
    {
        title: 'Event 1',
        date: moment(),
        address: '400 Grand St, Manhattan, NY'
    },
    {
        title: 'Event 2',
        date: moment().add(1, 'day'),
        address: '400 Grand St, Manhattan, NY'
    }
]

const UpcomingEvents = () => {
  return (
    <Stack
        flex={1}
    >
        <Typography
            variant='body2'
            sx={{
                opacity: 0.75,
            }}
        >
            Upcoming Events
        </Typography>
        {
            events.map((event, index) => (
                <EventDisplay
                    key={index}
                    event={event}
                />
            ))
        }
    </Stack>
  )
}

export default UpcomingEvents