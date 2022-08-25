import { db } from "../firebase/clientApp";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection, CollectionReference, doc, updateDoc, orderBy, query } from "firebase/firestore";

import moment from "moment";

import { ToDo, todoTabs } from "./types";

type ToDoBuckets = {
  [key in typeof todoTabs[number]]: ToDo[];
}


const useEventToDos = (classId : string) => {

    const [toDos, loading, error] = useCollectionData<ToDo>(query(collection(db, "classes", classId, "toDos") as CollectionReference<ToDo>, orderBy('id', 'asc')));

    const check = async (toDoId : string) => {
        return updateDoc(doc(db, "classes", classId, "toDos", toDoId), {completed: true});
    }

    const uncheck = async (toDoId : string) => {
        return updateDoc(doc(db, "classes", classId, "toDos", toDoId), {completed: false});
    }

    const getToDoBuckets = () : ToDoBuckets => {
        const emptyBuckets : ToDoBuckets = {
            'Before Event': [],
            'After Event': [],
            'Completed': []
        }
        if(toDos) {
            return toDos.reduce((acc, toDo) => {
                if (toDo.completed) {
                    acc['Completed'].push(toDo);
                } else {
                    if(toDo.beforeEvent){
                        acc['Before Event'].push(toDo);
                    } else {
                        acc['After Event'].push(toDo);
                    }
                }
                return acc;
            },
            emptyBuckets)
        }
        return emptyBuckets;
    };

    return {
        toDoBuckets: getToDoBuckets(),
        loading,
        check,
        uncheck
    }
}

export default useEventToDos;