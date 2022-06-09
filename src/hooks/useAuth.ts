import { singletonHook } from 'react-singleton-hook';

import { auth, db } from '../firebase/clientApp';

import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut as authSignOut,
    User
} from 'firebase/auth';

import { 
    useAuthState,
} from 'react-firebase-hooks/auth';

import {
    useDocumentData
} from 'react-firebase-hooks/firestore';

import { doc, DocumentReference, setDoc } from 'firebase/firestore'

import { UserData } from './types';

interface ReturnType {
    auth: User | null;
    user: UserData | null;
    loading: boolean,
    signUp: (email: string, password: string, userData: UserData) => Promise<void>;
    signIn: (email: string, password: string) => Promise<void>;
    signOut: () => Promise<void>;
}

const init : ReturnType = {
    auth: null,
    user: null,
    loading: true,
    signUp: async (email: string, password: string, userData: UserData) => {},
    signIn: async (email: string, password: string) => {},
    signOut: async () => {},
}

const useAuth = () : ReturnType => {

    const [authObj, authLoading] = useAuthState(auth);
    const [userData, userLoading] = useDocumentData<UserData>(authObj && doc(db, 'users', authObj.uid) as DocumentReference<UserData>);
    
    const signUp = async (email: string, password: string, userData: UserData) => {
        const cred = await createUserWithEmailAndPassword(auth, email, password);
        if(cred) {
            await setDoc(doc(db, 'users', cred.user.uid), userData);
        }
    }

    const signIn = async (email: string, password: string) => {
        await signInWithEmailAndPassword(auth, email, password);
    }

    const signOut = async () => {
        await authSignOut(auth);
    }

    return {
        auth: authObj,
        user: userData,
        loading: authLoading || userLoading,
        signUp,
        signIn,
        signOut,
    }
}

export default singletonHook(init, useAuth);