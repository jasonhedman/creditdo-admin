import React from 'react'

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { Event } from './types';
import UserAvatars from '../../utility/UserAvatars';

interface Props {
    event: Event
}

const EventDisplay : React.FC<Props> = ({ event }) => {
  return (
    <Stack
        direction="row"
        alignItems="center"
        spacing={4}
    >
        <Box
            sx={{
                width: 150,
                height: 100,
                position: 'relative',
                backgroundImage: `url('/static/images/food_drive.jpg')`,
                backgroundSize: 'cover',
                borderRadius: 1
            }}
        >
            <Stack
                alignItems='center'
                p={0.5}
                sx={{
                    position: 'absolute',
                    top: '0.5rem',
                    left: '0.5rem',
                    backgroundColor: 'rgba(0, 0, 0, 0.75)',
                    borderRadius: 1
                }}
            >
                <Typography
                    variant='body2'
                    color='white'
                >
                    {event.date.format('MMM')}
                </Typography>
                <Typography
                    variant='body1'
                    color='white'
                    fontWeight='bold'
                >
                    {event.date.format('DD')}
                </Typography>
            </Stack>
        </Box>
        <Stack>
            <Typography
                variant='h6'
                py={1}
            >
                {event.title}
            </Typography>
            <Typography
                variant='body2'
            >
                {event.date.format('ddd, h:mma')}
            </Typography>
            <Typography
                variant='body2'
                mb={1}
            >
                {event.address}
            </Typography>
            <UserAvatars 
                size={25}
                numStudents={10}
            />
        </Stack>
    </Stack>
  )
}

export default EventDisplay