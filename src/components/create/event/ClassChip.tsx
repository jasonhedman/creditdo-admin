import { FC } from 'react'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import moment from 'moment'

import { Class } from '../../../hooks/types'
import Link from 'next/link'

interface Props {
    classData: Class
}

const ClassChip : FC<Props> = ({ classData }) => {
  return (
    <Link
        href={`/create/event/${classData.id}`}
        passHref
    >
        <Card
            variant='outlined'
            elevation={20}
            sx={{
                cursor: 'pointer'
            }}
        >
            <CardContent>
                <Stack
                    alignItems='center'
                >
                    <Typography
                        fontWeight='bold'
                    >
                        {classData.name}
                    </Typography>
                    <Typography
                        variant='body2'
                    >
                        {moment(classData.time.seconds * 1000).format('h:mm a')}
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    </Link>
  )
}

export default ClassChip