import React from 'react'

import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import ProgressStep, {Status} from './ProgressStep'

const steps : Status[] = [
    'completed',
    'completed',
    'completed',
    'pastDue',
    'notStarted',
    'notStarted',
]

const ProgressBar = () => {

    const [selectedStep, setSelectedStep] = React.useState<number>(0);

    return (
        <Stack>
            <Typography>
                Lesson 3: Goal-Set
            </Typography>
            <Stack
                direction="row"
                spacing={0.5}
            >
                {
                    steps.map((status, index) => (
                        <ProgressStep 
                            key={index}
                            isFirst={index === 0}
                            isLast={index === steps.length - 1}
                            status={status}
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