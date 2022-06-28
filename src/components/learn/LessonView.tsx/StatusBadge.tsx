import React from 'react'

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import type { Status } from '../types' 

interface Props {
  status: Status;
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
    <Stack
      direction='row'
      alignItems='center'
      spacing={0.5}
      borderRadius={1}
      px={1}
      py={0.5}
      sx={{
        backgroundColor: backgroundColor[status],
      }}
    >
        <Typography
          variant='body2'
          fontWeight='bold'
          sx={{
            color: status === 'notStarted' ? '#000' : '#fff',
          }}
        >
            {displayText[status]}
        </Typography>
        <KeyboardArrowDownIcon 
          fontSize='small'
          sx={{
            color: status === 'notStarted' ? '#000' : '#fff',
          }}
        />
    </Stack>
  )
}

export default StatusBadge