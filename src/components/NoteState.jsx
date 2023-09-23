import React, { useState, useEffect, createContext, useContext } from "react";

export const MessageContext = createContext();

export const useMessageContext = () => {
  return useContext(MessageContext);
};

const NoteState = (props) => {
  const host = "http://localhost:5000"; 

  const [messages, setMessages] = useState([]);
  
  // Fetch messages from the API
  const getMessages = async () => {
    try {
      const response = await fetch(`${host}/api/messages`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": localStorage.getItem('token')
        }
      });
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error("Error fetching messages: ", error);
    }
  };

  // Add a new message
  const addMessage = async (text, sent) => {
    try {
      // TODO: API Call to send message to the server
      const response = await fetch(`${host}/api/messages/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": localStorage.getItem('token')
        },
        body: JSON.stringify({ text, sent })
      });
      
      const newMessage = await response.json();
      
      // Add the new message to the state
      setMessages([...messages, newMessage]);

      // If the message is received from the user, add a response message
      if (!sent) {
        const botResponse = {
          text: "Hey, it's a chat bot",
          sent: true
        };

        // TODO: API Call to send the bot response to the server
        const botResponseResponse = await fetch(`${host}/api/messages/add`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "auth-token": localStorage.getItem('token')
          },
          body: JSON.stringify(botResponse)
        });
        
        const newBotResponse = await botResponseResponse.json();

        // Add the bot response to the state
        setMessages([...messages, newBotResponse]);
      }
    } catch (error) {
      console.error("Error adding message: ", error);
    }
  };

  // Delete a message by ID
  const deleteMessage = async (id) => {
    try {
      // TODO: API Call to delete the message from the server
      await fetch(`${host}/api/messages/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": localStorage.getItem('token')
        }
      });

      // Remove the deleted message from the state
      const updatedMessages = messages.filter((message) => message._id !== id);
      setMessages(updatedMessages);
    } catch (error) {
      console.error("Error deleting message: ", error);
    }
  };

  useEffect(() => {
    getMessages(); // Fetch messages when the component mounts
  }, []);

  return (
    <MessageContext.Provider value={{ messages, addMessage, deleteMessage }}>
      {props.children}
    </MessageContext.Provider>
  );
};

export default NoteState;
