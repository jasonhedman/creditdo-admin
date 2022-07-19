import { FC } from 'react'

import Typography from '@mui/material/Typography'

interface Props {
    hours: number;
}

const HoursDisplay : FC<Props> = ({ hours }) => {
  return (
    <Typography
        fontWeight='bold'
        variant='h6'
    >
        {hours}
    </Typography>
  )
}

export default HoursDisplay