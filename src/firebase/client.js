// v9 compat packages are API compatible with v8 code
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGpHEx8ovE3byuk5kjt8MnMmXt-pmvGDs",
  authDomain: "chukwudi-61e0f.firebaseapp.com",
  projectId: "chukwudi-61e0f",
  storageBucket: "chukwudi-61e0f.appspot.com",
  messagingSenderId: "92231633201",
  appId: "1:92231633201:web:13cdfdd01af7e63af44810",
  measurementId: "G-FQ5NH7SX1H",
}

!firebase.apps.length && firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
const storage = firebase.storage()
const storageRef = storage.ref()

const mapUserFromFirebaseAuthToUser = (user) => {
  const { displayName, email, photoURL, uid } = user
  return {
    avatar: photoURL,
    userName: displayName,
    email,
    uid,
  }
}
export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = user ? mapUserFromFirebaseAuthToUser(user) : null
    onChange(normalizedUser)
  })
}
export const loginWithGitHub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider()
  return firebase.auth().signInWithPopup(githubProvider)
}
export const loginWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider()
  return firebase.auth().signInWithPopup(googleProvider)
}

export const addReview = ({ avatar, content, userId, userName, type }) => {
  return db.collection("products").add({
    avatar,
    content,
    userId,
    userName,
    createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
    type,
  })
}

export const fetchLatestReviews = () => {
  return db
    .collection("products")
    .get()
    .then(({ docs }) => {
      return docs.map((doc) => {
        const data = doc.data()
        const id = doc.id
        const { createdAt } = data

        return {
          ...data,
          id,
          createdAt: +createdAt.toDate(),
        }
      })
    })
}

export const getCategories = () => {
  return storageRef
    .child("categories.json")
    .getDownloadURL()
    .then(async function (url) {
      const data = await fetch(url)
      const categories = data.json()
      return categories
    })
    .catch((e) => console.log(e))
}
export const getProducts = () => {
  return storageRef
    .child("products.json")
    .getDownloadURL()
    .then(async function (url) {
      const data = await fetch(url)
      const categories = data.json()
      return categories
    })
    .catch((e) => console.log(e))
}
