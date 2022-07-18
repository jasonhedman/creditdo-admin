import { FC } from 'react'

import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import useClasses from '../../../hooks/useClasses';
import ClassChip from './ClassChip';

const CreateEvent : FC = () => {

    const { allClasses } = useClasses();

    return (
        <Stack
            spacing={4}
            alignItems='center'
        >
            <Stack
                alignItems='center'
            >
                <Typography
                    variant='h4'
                >
                    Create Event
                </Typography>
                <Typography>
                    Select a class
                </Typography>
            </Stack>
            <Stack
                direction='row'
                spacing={2}
            >
                {
                    allClasses.map(classData => (
                        <ClassChip
                            key={classData.id}
                            classData={classData}
                        />
                    ))
                }
            </Stack>
        </Stack>
    )
}

export default CreateEvent