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

    const startDate = moment(event.startDate.seconds * 1000);
    const endDate = moment(event.endDate.seconds * 1000);

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
                    {startDate.format('MMM')}
                </Typography>
                <Typography
                    fontSize='1.25rem'
                >
                    {startDate.format('D')}
                </Typography>
            </Stack>
            <Typography>
                -
            </Typography>
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
                    {endDate.format('MMM')}
                </Typography>
                <Typography
                    fontSize='1.25rem'
                >
                    {endDate.format('D')}
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
                    {startDate.format('ddd, h:mm A')}
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