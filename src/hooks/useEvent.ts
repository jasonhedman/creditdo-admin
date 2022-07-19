import { db } from "../firebase/clientApp"
import { useDocumentData } from "react-firebase-hooks/firestore"
import { doc, DocumentReference, updateDoc } from "firebase/firestore"

import { Event } from "./types"

const useEvent = (classId: string, eventId: string) => {

    const [ event, loading, error] = useDocumentData<Event>(doc(db, 'classes', classId, 'events', eventId) as DocumentReference<Event>);

    const updateImpact = (poundsCollected: number) => {
        updateDoc(doc(db, 'classes', classId, 'events', eventId), { poundsCollected })
    }

    return {
        event,
        loading,
        updateImpact
    }
}

export default useEvent;