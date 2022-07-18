import { FC } from 'react'

import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import moment from 'moment'

import { Event } from '../../../../hooks/useEvents'

interface Props {
    event: Event
}

const EventView : FC<Props> = ({ event }) => {

    const date = moment(event.date.seconds * 1000);

    return (
        <Stack
            width='100%'
        >
            <Stack
                alignItems='flex-start'
            >
                <Typography
                    variant='caption'
                    fontWeight='bold'
                    color='white'
                    p={0.5}
                    borderRadius={1}
                    sx={{
                        backgroundColor: 'secondary.main'
                    }}
                >
                    {date.format('MMM D').toUpperCase()}
                </Typography>
            </Stack>
            <Typography
                variant='body2'
                fontWeight='bold'
                sx={{
                    textWrap: 'wrap'
                }}
            >
                {event.title}
            </Typography>
        </Stack>
    )
}

export default EventView