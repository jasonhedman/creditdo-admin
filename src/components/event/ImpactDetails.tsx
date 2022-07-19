import { useState, FC } from 'react'

import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import TextField from '@mui/material/TextField'  

import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';

interface Props {
    poundsCollected: number;
    updateImpact: (poundsCollected: number) => void;
}

const ImpactDetails : FC<Props> = ({ updateImpact, poundsCollected }) => {

    const [editMode, setEditMode] = useState(false);
    const [poundsCollectedInput, setPoundsCollectedInput] = useState<number>(poundsCollected);

    const onSave = () => {
        updateImpact(poundsCollectedInput);
        setEditMode(false);
    }

    return (
        <Stack
            alignItems='center'
            spacing={2}
        >
            <Stack
                direction='row'
                alignItems='center'
                spacing={2}
            >
                <Typography
                    variant='h6'
                >
                    Impact Details
                </Typography>
                {
                    editMode ? (
                        <Stack
                            direction='row'
                        >
                            <IconButton
                                onClick={onSave}
                                color='success'
                            >
                                <CheckIcon />
                            </IconButton>
                            <IconButton
                                onClick={() => setEditMode(false)}
                                color='error'
                            >
                                <CloseIcon />
                            </IconButton>
                        </Stack>
                    ) : (
                        <IconButton
                            color='primary'
                            onClick={() => setEditMode(!editMode)}
                        >
                            <EditIcon />
                        </IconButton>
                    )
                }
            </Stack>
            {
                    editMode ? (
                        <TextField
                            value={`${poundsCollectedInput}`}
                            onChange={(e) => setPoundsCollectedInput(Number(e.target.value))}
                            label='Pounds Collected'
                        />
                    ) : (
                        <Typography
                            variant='body1'
                        >
                            Pounds collected: {poundsCollected}
                        </Typography>
                    )
                }
        </Stack>
    )
}

export default ImpactDetails