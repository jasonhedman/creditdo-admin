
import { db } from "../firebase/clientApp";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";

const useEvents = (classId : string) => {
    const [events, loading, error] = useCollection(collection(db, "classes", classId, "events"));

    return {
        events: events && events.docs.map(doc => doc.data()),
        loading,
    }
}

export default useEvents;