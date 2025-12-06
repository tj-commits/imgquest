
  // IMPORTANT: Replace the placeholder values below with your actual Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyA0od4tjCBHxltVHE3Uw-Ht5Frd2kDSOWc",
  authDomain: "winged-amp-476818-s8.firebaseapp.com",
  projectId: "winged-amp-476818-s8",
  storageBucket: "winged-amp-476818-s8.firebasestorage.app",
  messagingSenderId: "819476698359",
  appId: "1:819476698359:web:5a96fd58e4e1482b40aff2",
  measurementId: "G-B7FN0MX2JD"
};

  const SIGN_IN_PAGE_PATH = '/signin';
  
  // 1. Initialize Firebase App (uses 'compat' for global access)
  const app = firebase.initializeApp(firebaseConfig);
  const auth = app.auth();
  const db = app.firestore();
  
  // Throttle variable to limit how often we write to Firestore
  let syncTimeoutId = null;

  /**
   * Helper to write the current state of window.localStorage to Firestore.
   * This is debounced to avoid excessive writes on rapid changes.
   */
  const syncLocalStorageToFirestore = () => {
    // Clear any previous timeout to ensure we only run once after a pause
    if (syncTimeoutId) {
      clearTimeout(syncTimeoutId);
    }

    // Set a new timeout (e.g., 500ms debounce)
    syncTimeoutId = setTimeout(async () => {
      const user = auth.currentUser;

      if (!user) {
        console.warn("No user signed in. Redirecting for authentication.");
        window.location.assign(SIGN_IN_PAGE_PATH);
        return;
      }

      // Collect and serialize localStorage data
      const localStorageData = {};
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        let value = localStorage.getItem(key);
        try {
          localStorageData[key] = JSON.parse(value);
        } catch (e) {
          localStorageData[key] = value;
        }
      }

      console.log(`Authenticated user: ${user.uid}. Saving CloudStorage data...`);

      // Save to Firestore
      try {
        const docRef = db.collection("users").doc(user.uid).collection("settings").doc("localStorage");
        await docRef.set(localStorageData);
        console.log("✅ CloudStorage successfully synced to Firestore.");
      } catch (error) {
        console.error("❌ Error saving CloudStorage to Firestore:", error);
      }
    }, 500); // Wait 500ms after the last change before syncing
  };
  
  
  /**
   * The custom storage object that wraps localStorage and adds sync functionality.
   */
  window.CloudStorage = {
    // Getters
    length: localStorage.length,

    key: (n) => localStorage.key(n),
    
    getItem: (key) => localStorage.getItem(key),

    // Setters - These trigger the sync
    setItem: (key, value) => {
      localStorage.setItem(key, value);
      window.CloudStorage.length = localStorage.length; // Update length property
      syncLocalStorageToFirestore();
    },

    removeItem: (key) => {
      localStorage.removeItem(key);
      window.CloudStorage.length = localStorage.length; // Update length property
      syncLocalStorageToFirestore();
    },

    clear: () => {
      localStorage.clear();
      window.CloudStorage.length = 0; // Update length property
      syncLocalStorageToFirestore();
    }
  };


  /**
   * Loads the Firestore data back into local storage on startup.
   */
  const loadCloudStorageFromFirestore = () => {
    // onAuthStateChanged is the best way to ensure the user object is ready
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        console.log(`Loading data for user: ${user.uid}`);
        try {
          const docRef = db.collection("users").doc(user.uid).collection("settings").doc("localStorage");
          const docSnapshot = await docRef.get();

          if (docSnapshot.exists) {
            const data = docSnapshot.data();
            
            // NOTE: We clear the local storage here to ensure the cloud state is the source of truth
            localStorage.clear(); 
            
            Object.keys(data).forEach(key => {
              // Convert objects/arrays back to JSON strings for localStorage
              const value = typeof data[key] === 'object' && data[key] !== null
                ? JSON.stringify(data[key])
                : String(data[key]);
                
              localStorage.setItem(key, value);
            });
            window.CloudStorage.length = localStorage.length; // Ensure length is updated
            console.log("✅ CloudStorage loaded from Firestore.");
          } else {
            console.log("No remote CloudStorage data found. Starting fresh.");
          }
        } catch (error) {
          console.error("❌ Error loading CloudStorage from Firestore:", error);
        }
      } else {
        window.location.assign(SIGN_IN_PAGE_PATH);
      }
    });
  };

  // 2. Start the loading process when the script runs
  loadCloudStorageFromFirestore();
  