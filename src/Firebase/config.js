

import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB_RV1WzPJc5dv3NIMLR8z7Ed3Al_boFzI",
    authDomain: "burguergrill-6462f.firebaseapp.com",
    projectId: "burguergrill-6462f",
    storageBucket: "burguergrill-6462f.appspot.com",
    messagingSenderId: "469596421972",
    appId: "1:469596421972:web:929d790f72d3035a1752c1"
  };
  
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app)