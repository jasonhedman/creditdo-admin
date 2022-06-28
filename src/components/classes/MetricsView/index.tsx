import React from 'react'

import Stack from '@mui/material/Stack'

import ClassView from './ClassView'

const classes = [
    {
        id: 1,
        name: 'Class 1',
        startTime: '8:30',
        endTime: '9:30',
    }
]

const MetricsView = () => {
  return (
    <Stack>
        {
            classes.map(classItem => (
                <ClassView
                    key={classItem.id} 
                />
            ))
        }
    </Stack>
  )
}

export default MetricsView