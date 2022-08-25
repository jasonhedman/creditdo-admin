import { FC } from 'react'

import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'


interface Props {
  addStudent: () => void;
}

const AddStudent : FC<Props> = ({ addStudent }) => {

  return (
    <Stack
        direction="row"
        alignItems='center'
        spacing={2}
    >
      <Button
        onClick={() => addStudent()}
      >
        Add
      </Button>
    </Stack>
  )
}

export default AddStudent