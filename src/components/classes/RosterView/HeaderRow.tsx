import React from 'react'

import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

interface ItemProps {
    text: string
}

const Item : React.FC<ItemProps> = ({ text }) => (
    <Box
        px={1}
        py={0.25}
        borderRadius={1}
        sx={{
            backgroundColor: '#f6f6f6'
        }}
    >
        <Typography
            variant="caption"
            fontWeight='bold'
        >
            {text}
        </Typography>
    </Box>
)

const HeaderRow = () => {
  return (
    <Stack
        direction="row"
        spacing={2}
    >
        <Item text="Student" />
        <Item text="Lesson Progress" />
        <Item text="Hours" />
        <Item text="Events" />
        <Item text="Pre-Test" />
        <Item text="Post-Test" />
    </Stack>
  )
}

export default HeaderRow