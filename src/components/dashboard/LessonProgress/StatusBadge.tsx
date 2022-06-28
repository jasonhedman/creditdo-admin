import React from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import type { Status } from './types'

interface Props {
    status: Status
}

const backgroundColor = {
    completed: '#9fc440',
    pastDue: '#de483a',
    notStarted: '#dcdcdc',
}

const displayText = {
    completed: 'Completed',
    pastDue: 'Past Due',
    notStarted: 'Not Started',
}

const StatusBadge : React.FC<Props> = ({ status }) => {
  return (
    <Box
        px={1}
        py={0.5}
        sx={{
            backgroundColor: backgroundColor[status],
            borderRadius: 1,
        }}
    >
        <Typography
            variant='body2'
            fontWeight='bold'
            color={(status === 'notStarted') ? 'black' : 'white'}
        >
            {displayText[status]}
        </Typography>
    </Box>
  )
}

export default StatusBadge