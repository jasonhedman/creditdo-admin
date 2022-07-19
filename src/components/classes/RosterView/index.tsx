import React from 'react'

import Stack from '@mui/material/Stack'

import useClasses from '../../../hooks/useClasses';
import ClassView from './ClassView';

const RosterView = () => {

  const { classes } = useClasses();

  return (
    <Stack>
      {
        classes.map(classData => (
          <ClassView 
            key={classData.id}
            classData={classData}
          />
        ))
      }
    </Stack>
  )
}

export default RosterView