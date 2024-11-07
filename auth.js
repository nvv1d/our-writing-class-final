import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "./firebase";

const auth = getAuth(app);

async function signUp(email, password) {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    // Additional logic after successful sign-up
  } catch (error) {
    console.error("Error signing up:", error);
    // Handle sign-up error
  }
}

async function signIn(email, password) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    // Additional logic after successful sign-in
  } catch (error) {
    console.error("Error signing in:", error);
    // Handle sign-in error
  }
}

async function signOut() {
  try {
    await signOut(auth);
    // Additional logic after successful sign-out
  } catch (error) {
    console.error("Error signing out:", error);
    // Handle sign-out error
  }
}

export { signUp, signIn, signOut };
