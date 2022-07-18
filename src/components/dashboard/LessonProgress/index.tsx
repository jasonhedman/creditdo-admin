import { FC } from 'react'

import Skeleton from '@mui/material/Skeleton'

import SectionContainer from '../utility/SectionContainer'
import ProgressBar from './ProgressBar'

import useLessons from '../../../hooks/useLessons';

interface Props {
  compact?: boolean;
  classId: string;
}

const LessonProgress : FC<Props> = ({ compact, classId }) => {

  const { lessons, loading } = useLessons(classId);

  return (
    <SectionContainer
        title="Lesson Progress"
        compact={compact}
        navigateTo="/learn"
    >
      {
        loading ? (
          <Skeleton 
            variant="rectangular"
          />
        ) : (
          <ProgressBar 
            lessons={lessons}
          />
        )
      }
    </SectionContainer>
  )
}

export default LessonProgress