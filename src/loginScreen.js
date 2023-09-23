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
import { GoogleAuthProvider, signInWithPopup,signInWithRedirect } from "firebase/auth";
import GoogleSignin from "./img/btn_google_signin_dark_pressed_web.png";

const LoginScreen =  () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    try{
      signInWithRedirect(auth, provider);
  }
  catch(error){
    console.log("runtime error")
  }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#000C66]">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mx-4">
        <h2 className="text-3xl items-center font-semibold mb-4">Welcome to Therapy Chat</h2>
        {/* <p className="text-gray-600 mb-6">Sign in with Google to chat.</p> */}
        
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring focus:ring-blue-200 w-full"
          onClick={googleSignIn}
        >
              {/* <img
                src={GoogleSignin}
                alt="sign in with google"
                className="w-6 h-6 mr-2"
              /> */}
          Sign In with Google
        </button>
      </div>
    </div>
    
  );
};

export default LoginScreen;

