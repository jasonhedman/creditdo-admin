import { singletonHook } from "react-singleton-hook";

import { useState } from "react";

import useAuth from "./useAuth";

import { db } from "../firebase/clientApp";
import { collection, where, query, CollectionReference } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";

interface ReturnType {
    classes: Class[];
    loading: boolean;
    classView: string;
    setClassView: (classViewValue: string) => void;
    classOptions: ClassOption[];
}

const init : ReturnType = {
    loading: true,
    classes: [],
    classView: "All Classes",
    setClassView: (classViewValue: string) => {},
    classOptions: [{ label: "All Classes", value: "All Classes" }]
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

interface ClassOption {
    label: string;
    value: string | null;
}

const useClasses = () => {

    const { auth } = useAuth();

    const classOptions = [...init.classOptions];

    const [classViewVal, setClassViewVal] = useState<string>(classOptions[0].value);

    const setClassView = (classViewValue: string) => {
        setClassViewVal(classViewValue);
    }

    const [classes, loading, error] = useCollection<Class>(auth && query(collection(db, 'classes') as CollectionReference<Class>, where('teacherId', '==', auth.uid)));

    return {
        classView: classViewVal,
        setClassView,
        loading,
        classes: classes ? classes.docs.map(doc => ({...doc.data(), id: doc.id})).filter(classData => classViewVal === "All Classes" || classData.id === classViewVal ) : [],
        classOptions: classOptions.concat(classes ? classes.docs.map(doc => ({label: doc.data().name, value: doc.id})) : []),
    }

}

export default singletonHook(init, useClasses);