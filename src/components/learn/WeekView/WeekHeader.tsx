import React from 'react'

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DownloadIcon from '@mui/icons-material/Download';

interface Props {
    weekNumber: number;
}

const WeekHeader : React.FC<Props> = ({ weekNumber }) => {
  return (
    <Stack
        direction="row"
        alignItems="center"
        borderRadius={1}
        px={1.5}
        py={0.25}
        sx={{
            backgroundColor: '#f6f6f6'
        }}
    >
        <Typography
            fontWeight='bold'
        >
            Week {weekNumber} Lessons
        </Typography>
        <Box
            flex="1"
        />
        <IconButton 
            color="secondary"
        >
            <DownloadIcon />
        </IconButton>
        <IconButton 
            color="secondary"
        >
            <MoreHorizIcon />
        </IconButton>
    </Stack>
  )
}

export default WeekHeader