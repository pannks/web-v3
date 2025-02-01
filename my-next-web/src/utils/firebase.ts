import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    collection,
    deleteDoc,
    doc,
    DocumentData,
    getDoc,
    getDocs,
    getFirestore,
    query,
    QuerySnapshot,
    setDoc,
    updateDoc,
    where,
    writeBatch
} from "firebase/firestore";
import {
    AuthErrorCodes,
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    NextOrObserver,
    onAuthStateChanged,
    signInWithPopup
} from "firebase/auth";
import { ProductItem, ProductUrl, UOrder, User } from "./dataType";
import { products } from "../data/productData";
import { isExists } from "date-fns";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: "pann-kaansadich.firebaseapp.com",
    databaseURL:
        "https://pann-kaansadich-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "pann-kaansadich",
    storageBucket: "pann-kaansadich.appspot.com",
    messagingSenderId: "649746446428",
    appId: "1:649746446428:web:7b31e88d67d1a560ae8e99",
    measurementId: "G-6J79QYQ96D"
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
                    role: user.data().role
                }
            };
        } else {
            throw Error("Wrong username or password");
        }
    } catch (error) {
        return { status: "failed", loading: false, error };
    }
};

export const createUserIfNotExists = async (
    username: string,
    data: Record<string, any>
) => {
    const userDocRef = doc(db, "users", username);

    const userSnapshot = await getDoc(userDocRef);

    if (userSnapshot.exists()) {
        return {
            status: "success",
            user: userSnapshot.data()
        };
    } else {
        try {
            const email = data.email || username; // Use username as fallback if email is not provided
            const userDocRefWithEmail = doc(db, "users", email);
            await setDoc(userDocRefWithEmail, {
                ...data,
                createdAt: new Date()
            });
            console.log("Creation success");
            return {
                status: "success",
                user: {
                    ...data,
                    createdAt: new Date(),
                    id: email
                } as unknown as User
            }; // Return the created user
        } catch (err) {
            return { status: "failed", error: err };
        }
    }
};

export const createOrderIfNotExists = async (
    order_id: string,
    data: Record<string, any>
) => {
    const orderDocRef = doc(db, "orders", order_id);
    const orderSnapshot = await getDoc(orderDocRef);
    if (orderSnapshot.exists()) {
        return {
            isExists: true,
            status: "success",
            error: null,
            order: orderSnapshot.data() as unknown as UOrder
        };
    } else {
        try {
            await setDoc(orderDocRef, {
                ...data,
                id: order_id
            });
            return {
                status: "success",
                isExists: false,
                order: {
                    ...data
                } as unknown as UOrder
            };
        } catch (err) {
            return {
                status: "failed",
                error: err,
                isExists: false,
                order: null
            };
        }
    }
};

export const updateUserById = async (id: string, data: Record<string, any>) => {
    const userDocRef = doc(db, "users", id);
    // console.log(data);

    try {
        const response = await updateDoc(userDocRef, {
            ...data
        });
        return response;
    } catch (err) {
        console.log("error", err);
    }
};
export const updateOrderById = async (
    id: string,
    data: Record<string, any>
) => {
    const orderDocRef = doc(db, "orders", id);
    try {
        await updateDoc(orderDocRef, {
            ...data
        });
        return { status: "success", error: null };
    } catch (err) {
        console.log("error", err);
        return { status: "failed", error: err };
    }
};
export const updateFileById = async (id: string, data: Record<string, any>) => {
    const fileDocRef = doc(db, "files", id);

    try {
        const response = await updateDoc(fileDocRef, {
            ...data
        });
        return response;
    } catch (err) {
        console.log("error", err);
    }
};
export const updateTaskById = async (id: string, data: Record<string, any>) => {
    const taskDocRef = doc(db, "tasks", id);

    try {
        const response = await updateDoc(taskDocRef, {
            ...data
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

export const createNewTask = async (data: Record<string, any>) => {
    if (!data) return;

    const gen = generateRandomString(4);
    const id = `${data.subj}_${gen}`;
    const taskDocRef = doc(db, "tasks", id);

    const taskSnapshot = await getDoc(taskDocRef);

    if (taskSnapshot.exists()) {
        return { status: "failed", error: "already existed" };
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
                id
            });
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
export const deleteTaskById = async (id: string) => {
    const taskDocRef = doc(db, "tasks", id);
    const taskSnapshot = await getDoc(taskDocRef);

    if (taskSnapshot.exists()) {
        await deleteDoc(taskDocRef);
        return { status: "success" };
    } else {
        return { status: "failed", error: "not found task id" };
    }
};

export const getOrdersByUserId = async (id: string) => {
    const ordersCollectionRef = collection(db, "orders");
    const querySnapshot = await getDocs(
        query(ordersCollectionRef, where("user_id", "==", id))
    );
    const orders = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    }));

    return orders;
};

export const getOrdersByCustomerEmail = async (id: string) => {
    const ordersCollectionRef = collection(db, "orders");
    const querySnapshot = await getDocs(
        query(ordersCollectionRef, where("customer_email", "==", id))
    );

    // Process the query snapshot and return the orders
    const orders = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    }));

    return orders;
};

