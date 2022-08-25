import { db } from "../firebase/clientApp";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";

export interface EventInput {
    title: string;
    startDate: Date;
    endDate: Date;
    address: string;
    isVirtual: boolean;
}

interface EventData extends EventInput {
	participants: string[];
	complete: boolean;
	poundsCollected: number;
}


export const createEvent = async (classId: string, eventInput: EventInput) => {
    const eventData : EventData = {
        ...eventInput,
        participants: [],
        complete: false,
        poundsCollected: 0
    }
    const eventDoc = await addDoc(collection(db, 'classes', classId, 'events'), eventData);
    await updateDoc(doc(db, 'classes', classId, 'events', eventDoc.id), {
        id: eventDoc.id
    });
}