import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    getFirestore,
    query,
    setDoc,
    updateDoc,
    where,
    writeBatch,
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyAyUwdPfBm4MmnzwCfn5tr_dgILmZlc8SY',
    authDomain: 'pann-kaansadich.firebaseapp.com',
    databaseURL:
        'https://pann-kaansadich-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'pann-kaansadich',
    storageBucket: 'pann-kaansadich.appspot.com',
    messagingSenderId: '649746446428',
    appId: '1:649746446428:web:7b31e88d67d1a560ae8e99',
    measurementId: 'G-6J79QYQ96D',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore();

export const addCollectionAndDocuments = async (
    collectionKey: string,
    objectsToAdd: any[]
) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.id.toLowerCase());
        batch.set(docRef, object);
    });

    await batch.commit();
    console.log('done');
};

export const getAllDocuments = async (collectionKey: string) => {
    const collectionRef = collection(db, collectionKey);
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((ds) => ds.data());
};

// export const createUserDocumentFromAuth = async (
//     userAuth,
//     additionalInformation = {}
// ) => {
//     const userDocRef = doc(db, "users", userAuth.id);

//     // console.log(userDocRef);

//     const userSnapshot = await getDoc(userDocRef);
//     // console.log(userSnapshot.exists());

//     if (!userSnapshot.exists()) {
//         const { id, name, img, email, status_msg, is_friend } = userAuth;
//         const createAt = new Date();

//         try {
//             await setDoc(userDocRef, {
//                 id,
//                 name,
//                 img,
//                 email,
//                 status_msg,
//                 is_friend,
//                 createAt,
//                 ...additionalInformation,
//             });
//         } catch (err) {
//             console.log("error", err.message);
//         }
//     }

//     return userSnapshot;
// };
export const loginApi = async (username: string, password: string) => {
    const userDocRef = doc(db, 'users', username);
    try {
        const user = await getDoc(userDocRef);
        if (!user.exists()) {
            throw Error('login Failed: Not found user');
        }
        if (user.data().password === password) {
            return {
                status: 'success',
                loading: false,
                user: {
                    username: user.data().username,
                    role: user.data().role,
                },
            };
        } else {
            throw Error('Wrong username or password');
        }
    } catch (error) {
        return { status: 'failed', loading: false, error };
    }
};

export const createUser = async (
    username: string,
    data: Record<string, any>
) => {
    const userDocRef = doc(db, 'users', username);

    const userSnapshot = await getDoc(userDocRef);

    if (userSnapshot.exists()) {
        return {
            status: 'failed',
            error: 'already existed',
            user: userSnapshot.data(),
        };
    } else {
        const createAt = new Date();
        try {
            await setDoc(userDocRef, { ...data, createAt });
        } catch (err) {
            return { status: 'failed', error: err };
        }
        return { status: 'success', user: userSnapshot.data() };
    }
};

export const updateUserById = async (id: string, data: Record<string, any>) => {
    const userDocRef = doc(db, 'users', id);
    // console.log(data);

    try {
        const response = await updateDoc(userDocRef, {
            ...data,
        });
        return response;
    } catch (err) {
        console.log('error', err);
    }
};
export const updateFileById = async (id: string, data: Record<string, any>) => {
    const fileDocRef = doc(db, 'files', id);

    try {
        const response = await updateDoc(fileDocRef, {
            ...data,
        });
        return response;
    } catch (err) {
        console.log('error', err);
    }
};
export const updateTaskById = async (id: string, data: Record<string, any>) => {
    const taskDocRef = doc(db, 'tasks', id);

    try {
        const response = await updateDoc(taskDocRef, {
            ...data,
        });
        return response;
    } catch (err) {
        console.log('error', err);
    }
};

export function generateRandomString(length: number) {
    const characters =
        'ABCDEFGHIJKLMNOPqRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }

    return result;
}

export const createNewFile = async (data: Record<string, any>) => {
    if (!data) return;

    const gen = generateRandomString(4);
    const id = `${data.subj}_${gen}`;
    const fileDocRef = doc(db, 'files', id);

    const fileSnapshot = await getDoc(fileDocRef);

    if (fileSnapshot.exists()) {
        return { status: 'failed', error: 'already existed' };
    } else {
        const createAt = new Date();
        try {
            await setDoc(fileDocRef, { ...data, createAt, id });
        } catch (err) {
            return { status: 'failed', error: err };
        }
        return { status: 'success' };
    }
};

export const createNewTask = async (data: Record<string, any>) => {
    if (!data) return;

    const gen = generateRandomString(4);
    const id = `${data.subj}_${gen}`;
    const taskDocRef = doc(db, 'tasks', id);

    const taskSnapshot = await getDoc(taskDocRef);

    if (taskSnapshot.exists()) {
        return { status: 'failed', error: 'already existed' };
    } else {
        const { name, desc, subj, status, dueStr } = data;
        const createAt = new Date();
        const due = new Date(dueStr);
        try {
            await setDoc(taskDocRef, {
                name,
                desc,
                subj,
                status,
                due,
                createAt,
                id,
            });
        } catch (err) {
            return { status: 'failed', error: err };
        }
        return { status: 'success' };
    }
};

export const deleteFileById = async (id: string) => {
    const fileDocRef = doc(db, 'files', id);
    const fileSnapshot = await getDoc(fileDocRef);

    if (fileSnapshot.exists()) {
        await deleteDoc(fileDocRef);
        return { status: 'success' };
    } else {
        return { status: 'failed', error: 'not found file id' };
    }
};
export const deleteTaskById = async (id: string) => {
    const taskDocRef = doc(db, 'tasks', id);
    const taskSnapshot = await getDoc(taskDocRef);

    if (taskSnapshot.exists()) {
        await deleteDoc(taskDocRef);
        return { status: 'success' };
    } else {
        return { status: 'failed', error: 'not found task id' };
    }
};

export const getOrdersByUserId = async (id: string) => {
    const ordersCollectionRef = collection(db, 'orders');
    const querySnapshot = await getDocs(
        query(ordersCollectionRef, where('user_id', '==', id))
    );

    // Process the query snapshot and return the orders
    const orders = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));

    return orders;
};

/*  1. get doc , if not exist created 
        2. update doc,  if field not exist created
        in update will recieve 
            { url: 'blog-01' , haha: true }
        or may be recieve multiple fields
            { url: 'blog-01' , haha: true , like: true }

        if recieve engagement metric value as true
        need to +1 from exist

        if recieve engagement metric value as false
        need to -1 from exist
        but min should be 0
     */

export const updateBlogStatByUrl = async (
    url: string,
    data: Record<string, any>
): Promise<void> => {
    if (!url) {
        throw new Error('The function must be called with a valid URL.');
    }

    const blogStatDocRef = doc(db, 'blogs_stat', url);

    try {
        const blogStatDoc = await getDoc(blogStatDocRef);
        let stats: Record<string, any> = {};

        if (blogStatDoc.exists()) {
            stats = blogStatDoc.data() as Record<string, any>;
        } else {
            await setDoc(blogStatDocRef, { url });
            stats = { url };
        }

        Object.keys(data).forEach((key) => {
            if (typeof data[key] === 'boolean') {
                const currentValue = stats[key] || 0;
                stats[key] = data[key]
                    ? currentValue + 1
                    : Math.max(currentValue - 1, 0);
            } else {
                stats[key] = data[key];
            }
        });

        await updateDoc(blogStatDocRef, stats);
    } catch (error) {
        console.error('Error updating blog stats:', error);
        throw new Error('An error occurred while updating blog stats.');
    }
};
