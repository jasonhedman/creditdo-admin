import { FC } from 'react'

import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import moment from 'moment';

import { Event } from '../../hooks/types'

interface Props {
    event: Event;
}

const EventDetails : FC<Props> = ({ event }) => {

    const date = moment(event.startDate.seconds * 1000);

    return (
        <Stack
            alignItems='center'
        >
            <Typography
                variant='h6'
            >
                Event Details
            </Typography>
            <Typography
                variant='body1'
            >
                Time: {date.format('MMM DD, YYYY h:mm A')}
            </Typography>
            <Typography
                variant='body1'
            >
                Address: {event.address}
            </Typography>
        </Stack>
    )
}

export default EventDetails