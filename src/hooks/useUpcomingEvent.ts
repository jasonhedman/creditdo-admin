
import { db } from "../firebase/clientApp";
import { useCollectionDataOnce } from "react-firebase-hooks/firestore";
import { collection, CollectionReference, query, orderBy, limit, where } from "firebase/firestore";

import { Event } from "./types";

const now = new Date()

const useUpcomingEvent = (classId : string) => {

    const [events, loading, error] = useCollectionDataOnce<Event>(query(
        collection(db, "classes", classId, "events") as CollectionReference<Event>, 
        where('date', '>', now),
        orderBy('date', 'asc'),
        limit(1),
    ));

    return {
        event: events ? events[0] : null,
        loading,
    }
}

export default useUpcomingEvent;