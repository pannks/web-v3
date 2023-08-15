import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAyUwdPfBm4MmnzwCfn5tr_dgILmZlc8SY",
    authDomain: "pann-kaansadich.firebaseapp.com",
    databaseURL:
        "https://pann-kaansadich-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "pann-kaansadich",
    storageBucket: "pann-kaansadich.appspot.com",
    messagingSenderId: "649746446428",
    appId: "1:649746446428:web:7b31e88d67d1a560ae8e99",
    measurementId: "G-6J79QYQ96D",
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
    console.log("done");
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
    const userDocRef = doc(db, "users", username);
    try {
        const user = await getDoc(userDocRef);
        if (!user.exists()) {
            throw Error("login Failed: Not found user");
        }
        if (user.data().password === password) {
            return {
                status: "success",
                loading: false,
                user: {
                    username: user.data().username,
                    role: user.data().role,
                },
            };
        } else {
            throw Error("Wrong username or password");
        }
    } catch (error) {
        return { status: "failed", loading: false, error };
    }
};

export const updateUserById = async (id: string, data: Record<string, any>) => {
    const userDocRef = doc(db, "users", id);
    // console.log(data);

    try {
        const response = await updateDoc(userDocRef, {
            ...data,
        });
        return response;
    } catch (err) {
        console.log("error", err);
    }
};
export const updateFileById = async (id: string, data: Record<string, any>) => {
    const fileDocRef = doc(db, "files", id);

    try {
        const response = await updateDoc(fileDocRef, {
            ...data,
        });
        return response;
    } catch (err) {
        console.log("error", err);
    }
};

export function generateRandomString(length: number) {
    const characters =
        "ABCDEFGHIJKLMNOPqRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";

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
    const fileDocRef = doc(db, "files", id);

    const fileSnapshot = await getDoc(fileDocRef);

    if (fileSnapshot.exists()) {
        return { status: "failed", error: "already existed" };
    } else {
        const createAt = new Date();
        try {
            await setDoc(fileDocRef, { ...data, createAt, id });
        } catch (err) {
            return { status: "failed", error: err };
        }
        return { status: "success" };
    }
};

export const deleteFileById = async (id: string) => {
    const fileDocRef = doc(db, "files", id);
    const fileSnapshot = await getDoc(fileDocRef);

    if (fileSnapshot.exists()) {
        await deleteDoc(fileDocRef);
        return { status: "success" };
    } else {
        return { status: "failed", error: "not found file id" };
    }
};

export const getOrdersByUserId = async (id: string) => {
    const ordersCollectionRef = collection(db, "orders");
    const querySnapshot = await getDocs(
        query(ordersCollectionRef, where("user_id", "==", id))
    );

    // Process the query snapshot and return the orders
    const orders = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));

    return orders;
};
