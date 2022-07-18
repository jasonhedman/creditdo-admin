
import { db } from "../firebase/clientApp";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, CollectionReference, query, orderBy, limit, where } from "firebase/firestore";

interface Time {
    seconds: number;
    nanoseconds: number;
}

export interface Event {
    id: string;
	title: string;
	date: Time;
	address: string;
	participants: string[]; // array of ids
	complete: boolean;
	poundsCollected: number;
}

const now = new Date();

const useEvents = (classId : string) => {
    
    const [events, loading, error] = useCollection<Event>(query(
        collection(db, "classes", classId, "events") as CollectionReference<Event>, 
        where('date', '>', now),
        orderBy('date', 'asc'), 
    ));

    return {
        events: events ? events.docs.map(doc => doc.data()) : [],
        loading,
    }
}

export default useEvents;