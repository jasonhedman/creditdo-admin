import React from 'react'

import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

import ToDo from './ToDo'

const toDos = [
    {
        title: 'Implement the new features',
        description: 'Implement the new features',
    },
    {
        title: 'Implement the new features',
        description: 'Implement the new features',
    },
    {
        title: 'Implement the new features',
        description: 'Implement the new features',
    }
]

const ToDos = () => {
  return (
    <Stack 
        flex={1}
        spacing={1}
    >
        <Typography
            variant="h6"
        >
            {toDos.length} To-Dos
        </Typography>
        <Divider />
        {toDos.map((toDo, index) => (
            <ToDo
                key={index}
                title={toDo.title}
                description={toDo.description}
            />
        ))}
    </Stack>
  )
}

export default ToDos