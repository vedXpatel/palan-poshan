import {
    initializeApp
} from "firebase/app";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDIUR4vY6BbYoA5VzMzz8llT3WCct9x5SE",
    authDomain: "fmch-ef7f9.firebaseapp.com",
    projectId: "fmch-ef7f9",
    storageBucket: "fmch-ef7f9.appspot.com",
    messagingSenderId: "1004038651731",
    appId: "1:1004038651731:web:ebe45887e0f634f5f06ba6"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const name = result.user.displayName;
            const email = result.user.email;
            const profilePic = result.user.photoURL;

            localStorage.setItem("name", name);
            localStorage.setItem("email", email);
            localStorage.setItem("profilePic", profilePic);
        })
        .catch((error) => {
            console.log(error);
        });
};