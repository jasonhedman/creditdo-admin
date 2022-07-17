import { FC } from 'react'

import Stack from '@mui/material/Stack'

import UpcomingEvent from '../UpcomingEvent'
import ImplementationProgress from '../ImplementationProgress'
import LessonProgress from '../LessonProgress'
import ToDos from '../ToDos';

import { Lesson } from '../../../hooks/useLessons'

interface Props {
    lessons: Lesson[];
}

const ExpandedView : FC<Props> = ({ lessons }) => {
  return (
    <Stack
        spacing={2}
    >
        <Stack
            direction='row'
            spacing={2}
        >
            <UpcomingEvent />
            <ImplementationProgress />
        </Stack>
        <Stack
            direction='row'
            spacing={2}
        >
            <LessonProgress
                lessons={lessons}
            />
            <ToDos />
        </Stack>
    </Stack>
  )
}

export default ExpandedView