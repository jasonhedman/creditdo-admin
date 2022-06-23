import React from 'react'

import Stack from '@mui/material/Stack'

import UpcomingEvent from '../UpcomingEvent'
import ImplementationProgress from '../ImplementationProgress'
import LessonProgress from '../LessonProgress'
import ToDos from '../ToDos';

const ExpandedView = () => {
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
            <LessonProgress />
            <ToDos />
        </Stack>
    </Stack>
  )
}

export default ExpandedView