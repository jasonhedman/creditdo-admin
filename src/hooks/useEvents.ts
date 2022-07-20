
import { db } from "../firebase/clientApp";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, CollectionReference, query, orderBy, limit, where } from "firebase/firestore";

import { Event } from "./types";

const now = new Date();

const useEvents = (classId : string) => {
    
    const [events, loading, error] = useCollection<Event>(query(
        collection(db, "classes", classId, "events") as CollectionReference<Event>,
        where('endDate', '>', now),
        orderBy('endDate', 'asc'), 
    ));

    return {
        events: events ? events.docs.map(doc => doc.data()) : [],
        loading,
    }
}

export default useEvents;