import { FC } from 'react'

import Stack from '@mui/material/Stack'

import UpcomingEvent from '../UpcomingEvent'
import LessonProgress from '../LessonProgress'
import ImplementationProgress from '../ImplementationProgress'

import { Lesson } from '../../../hooks/useLessons'

interface Props {
  lessons: Lesson[];
}

const CompactView : FC<Props> = ({ lessons }) => {
  return (
    <Stack
        direction='row'
        spacing={1}
    >
        <UpcomingEvent 
          compact
        />
        <LessonProgress 
          compact
          lessons={lessons}
        />
        <ImplementationProgress 
          compact
        />
    </Stack>
  )
}

export default CompactView