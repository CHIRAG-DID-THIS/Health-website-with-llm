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
  const [typing, setTyping] = useState(true);

  const inputRef = useRef(null);
  const bottomRef = useRef(null);
  const [isSignOutDialogOpen, setIsSignOutDialogOpen] = useState(false);
  const [showSignOutOptions, setShowSignOutOptions] = useState(false);

  // Toggle Sign Out options on hover
  const handleToggleSignOutOptions = () => {
    setShowSignOutOptions(!showSignOutOptions);
  };


const [botIsTyping, setBotIsTyping] = useState(false);


  const toggleDropdown = () => {
    setIsSignOutDialogOpen(!isSignOutDialogOpen);
  };
  const handleBotLoadingStateChange = (isLoading) => {
    setBotIsTyping(isLoading);
};

  const openSignOutDialog = () => {
    setIsSignOutDialogOpen(true);
  };
  const typingcheck= () => {
    setTyping(false);
  };
  const closeMenu = () => {
    setIsSignOutDialogOpen(false);
  };

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
    function handleClickOutside(event) {
      if (
        showSignOutOptions &&
        !event.target.closest('.sign-out-menu') && // Using closest for a more robust check
        !event.target.closest('.sign-out-button')
      ) {
        closeSignOutDialog();
      }
    }
  
    document.addEventListener('mousedown', handleClickOutside);
  
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showSignOutOptions]);

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
      setTyping(true);
    }
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
            <h1 className="text-white font-medium">Caretaker Bot</h1>

            {/* Status */}
            <p className="text-[#8796a1] text-xs">{botIsTyping ? 'typing' : 'online'}</p>

          </div>
        </div>

        {/* Buttons or Sign Out options */}
        <div
  className="relative flex justify-between items-center w-[85px] sign-out-button"
  onClick={handleToggleSignOutOptions}
>
  {showSignOutOptions ? (
    <div className="absolute mt-1 right-0 w-32 bg-[#000C66] text-white rounded-md shadow-md md:w-48 md:right-5 sign-out-menu">
      <ul>
        <li>
          <button
            onClick={signOut}
            className="block w-full text-left px-4 py-1 focus:outline-none"
          >
            LOGOUT
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
        className="bg-[#FFFFFF] bg-center bg-no-repeat bg-cover w-full bg-[url('assets/images/bglogo.webp')] bg-contain  overflow-y-scroll h-100"
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
    onLoadingStateChange={handleBotLoadingStateChange}
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
    </div>
  );
}

export default ChatDetail;
