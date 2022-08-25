import React from 'react'

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

interface Props {
    isFirstStep?: boolean;
    isLastStep?: boolean;
    isNextDisabled?: boolean;
    onNext: () => void;
    onPrevious?: () => void;
    onSkip?: () => void;
}

const WizardFooter : React.FC<Props> = ({ isFirstStep, isLastStep, isNextDisabled, onNext, onPrevious, onSkip}) => {
  return (
    <Stack
        alignItems="center"
        direction='row'
        justifyContent="flex-end"
        width='100%'
    >
        {
            !isFirstStep && (
                <Button
                    onClick={onPrevious}
                    sx={{
                        marginRight: 'auto'
                    }}
                >
                    Previous
                </Button>
            )
        }
        {
            onSkip && (
                <Button
                    onClick={onSkip}
                >
                    Skip
                </Button>
            )
        }
        <Button
            onClick={onNext}
            disabled={isNextDisabled}
            variant="contained"
        >
            Next
        </Button>
    </Stack>
  )
}

export default WizardFooter;