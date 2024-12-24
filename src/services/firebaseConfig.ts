// src/services/firebaseConfig.ts
import { initializeApp, getApp, FirebaseApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDek4CccTrbVsRrsPNVaIQwdj56-1x_YHI",
    authDomain: "recipe-app-4fdae.firebaseapp.com",
    databaseURL: "https://recipe-app-4fdae-default-rtdb.firebaseio.com/",
    projectId: "recipe-app-4fdae",
    storageBucket: "recipe-app-4fdae.firebasestorage.app",
    messagingSenderId: "439562272174",
    appId: "1:439562272174:web:64ba7b6080d9f911e39c3f",
};

// Initialize Firebase app if not already initialized
let app: FirebaseApp;

try {
  app = getApp();  // Try to get the default app instance
} catch (error) {
  app = initializeApp(firebaseConfig);  // If not available, initialize it
}

const db = getDatabase(app);

export { db };
