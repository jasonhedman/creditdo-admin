import { FC } from 'react'

import Stack from '@mui/material/Stack'
import { Typography } from '@mui/material'

interface Props {
    firstName: string
    lastName: string
}

const StudentDisplay : FC<Props> = ({ firstName, lastName }) => {
  return (
    <Stack
        direction="row"
    >
        <Typography>
            {lastName}, {firstName}
        </Typography>
    </Stack>
  )
}

export default StudentDisplay