
import { db } from "../firebase/clientApp";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection, CollectionReference, query } from "firebase/firestore";


export interface Student {
    id: string;
	firstName: string;
    lastName: string;
}


const useStudents = (classId : string) => {
    
    const [students, loading, error] = useCollectionData<Student>(query(
        collection(db, "classes", classId, "students") as CollectionReference<Student>, 
    ));

    return {
        students : students || [],
        loading,
    }
}

export default useStudents;