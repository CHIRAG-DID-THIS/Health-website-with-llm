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

function ChatDetail() {
  const [messages, setMessages] = useState(messagesData);
  const [typing, setTyping] = useState(false);

  const inputRef = useRef(null);
  const bottomRef = useRef(null);

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

  return (
    
    // ChatDetail main container
    <div className="flex flex-col h-screen">
      {/* Contact nav 202d33*/}
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

        {/* Buttons */}
        <div className="flex justify-between items-center w-[85px]">
          {/* <RoundedBtn icon={<MdSearch />} /> */}
          <RoundedBtn icon={<HiDotsVertical />} />
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
    </div>
  );
}

export default ChatDetail;
