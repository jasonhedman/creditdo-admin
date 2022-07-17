import React from 'react'

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import ClearIcon from '@mui/icons-material/Clear';
import CheckIcon from '@mui/icons-material/Check';

import type { Status } from '../types' 
import { IconButton } from '@mui/material';

interface Props {
  status: Status;
  complete: () => Promise<void>;
  revert: () => Promise<void>;
}

const StatusBadge : React.FC<Props> = ({ status, complete, revert }) => {

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
      {
        status === 'completed' ? (
          <IconButton
            onClick={revert}
            size='small'
          >
            <ClearIcon
              fontSize='small'
              sx={{color: '#fff'}}
            />
          </IconButton>
        ) : (
          <IconButton
            size='small'
            onClick={complete}
          >
            <CheckIcon
              fontSize='small'
              sx={{
                color: status === 'notStarted' ? '#000' : '#fff',
              }}
            />
          </IconButton>
        )
      }
    </Stack>
  )
}

export default StatusBadge