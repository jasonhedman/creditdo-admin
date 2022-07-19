import React from 'react'

import Stack from '@mui/material/Stack';
import WeekHeader from './WeekHeader';
import LessonView from '../LessonView.tsx';

import { Lesson } from '../../../hooks/types';

interface Props {
    weekNumber : number;
    lessons : Lesson[];
    complete : (lessonId : string) => Promise<void>;
    revert : (lessonId : string) => Promise<void>;
}

const WeekView : React.FC<Props> = ({ weekNumber, lessons, complete, revert }) => {
  return (
    <Stack 
        spacing={2}
    >
        <WeekHeader weekNumber={weekNumber} />
        {
            lessons.map((lesson, index) => (
                <LessonView
                    key={index}
                    lesson={lesson}
                    complete={() => complete(lesson.id)}
                    revert={() => revert(lesson.id)}
                />
            ))
        }
    </Stack>
  )
}

export default WeekView