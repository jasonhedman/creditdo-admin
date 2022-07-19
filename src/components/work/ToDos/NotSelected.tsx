import { FC } from 'react'

import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

const NotSelected : FC = () => {
  return (
    <Stack>
        <Typography>Select a class to view your to-dos.</Typography>
    </Stack>
  )
}

export default NotSelected