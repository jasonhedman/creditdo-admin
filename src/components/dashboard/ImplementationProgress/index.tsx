import React from 'react'

import SectionContainer from '../utility/SectionContainer';
import DonutView from './DonutView';
import ToDos from './ToDos'

const ImplementationProgress = () => {
  return (
    <SectionContainer
        title='Implementation Progress'
    >
        <DonutView />
        <ToDos />
    </SectionContainer>
  )
}

export default ImplementationProgress