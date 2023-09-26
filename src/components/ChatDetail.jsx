// import React, { useState, useEffect, useRef } from "react";
// import Message from "./Message";
// import RoundedBtn from "./Common/RoundedBtn";
// import { messagesData } from "../data/whatsapp";
// import { MdSearch, MdSend } from "react-icons/md";
// import { HiDotsVertical } from "react-icons/hi";
// import { BiHappy } from "react-icons/bi";
// import { AiOutlinePaperClip } from "react-icons/ai";
// import { BsFillMicFill } from "react-icons/bs";
// import { cs1, cs2 } from "../assets/whatsapp";
// import { getTime } from "../logic/whatsapp";
// import StandardReply from "./StandardReply";
// import AutoReply from "./AutoReply";
// import Modal from "react-modal";
// import { auth } from '../firebaseConfig'; // Import your Firebase configuration

// function ChatDetail() {
//   const [messages, setMessages] = useState(messagesData);
//   const [typing, setTyping] = useState(false);

//   const inputRef = useRef(null);
//   const bottomRef = useRef(null);
//   const [isSignOutDialogOpen, setIsSignOutDialogOpen] = useState(false);
//   const toggleDropdown = () => {
//     setIsSignOutDialogOpen(!isSignOutDialogOpen);
//   };


//   const openSignOutDialog = () => {
//     setIsSignOutDialogOpen(true);
//   };
//   const closeMenu = () => {
//     setIsSignOutDialogOpen(false);
//   };

//   const closeSignOutDialog = () => {
//     setIsSignOutDialogOpen(false);
//   };
//   const signOut = () => {
//     // Perform Firebase Google sign out logic here
//     // You'll need to implement your sign-out functionality
//     auth.signOut().then(function() {
//       /* Sign-out successful. */
//       console.log('Sign-out successful.');
//       // You can redirect the user to the sign-in page or perform any other desired action
//     }).catch(function(error) {
//       /* An error happened. */
//       console.error('Sign-out error:', error);
//     });
//     // Once signed out, you can close the dialog box or perform any other desired action
  
//     // Close the dialog box
//     closeSignOutDialog();
//   };
  

//   // Functions

//   const addMessage = (msg) => {
//     const newMessages = [...messages, msg];
//     setMessages(newMessages);
//   };

//   const handleEmojiClick = () => {
//     inputRef.current.value += "🔥";
//     inputRef.current.focus();
//   };

//   const handleImgUpload = () => {
//     addMessage({
//       img: cs2,
//       time: getTime(),
//       sent: true,
//     });
//   };

//   const handleInputChange = () => {
//     inputRef.current.value.length === 0 ? setTyping(false) : setTyping(true);
//   };

//   const handleInputSubmit = () => {
//     if (inputRef.current.value.length > 0) {
//       addMessage({
//         msg: inputRef.current.value,
//         time: getTime(),
//         sent: true,
//       });
//       inputRef.current.value = "";
//       inputRef.current.focus();
//       setTyping(false);
//     }
//   };
//   const sendStandardReply = () => {
//     addMessage({
//       msg: "Hey buddy", // Standard reply message
//       time: getTime(),
//       sent: false, // Set sent to false to indicate it's a received message
//     });
//   };

//   useEffect(() => {
//     bottomRef.current?.scrollIntoView({
//       behavior: "smooth",
//     });
//   }, [messages]);

//   useEffect(() => {
//     const listener = (e) => {
//       if (e.code === "Enter") handleInputSubmit();
//     };

//     document.addEventListener("keydown", listener);
//     return () => document.removeEventListener("keydown", listener);
//   });

//   return (
    
//     // ChatDetail main container
//     <div className="flex flex-col h-screen">
//       {/* Contact nav 202d33*/}
//       <div className="flex justify-between bg-[#000C66] h-[60px] p-3">
//         {/* Contact info */}
//         <div className="flex items-center">
//           {/* Profile picture */}
//           <img
//             src={cs1}
//             alt="profile_picture"
//             className="rounded-full w-[45px] h-[45px] mr-5"
//           />

//           {/* Info */}
//           <div className="flex flex-col">
//             {/* Contact */}
//             <h1 className="text-white font-medium">Chat Bot</h1>

//             {/* Status */}
//             <p className="text-[#8796a1] text-xs">online</p>
//           </div>
//         </div>

//         {/* Buttons */}
//         <div
//           className="flex justify-between items-center w-[85px]"
//           onMouseEnter={handleToggleSignOutOptions}
//           onMouseLeave={handleToggleSignOutOptions}
//         >
//           {showSignOutOptions ? (
//             // Render Sign Out options when hovering
//             <div className="absolute mt-10 right-0 w-32 bg-white rounded-md shadow-md">
//               <ul>
//                 <li>
//                   <button
//                     onClick={signOut}
//                     className="block w-full text-left px-4 py-2 hover:bg-gray-100 focus:outline-none"
//                   >
//                     Sign Out
//                   </button>
//                 </li>
//                 <li>
//                   <button
//                     onClick={closeMenu}
//                     className="block w-full text-left px-4 py-2 hover:bg-gray-100 focus:outline-none"
//                   >
//                     Close
//                   </button>
//                 </li>
//                 {/* Add more menu items as needed */}
//               </ul>
//             </div>
//           ) : (
//             // Render the three dots when not hovering
//             <RoundedBtn icon={<HiDotsVertical />} />
//           )}
//       </div>

