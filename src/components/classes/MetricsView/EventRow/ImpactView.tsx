import { FC } from "react"

import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

interface Props {
    meals: number
}

const ImpactView : FC<Props> = ({ meals }) => (
    <Stack
        height='80px'
        width='80px'
        borderRadius='50%'
        alignItems='center'
        justifyContent='center'
        sx={{
            backgroundColor: 'primary.main'
        }}
    >
        <Typography
            fontWeight='bold'
            color='white'
            variant='h5'
        >
            {meals.toFixed(0)}
        </Typography>
        <Typography
            fontWeight='bold'
            color='white'
            variant='body2'
        >
            Meals
        </Typography>
    </Stack>
)

export default ImpactView