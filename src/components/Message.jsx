import React from "react";
import { useMessageContext } from "./MessageContext";
import AutoReply from './AutoReply';


function Message({ msg, time, isLink, img, sent }) {
  // const { addMessage } = useMessageContext();

  return (
    // Message container
    <div
      className={`flex justify-center items-center rounded-md w-fit my-1 ${
        sent ? "bg-[#1434A4] ml-auto" : "bg-[#202d33] mr-auto"
      }`}
    >
      {/* Image message */}
      {img ? (
        <div className="relative w-100 p-2">
          {/* Image */}
          <img
            src={img}
            alt="img_message"
            className="rounded-md max-w-[270px] w-100"
          />
          {/* Time */}
          <p className="absolute right-2 bottom-3 text-[#8796a1] text-[10px] min-w-[50px]">
            {time}
          </p>
        </div>
      ) : (
        // Text (link/normal) message
        <div
          className="flex justify-between items-end max-w-[410px] p-2"
          style={{ wordBreak: "break-word" }}
        >
          {/* Link */}
          {isLink ? (
            <a
              href={msg}
              target="blank"
              className="text-[#53beec] hover:text-[#53beec] focus:text-[#53beec] active:text-[#53beec] text-sm underline hover:underline mr-2"
            >
              {msg}
            </a>
          ) : (
            // Normal text
            <p className="text-white text-sm mr-2">{msg}</p>
          )}
          <p className="text-[#8796a1] text-[10px] min-w-[50px]">{time}</p>
        </div>
      )}
      {/* { sent && <AutoReply msg={msg} time={time} /> } */}
    </div>
  );
}

export default Message;
