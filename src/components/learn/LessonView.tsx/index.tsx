import React from 'react'

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

import { Lesson } from '../types'
import StatusBadge from './StatusBadge';

interface Props {
    lesson: Lesson
}

const LessonView : React.FC<Props> = ({ lesson }) => {
  return (
    <Stack
        direction='row'
        alignItems='center'
        spacing={8}
        px={1.5}
    >
        <Stack>
            <Typography
                variant='h6'
            >
                {lesson.title}
            </Typography>
            <Typography
                variant='body2'
            >
                Posted {lesson.date.toDateString()}
            </Typography>
        </Stack>
        <Stack
            direction='row'
            alignItems='center'
            spacing={1}
        >
            <AccessTimeIcon 
                fontSize='small'
            />
            <Typography
                variant='body2'
            >
                {lesson.duration} Hours
            </Typography>
        </Stack>
        <Box
            flex={1}
        />
        <StatusBadge 
            status={lesson.status}
        />
    </Stack>
  )
}

export default LessonView