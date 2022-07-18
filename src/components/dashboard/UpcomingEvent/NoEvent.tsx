import { FC } from 'react'

import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Link from 'next/link'

interface Props {
    classId: string
}

const NoEvent : FC<Props> = ({ classId }) => {
  return (
    <Stack
        alignItems='center'
        spacing={2}
    >
        <Typography
            variant='body1'
            fontWeight='semibold'
        >
            No upcoming events
        </Typography>
        <Link
            href={`/create/event/${classId}`}
            passHref
        >
            <Button
                variant='contained'
                color='secondary'
            >
                Add Event
            </Button>
        </Link>
        
    </Stack>
  )
}

export default NoEvent