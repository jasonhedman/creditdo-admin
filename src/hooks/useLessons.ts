import { db } from "../firebase/clientApp";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection, CollectionReference, doc, updateDoc } from "firebase/firestore";

import { Lesson } from "./types";

const useLessons = (classId : string) => {

    const [lessons, loading, error] = useCollectionData<Lesson>(collection(db, "classes", classId, "lessons") as CollectionReference<Lesson>);
    
    const complete = async (lessonId : string) => {
        return updateDoc(doc(db, "classes", classId, "lessons", lessonId), {completed: true});
    }

    const revert = async (lessonId : string) => {
        return updateDoc(doc(db, "classes", classId, "lessons", lessonId), {completed: false});
    }

    return {
        lessons: lessons || [],
        loading,
        complete,
        revert
    }
}

export default useLessons;