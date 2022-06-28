import React from 'react'

import Stack from '@mui/material/Stack';
import WeekHeader from './WeekHeader';
import LessonView from '../LessonView.tsx';

import { Lesson } from '../types';

interface Props {
    weekNumber : number;
    lessons : Array<Lesson>;
}

const WeekView : React.FC<Props> = ({ weekNumber, lessons }) => {
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
                />
            ))
        }
    </Stack>
  )
}

export default WeekView