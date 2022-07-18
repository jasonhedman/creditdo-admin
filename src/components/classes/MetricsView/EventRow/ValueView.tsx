import { FC } from 'react'

import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

interface Props {
    dollars: number
}

const ValueView : FC<Props> = ({ dollars }) => (
    <Stack>
        <Typography
            fontWeight='bold'
            color='success.main'
        >
            ${dollars.toLocaleString()}
        </Typography>
    </Stack>
)

export default ValueView