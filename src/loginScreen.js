import React from "react";
import GoogleSignin from "./img/btn_google_signin_dark_pressed_web.png";
import { auth } from "./firebaseConfig";
import { GoogleAuthProvider, signInWithRedirect, signInWithPopup } from "firebase/auth";

const LoginScreen = () => {
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
  };

  return (
    <main className="welcome">
      <h2>Welcome to Therapy Chat</h2>
      {/* <img src="/logo512.png" alt="ReactJs logo" width={50} height={50} /> */}
      <p>Sign in with Google to chat.</p>
      <button className="sign-in">
        <img
          onClick={googleSignIn}
          src={GoogleSignin}
          alt="sign in with google"
          type="button"
        />
      </button>
    </main>
  );
};

export default LoginScreen;