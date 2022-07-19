import { FC } from 'react'

import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { Class } from '../../../hooks/useClasses';
import moment from 'moment';

interface Props {
    classData: Class
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const ClassHeader : FC<Props> = ({ classData, isOpen, setIsOpen }) => {
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
            {classData.name} ({moment(classData.time.seconds * 1000).format('H:mm')})
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