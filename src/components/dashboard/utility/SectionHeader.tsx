import React from 'react'

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

interface Props {
    title: string;
    compact?: boolean;
}

const SectionHeader : React.FC<Props> = ({ title, compact }) => {
  return (
    <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        borderRadius={1}
        px={1.5}
        py={compact ? 1 : 0.25}
        sx={{
            backgroundColor: '#f6f6f6'
        }}
    >
        <Typography
            fontWeight='bold'
        >
            {title}
        </Typography>
        {!compact && (
            <IconButton>
                <ChevronRightIcon />
            </IconButton>
        )}
    </Stack>
  )
}

export default SectionHeader;