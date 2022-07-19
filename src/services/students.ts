import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/clientApp'


interface StudentInput {
    firstName: string;
    lastName: string;
}

export const createStudent = async (classId: string, studentInput: StudentInput) => {
    const studentDoc = await addDoc(collection(db, 'classes', classId, 'students'), studentInput);
    await updateDoc(doc(db, 'classes', classId, 'students', studentDoc.id), { id: studentDoc.id });
}