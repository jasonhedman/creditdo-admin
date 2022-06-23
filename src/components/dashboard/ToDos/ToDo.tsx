import React from 'react'

import Stack from '@mui/material/Stack'
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'

interface Props {
    title: string;
    description: string;
}

const ToDo : React.FC<Props> = ({ title, description }) => {

    return (
        <Stack
            direction="row"
        >
            <Checkbox />
            <Stack>
                <Typography
                    variant='body1'
                    fontWeight='semibold'
                >
                    {title}
                </Typography>
                <Typography
                    variant='body2'
                >
                    {description}
                </Typography>
            </Stack>
        </Stack>
    )
}

export default ToDo