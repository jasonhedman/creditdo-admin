import { FC } from 'react'

import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'

import CheckIcon from '@mui/icons-material/Check'
import EditIcon from '@mui/icons-material/Edit'

interface Props {
    isEditMode: boolean;
    setIsEditMode: (isEditMode: boolean) => void;
}

const EditToggle : FC<Props> = ({ isEditMode, setIsEditMode}) => {
  return (
    <Stack>
        {
            isEditMode ? (
                <IconButton
                    onClick={() => setIsEditMode(false)}
                    color='success'
                >
                    <CheckIcon />
                </IconButton>
            ) : (
                <IconButton
                    color='primary'
                    onClick={() => setIsEditMode(!isEditMode)}
                >
                    <EditIcon />
                </IconButton>
            )
        }
    </Stack>
  )
}

export default EditToggle