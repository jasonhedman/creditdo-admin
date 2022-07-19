import React from 'react'

import Stack from '@mui/material/Stack'

import ClassView from './ClassView'

import useClasses from '../../../hooks/useClasses'

const MetricsView = () => {

    const { classes, loading } = useClasses();

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

export default MetricsView