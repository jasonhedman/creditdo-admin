import { FC } from 'react'

import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import useEvent from '../../hooks/useEvent';
import EventDetails from './EventDetails';
import Image from 'next/image';
import ImpactDetails from './ImpactDetails';

interface Props {
    classId: string;
    eventId: string;
}

const EventComponent : FC<Props> = ({ classId, eventId }) => {

    const { event, loading, updateImpact } = useEvent(classId, eventId);

    if(loading) {
        return null;
    }

    return (
        <Stack
            alignItems='center'
            spacing={4}
        >
            {/* <Box
                sx={{
                    width: '100%',
                    height: 150,
                    position: 'relative',
                    borderRadius: "2rem",
                    overflow: 'hidden',
                }}
            >
                <Image 
                    alt="Event banner"
                    src='/static/images/food_drive.jpg'
                    objectFit='contain'
                    layout='fill'
                />
            </Box> */}
            <Typography
                variant='h5'
            >
                {event.title}
            </Typography>
            <EventDetails
                event={event}
            />
            <ImpactDetails
                poundsCollected={event.poundsCollected}
                updateImpact={updateImpact}
            />
        </Stack>
    )
}

export default EventComponent