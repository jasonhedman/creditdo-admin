import React from 'react'

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

interface Props {
    title: string;
}

const SectionHeader : React.FC<Props> = ({ title }) => {
  return (
    <Stack
        direction="row"
        justifyContent="space-between"
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
            {title}
        </Typography>
        <IconButton>
            <ChevronRightIcon />
        </IconButton>
    </Stack>
  )
}

export default SectionHeader;