import { db } from "../firebase/clientApp"
import { useDocumentData } from "react-firebase-hooks/firestore"
import { doc, DocumentReference } from "firebase/firestore"

import { Event } from "./types"

const useEvent = (classId: string, eventId: string) => {

    const [ event, loading, error] = useDocumentData<Event>(doc(db, 'classes', classId, 'events', eventId) as DocumentReference<Event>);

    return {
        event,
        loading
    }
}

export default useEvent;