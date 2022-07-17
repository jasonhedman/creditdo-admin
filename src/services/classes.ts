import { db } from "../firebase/clientApp";
import {
    addDoc,
    collection,
    doc,
    setDoc
} from "firebase/firestore";

import lessons from "../data/lessons";


interface ClassInput {
    name: string;
    time: string;
    teacherId: string;
}

export const createClass = async (classInput: ClassInput) => {
    const classDoc = await addDoc(collection(db, 'classes'), classInput);
    await createLessons(classDoc.id);
}

// const createTasks = async (classId: string) => {
//     await Promise.all(tasks.map((task, index) => {
//         return setDoc(doc(db, "classes", classId, "tasks", `${index}`), { ...task, id: index });
//     }))
// }

const createLessons = async (classId: string) => {
    await Promise.all(lessons.map(lesson => {
        return setDoc(doc(db, "classes", classId, "lessons", lesson.id), lesson);
    }))
}