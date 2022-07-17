import { FC } from 'react'

import SectionContainer from '../utility/SectionContainer'
import ProgressBar from './ProgressBar'

import { Lesson } from '../../../hooks/useLessons';

interface Props {
  compact?: boolean;
  lessons: Lesson[];
}

const LessonProgress : FC<Props> = ({ compact, lessons }) => {
  return (
    <SectionContainer
        title="Lesson Progress"
        compact={compact}
        navigateTo="/learn"
    >
        <ProgressBar 
          lessons={lessons}
        />
    </SectionContainer>
  )
}

export default LessonProgress