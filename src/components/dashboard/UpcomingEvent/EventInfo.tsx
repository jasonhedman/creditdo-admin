import { FC } from 'react'

import { useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import moment from 'moment';

import { Event } from '../../../hooks/types';

interface Props {
    event: Event
}

const EventInfo : FC<Props> = ({ event }) => {

    const theme = useTheme();

    const date = moment(event.date.seconds * 1000);

    return (
        <Stack
            direction="row"
            alignItems='center'
            spacing={2}
        >
            <Stack
                p={1}
                borderRadius={1}
                alignItems='center'
                sx={{
                    backgroundColor: theme.palette.secondary.main,
                    color: '#FFF',
                }}
            >
                <Typography variant='body1'>
                    {date.format('MMM')}
                </Typography>
                <Typography
                    fontSize='1.25rem'
                >
                    {date.format('D')}
                </Typography>
            </Stack>
            <Stack>
                <Typography
                    variant='body1'
                    fontWeight='bold'
                >
                    {event.title}
                </Typography>
                <Typography
                    variant='body2'
                >
                    {date.format('ddd, h:mm A')}
                </Typography>
                <Typography
                    variant='body2'
                >
                    {event.address}
                </Typography>
            </Stack>
        </Stack>
    )
}

export default EventInfo