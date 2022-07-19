import React from 'react'

import Stack from '@mui/material/Stack'
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import AccessTimeIcon from '@mui/icons-material/AccessTime';

import moment from 'moment'

import { ToDo as ToDoType } from '../../hooks/types'

interface Props {
    toDo: ToDoType;
    check: () => void;
    uncheck: () => void;
}

const ToDo : React.FC<Props> = ({ toDo, check, uncheck }) => {

    const dueDate = moment(toDo.dueDate.seconds * 1000)

    return (
        <Stack
            direction="row"
            alignItems='center'
        >
            <Checkbox 
                checked={toDo.completed}
                onChange={toDo.completed ? uncheck : check}
            />
            <Stack>
                <Typography
                    variant='body1'
                    fontWeight='semibold'
                >
                    {toDo.title}
                </Typography>
                <Typography
                    variant='body2'
                >
                    {toDo.description}
                </Typography>
            </Stack>
            <Box 
                flex={1}
                minWidth='2rem'
            />
            <Stack
                direction="row"
                alignItems="center"
                spacing={0.5}
                p={0.5}
                borderRadius={1}
                sx={{
                    backgroundColor: '#f6f6f6'
                }}
            >
                <AccessTimeIcon 
                    sx={{
                        fontSize: '15px',
                        strokeColor: 'text.secondary'
                    }}
                />
                <Typography
                    variant='body2'
                    color='textSecondary'
                >
                    {dueDate.format('MMM DD')}
                </Typography>
            </Stack>
        </Stack>
    )
}

export default ToDo