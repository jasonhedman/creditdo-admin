import { Status } from "../components/dashboard/LessonProgress/types";

import { Lesson } from "../hooks/types";

export const getLessonStatus = (lesson: Lesson) : Status => {
    return lesson.completed
        ? 'completed' 
        : 'notStarted';
}