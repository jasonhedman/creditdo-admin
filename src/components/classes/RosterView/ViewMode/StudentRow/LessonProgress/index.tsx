import { FC } from 'react'

import Stack from '@mui/material/Stack'

import ProgressStep from './ProgressStep'

import useLessons from '../../../../../../hooks/useLessons'

import { getLessonStatus } from '../../../../../../services/utils'

import type { Status } from './types'

interface Step {
    status: Status;
    title: string;
}

interface Props {
    classId: string;
}

const LessonProgress : FC<Props> = ({ classId }) => {

  const { lessons } = useLessons(classId);

  const steps : Step[] = lessons.map(lesson => ({
      status: getLessonStatus(lesson),
      title: lesson.title,
  }))

  return (
    <Stack
      direction="row"
      spacing={0.5}
      width='100%'
      px={4}
    >
      {
        steps.map((step, index) => (
            <ProgressStep 
                key={index}
                isFirst={index === 0}
                isLast={index === steps.length - 1}
                status={step.status}
            />
        ))
      }
    </Stack>
  )
}

export default LessonProgress