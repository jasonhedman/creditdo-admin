import { addDoc, AddPrefixToKeys, collection, doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/clientApp'


interface StudentInput extends AddPrefixToKeys<string, any> {
    firstName: string;
    lastName: string;
    parentEmail: string;
}

export const createStudent = async (classId: string, studentInput: StudentInput) => {
    const studentDoc = await addDoc(collection(db, 'classes', classId, 'students'), studentInput);
    await updateDoc(doc(db, 'classes', classId, 'students', studentDoc.id), { id: studentDoc.id });
}

export const updateStudent = async (classId: string, studentId: string, studentInput: StudentInput) => {
    await updateDoc(doc(db, 'classes', classId, 'students', studentId), studentInput);
}