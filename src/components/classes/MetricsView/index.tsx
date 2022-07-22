import React from 'react'

import Stack from '@mui/material/Stack'
import Skeleton from '@mui/material/Skeleton'
import Typography from '@mui/material/Typography'

import ClassView from './ClassView'

import useClasses from '../../../hooks/useClasses'

const MetricsView = () => {

    const { classes, loading } = useClasses();

    return (
        <Stack
            spacing={2}
        >
            {
                loading ? (
                    <Skeleton 
                        variant="rectangular" 
                        height={100} 
                    />
                ) : (
                    classes.length > 0 ? (
                        classes.map(classData => (
                            <ClassView
                                key={classData.id}
                                classData={classData}
                            />
                        ))
                    ) : (
                        <Typography>
                            No classes found.
                        </Typography>
                    )
                )
            }
        </Stack>
    )
}

export default MetricsView