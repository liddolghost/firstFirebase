// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
//import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore, collection, addDoc, connectFirestoreEmulator, query, getDocs, setDoc, doc, deleteDoc, onSnapshot, QuerySnapshot } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPHrk9tRvLa0QUBN9qgStp462XduK2xUQ",
  authDomain: "first-firebase-75634.firebaseapp.com",
  projectId: "first-firebase-75634",
  storageBucket: "first-firebase-75634.appspot.com",
  messagingSenderId: "971745682119",
  appId: "1:971745682119:web:5bfa473907586ecb1b94e2",
  measurementId: "G-HSX9N50J5V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app)

/*
//for google provider sign in
const googleSignInBtn = document.querySelector('.social-icon-google');
const provider = new GoogleAuthProvider();
const auth = getAuth(app);
googleSignInBtn.addEventListener('click', () => {
  signInWithPopup(auth, provider).then((result) => {
    const user = result.user;
    alert(`Hello ${user.displayName}!`);

  }).catch((error) => {
    const errorMessage = error.message;
    alert(`Error: ${errorMessage}`);
  });

});
*/
/*
const signOutBtn = document.querySelector(`.sign-out`);
signOutBtn.addEventListener('click', () => {
  signOut(auth);
})
// for sign out
onAuthStateChanged(auth, (user) => {
  if(user) {
    alert("User has signed in!")
  }else {
    alert("No user currently")
  }
})
*/

//connect to Firestore emulator
const db = getFirestore();
connectFirestoreEmulator(db, 'localhost', 8080); 

const saveBtn = document.querySelector(".save")
saveBtn.addEventListener("click", async () => {
	const characterCollectionRef = collection(db, 'character')
try {
	const newCharacterRef = await addDoc(characterCollectionRef, {
	name: "Lan Xichen",
	clan: "Gusu Lan",
	insignia: "Flowy Clouds"
})
	console.log(`Added new character: ${newCharacterRef.id}`)
} catch (error) {
  console.log(error)
}
})
//done

const getDataBtn = document.querySelector(".get-data")
getDataBtn.addEventListener('click', async () => {
  const q = query(collection(db, "character"))
  const character = await getDocs(q)
  character.forEach((character) => {
    console.log(character.data())
  })
})
//done
const changeDataBtn = document.querySelector(".change-data")
changeDataBtn.addEventListener('click', async () => {
  const q = query(collection(db,"character"))
  const character = await getDocs(q)
  if(character.empty) {
    console.log("No data to change yet!")
    return
  }
  await setDoc(doc(db, 'character', character.docs[0].id), {
    name: "Lan Xichen",
	  clan: "Gusu Lan",
	  insignia: "Flowy Clouds"
  }, { merge: true })
})
//done

const deleteDataBtn = document.querySelector(".delete-data")
deleteDataBtn.addEventListener('click', async () => {
  const q = query(collection(db,"character"))
  const character = await getDocs(q)
  if(character.empty) {
    console.log("No data to change yet!")
    return
  }

  await deleteDoc(doc(db, 'character', character.docs[character.docs.length-1].id))
  console.log("Deleted successfully!")
})

const q = query(collection(db, "character"))

const unsubscribe = onSnapshot(q, (querySnapshot) => {
  console.log(`--------------------------------------------------------------`)
  querySnapshot.forEach((character) => {
    console.log(character.data())
  })
})

// unsubscribe()