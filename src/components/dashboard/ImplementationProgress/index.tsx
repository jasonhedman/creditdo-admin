import React from 'react'

import SectionContainer from '../utility/SectionContainer';
import DonutView from './DonutView';

interface Props {
  compact?: boolean
}

const ImplementationProgress : React.FC<Props> = ({ compact }) => {
  return (
    <SectionContainer
        title='Implementation Progress'
        compact={compact}
    >
      <DonutView 
        compact={compact}
      />
    </SectionContainer>
  )
}

export default ImplementationProgress