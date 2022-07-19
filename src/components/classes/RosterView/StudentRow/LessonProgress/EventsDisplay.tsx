import { FC } from 'react'

import Stack from '@mui/material/Stack'
import Checkbox from '@mui/material/Checkbox'

interface Props {
    numCompleted: number;
}

const EventsDisplay : FC<Props> = ({ numCompleted }) => {
  return (
    <Stack
        direction='row'
    >
        {
            Array.from({ length: Math.min(numCompleted, 2) }).map((_, index) => (
                <Checkbox
                    key={index}
                    checked={true}
                    color='secondary'
                    sx={{
                        height: '24px',
                        width: '24px',
                    }}
                />
            ))
        }
    </Stack>
  )
}

export default EventsDisplay