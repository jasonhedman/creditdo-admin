import { FC } from 'react'

import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import CircularProgress, { CircularProgressProps } from '@mui/material/CircularProgress'

interface Props {
    score: number;
    color?: CircularProgressProps['color'];
}

const ScoreCircle : FC<Props> = ({ score, color }) => {

    const size = 60;

  return (
    <Stack
        position='relative'
        alignItems='center'
        justifyContent='center'
        sx={{
            height: size,
            width: size,
        }}
    >
        <CircularProgress
            variant='determinate'
            value={score}
            color={color}
            size={size}
            thickness={5}
            sx={{
                position: 'absolute',
            }}
        />
        <Typography
            color={color}
        >
            {score}%
        </Typography>
    </Stack>
  )
}

export default ScoreCircle