export const getProductUrlsByProdId = async (prod_id: string) => {
    const prodUrlsColl = collection(db, "product_urls");
    const qs = await getDocs(
        query(prodUrlsColl, where("prod_id", "==", prod_id))
    );
    const productUrls = qs.docs.map((doc) => ({
        ...doc.data()
    })) as ProductUrl[];

    return productUrls;
};

export const getProducts = async (): Promise<ProductItem[]> => {
    try {
        const productsDocRef = collection(db, "products");
        const q = query(productsDocRef);
        const querySnapshot: QuerySnapshot = await getDocs(q);

        // Map through documents and convert to ProductItem
        const products: ProductItem[] = querySnapshot.docs.map(
            (doc) =>
                ({
                    id: doc.id,
                    title: doc.data().title,
                    desc: doc.data().desc,
                    price: Number(doc.data().price),
                    fullPrice:
                        Number(doc.data().full_price) ??
                        Number(doc.data().price),
                    coverImg: doc.data().cover_img ?? "",
                    thumbImg: doc.data().thumb_img ?? "",
                    isComingSoon: Boolean(doc.data().is_coming_soon) ?? false,
                    isRecommend: Boolean(doc.data().is_recommend) ?? false,
                    lifetimePerUser:
                        Boolean(doc.data().lifetime_per_user) ?? false,
                    prodId: doc.data().prod_id ?? "",
                    priceId: doc.data().price_id ?? ""
                } as ProductItem)
        );

        return products;
    } catch (error) {
        console.error("Error fetching products: ", error);
        throw new Error("Failed to fetch products");
    }
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
        throw new Error("The function must be called with a valid URL.");
    }

    const blogStatDocRef = doc(db, "blogs_stat", url);

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
            if (typeof data[key] === "boolean") {
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
        console.error("Error updating blog stats:", error);
        throw new Error("An error occurred while updating blog stats.");
    }
};

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const createUserWithEmailProvider = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            return user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            return { errorCode, errorMessage };
        });
};

export const unsubscribe = auth.onAuthStateChanged((user) => {
    if (user) {
        // console.log('user sign in');
        const uid = user.uid;
        // ...
    } else {
        console.log("Signed out success");
        // User is signed out
        // ...
    }
});

// export const onAuthStateChangeObserver = (callback: NextOrObserver<User>) =>
//     onAuthStateChanged(auth, callback);

export const signInWithGooglePopup = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
        // console.log('user', user);
        const userInfo = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified,
            isAnonymous: user.isAnonymous
        };
        return await createUserIfNotExists(user?.email!, userInfo);
    } catch (error: any) {
        const errorCode = error?.code;
        const errorMessage = error?.message;
        const email = error?.customData?.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        // console.log('error', errorCode, errorMessage, email, credential);
    }
};

export const signOut = async () => {
    await auth.signOut();
};
