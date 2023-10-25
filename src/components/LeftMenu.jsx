import React, { useState, useEffect } from "react";
import Chats from "./Chats";
import RoundedBtn from "./Common/RoundedBtn";
import { MdPeopleAlt } from "react-icons/md";
import { TbCircleDashed } from "react-icons/tb";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { HiDotsVertical } from "react-icons/hi";
import { BiFilter } from "react-icons/bi";
import { pp } from "../assets/whatsapp";
import { MdSend } from "react-icons/md";
import { auth } from '../firebaseConfig'; // Import your Firebase configuration


function LeftMenu() {
  const [filter, setFilter] = useState(false);
  const [menuOpen, setMenuOpen] = useState(window.innerWidth >= 768);
  const [isSignOutDialogOpen, setIsSignOutDialogOpen] = useState(false);
  const [showSignOutOptions, setShowSignOutOptions] = useState(false);
const closeSignOutDialog = () => {
  setShowSignOutOptions(false);  };
const signOut = () => {
  // Perform Firebase Google sign out logic here
  // You'll need to implement your sign-out functionality
  auth.signOut().then(function() {
    /* Sign-out successful. */
    console.log('Sign-out successful.');
    // You can redirect the user to the sign-in page or perform any other desired action
  }).catch(function(error) {
    /* An error happened. */
    console.error('Sign-out error:', error);
  });
  // Once signed out, you can close the dialog box or perform any other desired action

  // Close the dialog box
  closeSignOutDialog();
};

  useEffect(() => {
    const handleResize = () => {
      setMenuOpen(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
//     <div className={`flex flex-col bg-[#001451] border-r border-neutral-700 w-100 h-screen ${menuOpen ? 'menu-open' : 'menu-closed'}`}>
//       <div className="flex justify-between items-center bg-[#000C66] h-[60px] p-3 relative">
//   <p className="text-white">Odin.ai <span className="bg-green-500 text-white text-xs px-0.5 py-0.5 rounded-md relative top-[-0.4rem]">Beta</span>

// </p>
// </div>


//       <div className="flex justify-between items-center h-[60px] p-2">
//       <p className="text-white">Manage Credits</p>      
//       </div>
//       <div className="flex justify-between items-center h-[60px] p-2">
//         <p className="text-white">Help</p>
//       </div>
//       <button
//             onClick={signOut}
//             className="flex justify-between items-center h-[60px] p-2"
//           >
//           <p className="text-white">Sign out</p>
//       </button>
//     </div>
<div className={`flex flex-col bg-[#001451] border-r border-neutral-700 w-100 h-screen ${menuOpen ? 'menu-open' : 'menu-closed'}`}>
  <div className="flex justify-between items-center bg-[#000C66] h-[60px] p-3 relative">
    <p className="text-white group">
      Odin.ai{" "}
      <span className="bg-green-500 text-white text-xs px-0.5 py-0.5 rounded-md relative top-[-0.4rem] group-hover:bg-[#001451]">
        Beta
      </span>
    </p>
  </div>

  <div className="flex justify-between items-center h-[60px] p-2 hover:bg-blue-500">
    <p className="text-white group">
      Manage Credits
    </p>
</div>


  <div className="flex justify-between items-center h-[60px] p-2 hover:bg-blue-500">
    <p className="text-white group">
      Help
    </p>
</div>


  <button onClick={signOut} className="flex justify-between items-center h-[60px] p-2 hover:bg-blue-500">
    <p className="text-white group">
      Sign out
    </p>
  </button>
</div>


  );
}

export default LeftMenu;