//       {/* Messages section */}
//       <div
//         className="bg-[#0a131a] bg-[url('assets/images/bgwhite.webp')] bg-contain overflow-y-scroll h-100"
//         style={{ padding: "12px 7%" }}
//       >
//        {messages.map((msg, index) => (
//   <React.Fragment key={index}>
//     <Message
//       msg={msg.msg}
//       time={msg.time}
//       isLink={msg.isLink}
//       img={msg.img}
//       sent={msg.sent}
//     />
//     <AutoReply 
//       msg={msg.msg}
//       time={msg.time}
//     />
//   </React.Fragment>
// ))}

//         <div ref={bottomRef} />
//       </div>

//       {/* Bottom section */}
//       <div className="flex items-center bg-[#000C66] w-100 h-[70px] p-2">
//         {/* Emoji btn */}
//         <RoundedBtn icon={<BiHappy />} onClick={handleEmojiClick} />

//         {/* Upload btn */}
//         {/* <span className="mr-2">
//           <RoundedBtn icon={<AiOutlinePaperClip />} onClick={handleImgUpload} />
//         </span> */}

//         {/* Input bar 2c3943*/}
//         <input
//           type="text"
//           placeholder="Type a message"
//           className="bg-[#FFFFFF] rounded-lg outline-none text-sm text-black-200 w-100 h-100 px-3 placeholder:text-sm placeholder:text-[#000000]"
//           onChange={handleInputChange}
//           ref={inputRef}
//         />


//         {/* Mic/Send btn */}
//         <span className="ml-2">
//           {typing ? (
//             <RoundedBtn icon={<MdSend />} onClick={handleInputSubmit} />
//           ) : (
//             <RoundedBtn icon={<MdSend />} />
//           )}
//         </span>
//       </div>
//       {/* Sign Out Dialog */}
// {/* <Modal
//   isOpen={isSignOutDialogOpen}
//   onRequestClose={closeSignOutDialog}
//   contentLabel="Sign Out Dialog"
//   className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 bg-white rounded-md p-4"
// >
//   <div className="text-center">
//     <p className="text-lg font-semibold">Sign Out</p>
//     <p className="text-gray-600">Do you want to sign out from Firebase Google login?</p>
//     <div className="mt-4 flex justify-center">
//       <button
//         onClick={signOut}
//         className="bg-red-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-red-600 focus:outline-none"
//       >
//         Sign Out
//       </button>
//       <button
//         onClick={closeSignOutDialog}
//         className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 focus:outline-none"
//       >
//         Cancel
//       </button>
//     </div>
//   </div>
// </Modal> */}
//           {/* {isSignOutDialogOpen && (
//             <div className="absolute mt-10 left-0 w-32 bg-white rounded-md shadow-md">
//               <ul>
//                 <li>
//                   <button
//                     onClick={signOut}
//                     className="block w-full text-left px-4 py-2 hover:bg-gray-100 focus:outline-none"
//                   >
//                     Sign Out
//                   </button>
//                 </li>
//                 <li>
//                   <button
//                     onClick={closeMenu}
//                     className="block w-full text-left px-4 py-2 hover:bg-gray-100 focus:outline-none"
//                   >
//                     Close
//                   </button>
//                 </li>
//                 {/* Add more menu items as needed */}
//               {/* </ul>
//             </div>
//           )}
//         </div> */} 
//   );
// }

// export default ChatDetail;
import React, { useState, useEffect, useRef } from "react";
import Message from "./Message";
import RoundedBtn from "./Common/RoundedBtn";
import { messagesData } from "../data/whatsapp";
import { MdSearch, MdSend } from "react-icons/md";
import { HiDotsVertical } from "react-icons/hi";
import { BiHappy } from "react-icons/bi";
import { AiOutlinePaperClip } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { cs1, cs2 } from "../assets/whatsapp";
import { getTime } from "../logic/whatsapp";
import StandardReply from "./StandardReply";
import AutoReply from "./AutoReply";
import Modal from "react-modal";
import { auth } from '../firebaseConfig'; // Import your Firebase configuration

