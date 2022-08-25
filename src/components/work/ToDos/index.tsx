import { FC } from 'react'

import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import ToDoList from './ToDoList'

interface Props {
  classId: string
}

const ToDos : FC<Props> = ({ classId }) => {
  return (
    <Stack>
      <Typography
        variant='h6'
      >
        To-Do
      </Typography>
      <ToDoList 
        classId={classId}
      />
    </Stack>
  )
}

export default ToDos