import React from 'react'

import Link from 'next/link';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import { Event } from '../../../hooks/types';
import UserAvatars from '../../utility/UserAvatars';
import moment from 'moment';

interface Props {
    classId: string;
    event: Event;
}

const EventDisplay : React.FC<Props> = ({ classId, event }) => {

    const theme = useTheme();

    const startDate = moment(event.startDate.seconds * 1000);
    const endDate = moment(event.endDate.seconds * 1000);

    return (
        <Stack
            direction="row"
            alignItems="center"
            spacing={2}
        >
            <Stack
                p={1}
                borderRadius={1}
                alignItems='center'
                sx={{
                    backgroundColor: theme.palette.primary.main,
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
                    backgroundColor: theme.palette.primary.main,
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
                <Link
                    href={`/events/${classId}/${event.id}`}
                    passHref
                >
                    <Typography
                        variant='h6'
                        py={1}
                        sx={{
                            cursor: 'pointer'
                        }}
                    >
                        {event.title}
                    </Typography>
                </Link>
                <Typography
                    variant='body2'
                >
                    {startDate.format('ddd, h:mma')}
                </Typography>
                <Typography
                    variant='body2'
                    mb={1}
                >
                    {event.address}
                </Typography>
                <UserAvatars 
                    size={25}
                    numStudents={event.participants.length}
                />
            </Stack>
        </Stack>
    )
}

export default EventDisplay