function ChatDetail() {
  const [messages, setMessages] = useState(messagesData);
  const [typing, setTyping] = useState(false);

  const inputRef = useRef(null);
  const bottomRef = useRef(null);
  const [isSignOutDialogOpen, setIsSignOutDialogOpen] = useState(false);
  const [showSignOutOptions, setShowSignOutOptions] = useState(false);

  // Toggle Sign Out options on hover
  const handleToggleSignOutOptions = () => {
    setShowSignOutOptions(!showSignOutOptions);
  };

  const toggleDropdown = () => {
    setIsSignOutDialogOpen(!isSignOutDialogOpen);
  };

  const openSignOutDialog = () => {
    setIsSignOutDialogOpen(true);
  };

  const closeMenu = () => {
    setIsSignOutDialogOpen(false);
  };

  const closeSignOutDialog = () => {
    setIsSignOutDialogOpen(false);
  };

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

  // Functions

  const addMessage = (msg) => {
    const newMessages = [...messages, msg];
    setMessages(newMessages);
  };

  const handleEmojiClick = () => {
    inputRef.current.value += "🔥";
    inputRef.current.focus();
  };

  const handleImgUpload = () => {
    addMessage({
      img: cs2,
      time: getTime(),
      sent: true,
    });
  };

  const handleInputChange = () => {
    inputRef.current.value.length === 0 ? setTyping(false) : setTyping(true);
  };

  const handleInputSubmit = () => {
    if (inputRef.current.value.length > 0) {
      addMessage({
        msg: inputRef.current.value,
        time: getTime(),
        sent: true,
      });
      inputRef.current.value = "";
      inputRef.current.focus();
      setTyping(false);
    }
  };

  const sendStandardReply = () => {
    addMessage({
      msg: "Hey buddy", // Standard reply message
      time: getTime(),
      sent: false, // Set sent to false to indicate it's a received message
    });
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  useEffect(() => {
    const listener = (e) => {
      if (e.code === "Enter") handleInputSubmit();
    };

    document.addEventListener("keydown", listener);
    return () => document.removeEventListener("keydown", listener);
  });

  // Render the component
  return (
    // ChatDetail main container
    <div className="flex flex-col h-screen">
      {/* Contact nav */}
      <div className="flex justify-between bg-[#000C66] h-[60px] p-3">
        {/* Contact info */}
        <div className="flex items-center">
          {/* Profile picture */}
          <img
            src={cs1}
            alt="profile_picture"
            className="rounded-full w-[45px] h-[45px] mr-5"
          />

          {/* Info */}
          <div className="flex flex-col">
            {/* Contact */}
            <h1 className="text-white font-medium">Chat Bot</h1>

            {/* Status */}
            <p className="text-[#8796a1] text-xs">online</p>
          </div>
        </div>

        {/* Buttons or Sign Out options */}
        <div
  className="relative flex justify-between items-center w-[85px]"
  onClick={handleToggleSignOutOptions}
>
  {showSignOutOptions ? (
    <div className="absolute mt-4 right-0 w-32 bg-[#000C66] text-white rounded-md shadow-md md:w-48 md:right-5">
      <ul>
        <li>
          <button
            onClick={signOut}
            className="block w-full text-left px-4 py-1 focus:outline-none"
          >
            Sign Out
          </button>
        </li>
        <li>
          <button
            onClick={closeSignOutDialog}
            className="block w-full text-left px-4 py-2 focus:outline-none"
          >
            Close
          </button>
        </li>
      </ul>
    </div>
  ) : (
    <RoundedBtn icon={<HiDotsVertical />} />
  )}
</div>
      </div>

      {/* Messages section */}
      <div
        className="bg-[#0a131a] bg-[url('assets/images/bgwhite.webp')] bg-contain overflow-y-scroll h-100"
        style={{ padding: "12px 7%" }}
      >
        {messages.map((msg, index) => (
          <React.Fragment key={index}>
            <Message
              msg={msg.msg}
              time={msg.time}
              isLink={msg.isLink}
              img={msg.img}
              sent={msg.sent}
            />
            <AutoReply 
              msg={msg.msg}
              time={msg.time}
            />
          </React.Fragment>
        ))}

        <div ref={bottomRef} />
      </div>

      {/* Bottom section */}
      <div className="flex items-center bg-[#000C66] w-100 h-[70px] p-2">
        {/* Emoji btn */}
        <RoundedBtn icon={<BiHappy />} onClick={handleEmojiClick} />

        {/* Upload btn */}
        {/* <span className="mr-2">
          <RoundedBtn icon={<AiOutlinePaperClip />} onClick={handleImgUpload} />
        </span> */}

        {/* Input bar 2c3943*/}
        <input
          type="text"
          placeholder="Type a message"
          className="bg-[#FFFFFF] rounded-lg outline-none text-sm text-black-200 w-100 h-100 px-3 placeholder:text-sm placeholder:text-[#000000]"
          onChange={handleInputChange}
          ref={inputRef}
        />

        {/* Mic/Send btn */}
        <span className="ml-2">
          {typing ? (
            <RoundedBtn icon={<MdSend />} onClick={handleInputSubmit} />
          ) : (
            <RoundedBtn icon={<MdSend />} />
          )}
        </span>
      </div>

      {/* Sign Out Dialog */}
      {/* {isSignOutDialogOpen && (
        <div className="absolute mt-10 left-0 w-32 bg-white rounded-md shadow-md">
          <ul>
            <li>
              <button
                onClick={signOut}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 focus:outline-none"
              >
                Sign Out
              </button>
            </li>
            <li>
              <button
                onClick={closeMenu}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 focus:outline-none"
              >
                Close
              </button>
            </li>
            {/* Add more menu items as needed */}
      {/* </ul>
        </div>
      )} */}
    </div>
  );
}

export default ChatDetail;
