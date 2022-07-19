import { FC } from 'react'

import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

interface Props {
    dollarsPerPound: number
}

const AvgCostView : FC<Props> = ({ dollarsPerPound }) => (
    <Stack>
        <Typography
            variant='h6'
            fontWeight='bold'
        >
            ${dollarsPerPound.toFixed(2)} Per Pound
        </Typography>
    </Stack>
)

export default AvgCostView