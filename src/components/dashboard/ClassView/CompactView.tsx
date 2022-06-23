import React from 'react'

import Stack from '@mui/material/Stack'

import UpcomingEvent from '../UpcomingEvent'
import LessonProgress from '../LessonProgress'
import ImplementationProgress from '../ImplementationProgress'

const CompactView = () => {
  return (
    <Stack
        direction='row'
        spacing={1}
    >
        <UpcomingEvent compact/>
        <LessonProgress  compact/>
        <ImplementationProgress compact/>
    </Stack>
  )
}

export default CompactView