import React from 'react'

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

import StatusBadge from './StatusBadge';

import moment from 'moment';

import { Lesson } from '../../../hooks/types';
import { Status } from '../types';

interface Props {
    lesson: Lesson;
    complete: () => Promise<void>;
    revert: () => Promise<void>;
}

const LessonView : React.FC<Props> = ({ lesson, complete, revert }) => {

    const status : Status = lesson.completed
        ? 'completed' 
        : moment().isAfter(lesson.dueDate.seconds * 1000) 
            ? 'pastDue'
            : 'notStarted';

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
                    Due {moment(lesson.dueDate.seconds * 1000).fromNow()}
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
                    {lesson.lengthHours} Hours
                </Typography>
            </Stack>
            <Box
                flex={1}
            />
            <StatusBadge 
                status={status}
                complete={complete}
                revert={revert}
            />
        </Stack>
    )
}

export default LessonView