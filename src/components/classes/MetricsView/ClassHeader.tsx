import React from 'react'

import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

interface Props {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const ClassHeader : React.FC<Props> = ({ isOpen, setIsOpen }) => {
  return (
    <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
    >
        <Typography
            variant="h6"
            fontWeight='bold'
            sx={{
                color: isOpen ? 'secondary.main' : '#9CA3AF',
            }}
        >
            Class 1 (8:30)
        </Typography>
        <IconButton 
            color="secondary"
            onClick={() => setIsOpen(!isOpen)} 
        >
            {
                isOpen 
                    ? (
                        <KeyboardArrowUpIcon 
                            color='secondary'
                        /> 
                    ) : (
                        <KeyboardArrowDownIcon 
                            sx={{
                                color: '#9CA3AF',
                            }}
                        />
                    )
            }
        </IconButton>
    </Stack>
  )
}

export default ClassHeader