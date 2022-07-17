import moment from "moment";

import { Status } from "../components/dashboard/LessonProgress/types";

import { Lesson } from "../hooks/useLessons";

export const getLessonStatus = (lesson: Lesson) : Status => {
    return lesson.completed
        ? 'completed' 
        : moment().isAfter(lesson.dueDate.seconds * 1000) 
            ? 'pastDue'
            : 'notStarted';
}