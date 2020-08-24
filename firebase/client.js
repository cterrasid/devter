import * as firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyBSFmQl0kHxN2x3N1zU7lC-QAwg4P01EjI",
  authDomain: "devter-40015.firebaseapp.com",
  databaseURL: "https://devter-40015.firebaseio.com",
  projectId: "devter-40015",
  storageBucket: "devter-40015.appspot.com",
  messagingSenderId: "599752805839",
  appId: "1:599752805839:web:c5cd04735f43705af756ba",
  measurementId: "G-DT2R2HYYS7",
}

!firebase.apps.length && firebase.initializeApp(firebaseConfig)

// Init Firestore
const dbService = firebase.firestore()
//

const mapUserFromFirebaseAuth = (user) => {
  const { displayName, email, photoURL, uid } = user

  return {
    avatar: photoURL,
    username: displayName,
    email,
    uid,
  }
}

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = user ? mapUserFromFirebaseAuth(user) : null
    onChange(normalizedUser)
  })
}

export const loginWithGitHub = () => {
  const gitHubProvider = new firebase.auth.GithubAuthProvider()
  return firebase.auth().signInWithPopup(gitHubProvider)
}

export const addDevit = ({ avatar, content, userId, userName }) => {
  return dbService.collection("devits").add({
    avatar,
    content,
    userId,
    userName,
    createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
    likesCount: 0,
    sharedCount: 0,
  }) // Add a new collection to database service
}
