import React from "react";

function StandardReply({ sendMessage }) {
  // Your standard reply message
  const standardMessage = "Hey buddy";

  // Function to send the standard reply
  const sendStandardReply = () => {
    sendMessage(standardMessage);
  };

  return (
    <div className="flex justify-start items-start w-full py-2">
      <div
        className="bg-white text-black p-3 rounded-lg shadow-md cursor-pointer"
        onClick={sendStandardReply}
      >
        <p className="text-left text-white">{standardMessage}</p>
      </div>
    </div>
  );
}

export default StandardReply;
