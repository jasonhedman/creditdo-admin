import { useState, FC } from 'react'

import Stack from '@mui/material/Stack'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';

import { todoTabs } from '../../../hooks/types'
import ToDo from '../../utility/ToDo';

import useEventToDos from '../../../hooks/useEventToDos';

interface Props {
    classId: string
}

const ToDoList : FC<Props> = ({ classId }) => {

    const { toDoBuckets, check, uncheck } = useEventToDos(classId);

    const [tabValue, setTabValue] = useState<number>(0)

    const handleChange = (_, newValue: number) => {
        setTabValue(newValue);
    };

    return (
        <Stack
            spacing={2}
        >
            <Tabs
                value={tabValue}
                onChange={handleChange}
                indicatorColor='primary'
                textColor='primary'
            >
                {
                    todoTabs.map((status, index) => (
                        <Tab
                            key={index}
                            label={status}
                            sx={{
                                paddingX: '0.5rem'
                            }}
                        />
                    ))
                }
            </Tabs>
            <Stack
                spacing={1}
                width='100%'
                sx={{
                    maxHeight: '200px',
                    overflowY: 'scroll',
                }}
            >
                {
                    toDoBuckets[todoTabs[tabValue]].length > 0 ? (
                        toDoBuckets[todoTabs[tabValue]].map(toDo => (
                            <ToDo
                                key={toDo.id}
                                toDo={toDo}
                                check={() => check(String(toDo.id))}
                                uncheck={() => uncheck(String(toDo.id))}
                            />
                        ))
                    ) : (
                        <Typography>
                            No To-Dos
                        </Typography>
                    )
                }
            </Stack>
        </Stack>
    )
}

export default ToDoList