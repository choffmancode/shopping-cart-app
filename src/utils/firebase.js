import { initializeApp } from 'firebase/app';
import { getDatabase, onValue, ref, set, push } from 'firebase/database';
import { useObject } from 'react-firebase-hooks/database';
import { useDatabaseValue } from "@react-query-firebase/database";
// import {  getAuth, onAuthStateChanged, GoogleAuthProvider, onIdTokenChanged, signInWithPopup, signOut } from 'firebase/auth';
// import { useAuthState } from "react-firebase-hooks/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDCCyo81ov097X-_39yqfalvGFE2M7x98U",
  authDomain: "shopping-cart-app-9f50e.firebaseapp.com",
  databaseURL: "https://shopping-cart-app-9f50e-default-rtdb.firebaseio.com",
  projectId: "shopping-cart-app-9f50e",
  storageBucket: "shopping-cart-app-9f50e.appspot.com",
  messagingSenderId: "346937545281",
  appId: "1:346937545281:web:0fdc66dc8ab610be8fecc0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


export const useData = () => {
    const dbRef = ref(database, '/')
    const { data, isLoading, error } =  useDatabaseValue('/', dbRef);

    // Unfiltered data snapshot from source
    const dataLoad = (!isLoading && !error) && data || {}


      // Handle loading state
      if (isLoading) {
        return [[], [], isLoading, error];
      }

      // Handle error state
      if (error) {
          console.error("Error loading data:", error);
          return [[], [], isLoading, error];
      }

    //Destructure data into two parts
    const inventory = dataLoad?.inventory || {};
    const products = dataLoad?.products || {};

    // Convert to Arrays
    const inventoryArray = Object.entries(inventory).map(([key, value]) => ({ sku: key, ...value }));
    const productsArray = Object.entries(products).map(([key, value]) => ({ sku: key, ...value }));

    console.log("test prod", products)
    console.log("test inventory", inventory)

    return [
        productsArray,
        inventoryArray,
        isLoading,
        error
    ];
  };


//   export const setData = (path, value) => (
//     set(ref(database, path), value)
//   );

//   export const signInWithGoogle = () => {
//     signInWithPopup(getAuth(firebase), new GoogleAuthProvider());
//   };
  
// const firebaseSignOut = () => signOut(getAuth(firebase));

// export { firebaseSignOut as signOut };
// console.log("firebase",firebase)
// const auth = getAuth();
// console.log("auth",auth)

// Shape of database Items
//[SKU: {L: Q, M: Q, S: Q, XL: Q}]

// const useUserState = (auth) => {
//   if (auth){
//     console.log("userauth", auth)
//     return auth
//   } 
// }

// const useUserState = () => useAuthState(auth)



//   // start here. fix callback
//   // we cannot use onAuthStateChanged or onIdTokenChanged
//   // because they return an object we cannot use
// export { useUserState as useUserState };