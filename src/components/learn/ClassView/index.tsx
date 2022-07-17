import { useState, FC } from 'react'

import Stack from '@mui/material/Stack'

import ClassHeader from './ClassHeader'

import { Class } from '../../../hooks/useClasses'
import useLessons from '../../../hooks/useLessons';
import WeekView from '../WeekView';

const chunk = require('lodash.chunk');

interface Props {
    classData: Class;
}

const ClassView : FC<Props> = ({ classData }) => {

    const [isOpen, setIsOpen] = useState<boolean>(true);

    const { lessons, loading, complete, revert } = useLessons(classData.id);

    return (
        <Stack
            spacing={1}
        >
            <ClassHeader
                classData={classData}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
            {
                isOpen && (
                    chunk(lessons, 3).map((weekLessons, index) => (
                        <WeekView 
                            key={index}
                            weekNumber={index + 1}
                            lessons={weekLessons}
                            complete={complete}
                            revert={revert}
                        />
                    ))
                )
            }
        </Stack>
    )
}

export default ClassView