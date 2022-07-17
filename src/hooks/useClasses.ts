import { singletonHook } from "react-singleton-hook";

import { useEffect } from "react";

import useAuth from "./useAuth";

import { db } from "../firebase/clientApp";
import { collection, where, query, CollectionReference } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";

const init = {
    loading: true,
    classes: [],
}

interface Time {
    seconds: number;
    nanoseconds: number;
}

export interface Class {
    name: string;
    teacherId: string;
    time: Time;
    id: string;
}

const useClasses = () => {

    const { auth } = useAuth();

    const [classes, loading, error] = useCollection<Class>(auth && query(collection(db, 'classes') as CollectionReference<Class>, where('teacherId', '==', auth.uid)));

    return {
        loading,
        classes: classes ? classes.docs.map(doc => ({...doc.data(), id: doc.id})) : [],
    }

}

export default singletonHook(init, useClasses);