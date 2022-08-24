import { FC } from 'react'

import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

import ToDo from '../../utility/ToDo'

import { ToDo as ToDoType } from '../../../hooks/types'
import { Box } from '@mui/system'

interface Props {
    activeBucket: string;
    toDos: ToDoType[];
    check: (id: string) => void;
    uncheck: (id: string) => void;
}

const ToDos : FC<Props> = ({ activeBucket, toDos, check, uncheck }) => {
  return (
    <Stack 
        flex={1}
        spacing={1}
    >
        <Typography
            variant="h6"
        >
            {activeBucket}
        </Typography>
        <Divider />
        <Box
            sx={{
                maxHeight: '200px',
                overflowY: 'scroll',
            }}
        >
            {
                toDos.length > 0 ? (
                    toDos.map((toDo, index) => (
                        <ToDo
                            key={index}
                            toDo={toDo}
                            check={() => check(String(toDo.id))}
                            uncheck={() => uncheck(String(toDo.id))}
                        />
                    ))
                ) : (
                    <Typography
                        variant="body1"
                        color="textSecondary"
                    >
                        No To Dos
                    </Typography>
                )
            }
        </Box>
    </Stack>
  )
}

export default ToDos