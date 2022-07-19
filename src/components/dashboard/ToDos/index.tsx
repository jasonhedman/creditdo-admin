import { FC } from 'react'

import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

import ToDo from '../../utility/ToDo'

import { ToDo as ToDoType } from '../../../hooks/types'

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
        {
            toDos.length > 0 ? (
                toDos.map((toDo, index) => (
                    <ToDo
                        key={index}
                        toDo={toDo}
                        check={() => check(toDo.id)}
                        uncheck={() => uncheck(toDo.id)}
                    />
                ))
            ) : (
                <Typography
                    variant="body1"
                    color="textSecondary"
                >
                    No todos
                </Typography>
            )
        }
    </Stack>
  )
}

export default ToDos