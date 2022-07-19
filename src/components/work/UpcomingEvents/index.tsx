import { FC } from 'react'

import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import useClasses from '../../../hooks/useClasses';

import ClassView from './ClassView';

interface Props {
    filterDate: Date | null;
}

const UpcomingEvents : FC<Props> = ({ filterDate }) => {

    const { classes } = useClasses();

    return (
        <Stack
            flex={1}
            spacing={1}
        >
            <Typography
                variant='body2'
                sx={{
                    opacity: 0.75,
                }}
            >
                Upcoming Events
            </Typography>
            <Stack
                spacing={2}
            >
                {
                    classes.map(classData => (
                        <ClassView 
                            key={classData.id}
                            classData={classData}
                            filterDate={filterDate}
                        />
                    ))
                }
            </Stack>
        </Stack>
    )
}

export default UpcomingEvents