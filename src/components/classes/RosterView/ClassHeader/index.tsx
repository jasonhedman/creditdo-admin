import { FC } from 'react'

import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { Class } from '../../../../hooks/types';
import moment from 'moment';
import EditToggle from './EditToggle';

interface Props {
    classData: Class
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    isEditMode: boolean;
    setIsEditMode: (isEditMode: boolean) => void;
}

const ClassHeader : FC<Props> = ({ classData, isOpen, setIsOpen, isEditMode, setIsEditMode }) => {
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
        <Stack
            direction="row"
        >
            {
                isOpen && (
                    <EditToggle 
                        isEditMode={isEditMode}
                        setIsEditMode={setIsEditMode}
                    />
                )
            }
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
    </Stack>
  )
}

export default ClassHeader