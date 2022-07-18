import { singletonHook } from "react-singleton-hook";

import { useState } from "react";

import useAuth from "./useAuth";

import { db } from "../firebase/clientApp";
import { collection, where, query, CollectionReference } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";

interface ReturnType {
    classes: Class[];
    loading: boolean;
    classIdView: string | null;
    setClassView: (classId : string) => void;
}

const init : ReturnType = {
    loading: true,
    classes: [],
    classIdView: null,
    setClassView: (classId : string) => {},
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

    const [classIdView, setClassIdView] = useState<string | null>(null);

    const setClassView = (classId: string) => {
        setClassIdView(classId);
    }

    const [classes, loading, error] = useCollection<Class>(auth && query(collection(db, 'classes') as CollectionReference<Class>, where('teacherId', '==', auth.uid)));

    return {
        classIdView,
        setClassView,
        loading,
        classes: classes ? classes.docs.map(doc => ({...doc.data(), id: doc.id})) : [],
    }

}

export default singletonHook(init, useClasses);