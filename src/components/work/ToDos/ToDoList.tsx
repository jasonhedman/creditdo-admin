import { useState, FC } from 'react'

import Stack from '@mui/material/Stack'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';

import useToDos from '../../../hooks/useToDos'
import { statuses } from '../../../hooks/types'
import ToDo from '../../utility/ToDo';

interface Props {
    classView: string
}

const ToDoList : FC<Props> = ({ classView }) => {

    const { toDoBuckets, check, uncheck } = useToDos(classView)

    const [tabValue, setTabValue] = useState<number>(0)

    const handleChange = (_, newValue: number) => {
        setTabValue(newValue);
    };

    return (
        <Stack
            alignItems='center'
            spacing={2}
        >
            <Tabs
                value={tabValue}
                onChange={handleChange}
                indicatorColor='primary'
                textColor='primary'
            >
                {
                    statuses.map((status, index) => (
                        <Tab
                            key={index}
                            label={status}
                        />
                    ))
                }
            </Tabs>
            <Stack
                spacing={1}
                width='100%'
            >
                {
                    toDoBuckets[statuses[tabValue]].length > 0 ? (
                        toDoBuckets[statuses[tabValue]].map(toDo => (
                            <ToDo
                                key={toDo.id}
                                toDo={toDo}
                                check={() => check(String(toDo.id))}
                                uncheck={() => uncheck(String(toDo.id))}
                            />
                        ))
                    ) : (
                        <Typography
                            textAlign='center'
                        >
                            No To-Dos
                        </Typography>
                    )
                }
            </Stack>
        </Stack>
    )
}

export default ToDoList