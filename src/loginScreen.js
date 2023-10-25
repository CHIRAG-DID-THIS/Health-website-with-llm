// import React from "react";
// import GoogleSignin from "./img/btn_google_signin_dark_pressed_web.png";
// import { auth } from "./firebaseConfig";
// import { GoogleAuthProvider, signInWithRedirect, signInWithPopup } from "firebase/auth";

// const LoginScreen = () => {
//     const googleSignIn = () => {
//         const provider = new GoogleAuthProvider();
//         signInWithPopup(auth, provider);
//   };

//   return (
//     <main className="welcome">
//       <h2>Welcome to Therapy Chat</h2>
//       {/* <img src="/logo512.png" alt="ReactJs logo" width={50} height={50} /> */}
//       <p>Sign in with Google to chat.</p>
//       <button className="sign-in">
//         <img
//           onClick={googleSignIn}
//           src={GoogleSignin}
//           alt="sign in with google"
//           type="button"
//         />
//       </button>
//     </main>
//   );
// };

// export default LoginScreen;
import React from "react";
import { auth } from "./firebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import GoogleSignin from "./img/glogo.webp";

const LoginScreen = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {})
      .catch((error) => {
        if (error.code === "auth/popup-closed-by-user") {
          console.log("User closed the popup before signing in.");
        } else {
          console.error(error);
        }
      });
  };
  

  return (
<div class="min-h-screen flex items-center justify-center bg-[url('assets/images/stock.png')] bg-cover bg-center w-full h-full">
     {/* <div className="min-h-screen flex items-center justify-center bg-[#000C66]"> */}
      <div className="bg p-8 rounded-lg shadow-lg max-w-md w-full mx-4 opacity-60 bg-white">
        <h2 className="text-3xl text-center font-semibold mb-4">
          Welcome to Odin.ai
        </h2>

        <button
          onClick={googleSignIn}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring focus:ring-blue-200 w-full flex items-center"
        >
          <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full mr-2">
            <img
              src={GoogleSignin}
              alt="sign in with google"
              className="w-6 h-6"
            />
          </div>
          <span className="text-center w-full">Sign In with Google</span>
        </button>
      </div>
    </div>
  );
};

export default LoginScreen;
