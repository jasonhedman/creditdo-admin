import { FC } from 'react'

import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import useClasses from '../../../hooks/useClasses'
import NotSelected from './NotSelected'
import ToDoList from './ToDoList'

const ToDos : FC = () => {

  const { classView } = useClasses();

  return (
    <Stack 
      alignItems='center'
    >
      <Typography
        variant='h6'
      >
        To-Do
      </Typography>
      {
        classView === 'All Classes' ? (
          <NotSelected />
        ) : (
          <ToDoList 
            classView={classView}
          />
        )
      }
    </Stack>
  )
}

export default ToDos