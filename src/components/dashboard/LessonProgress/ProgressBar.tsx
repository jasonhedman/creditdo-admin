import React from 'react'

import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import StatusBadge from './StatusBadge'
import ProgressStep from './ProgressStep'

import type { Status } from './types'

interface Step {
    status: Status;
    title: string;
}

const steps : Step[] = [
    {
        status: 'completed',
        title: 'Lesson 1',
    },
    {
        status: 'completed',
        title: 'Lesson 2',
    },
    {
        status: 'completed',
        title: 'Lesson 3',
    },
    {
        status: 'pastDue',
        title: 'Lesson 4',
    },
    {
        status: 'notStarted',
        title: 'Lesson 5',
    },
    {
        status: 'notStarted',
        title: 'Lesson 6',
    },

]

const ProgressBar = () => {

    const [selectedStep, setSelectedStep] = React.useState<number>(0);

    return (
        <Stack spacing={2}>
            <Stack
                direction="row"
                spacing={2}
                alignItems="center"
            >
                <Typography
                    variant="h6"
                >
                    {steps[selectedStep].title}
                </Typography>
                <StatusBadge 
                    status={steps[selectedStep].status} 
                />
            </Stack>
            <Stack
                direction="row"
                spacing={0.5}
            >
                {
                    steps.map((step, index) => (
                        <ProgressStep 
                            key={index}
                            isFirst={index === 0}
                            isLast={index === steps.length - 1}
                            status={step.status}
                            selected={index === selectedStep}
                            onClick={() => setSelectedStep(index)}
                        />
                    ))
                }
            </Stack>
        </Stack>
    )
}

export default ProgressBar