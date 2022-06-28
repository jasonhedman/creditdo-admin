import React from 'react'

import SectionContainer from '../utility/SectionContainer'
import ProgressBar from './ProgressBar'

interface Props {
  compact?: boolean
}

const LessonProgress : React.FC<Props> = ({ compact }) => {
  return (
    <SectionContainer
        title="Lesson Progress"
        compact={compact}
        navigateTo="/learn"
    >
        <ProgressBar />
    </SectionContainer>
  )
}

export default LessonProgress