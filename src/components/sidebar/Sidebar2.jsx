import React, { useState, useEffect } from "react";
import axios from "axios";
import imgProfile from "../../images/profile.png";

import { chatData, userProfiles } from "../../utils/chat-data"; // Import the mock data

function Sidebar() {
  const [chats, setChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);

  useEffect(() => {
    // Simulate fetching chat data from the API (you can replace this with your actual API endpoint)
    axios.get("/api/chat-data").then((response) => {
      setChats(response.data);
    });
  }, []);

  const handleChatSelect = (chatId) => {
    setSelectedChat(chatId);
  };

  return (
    <div className="sidebar">
      <div className="chat-list">
        {chats.map((chat) => (
          <ChatListItem
            key={chat.id}
            chat={chat}
            onSelect={() => handleChatSelect(chat.id)}
            isSelected={selectedChat === chat.id}
          />
        ))}
      </div>
    </div>
  );
}

function ChatListItem({ contactName, lastMessage }) {
  return (
    <div className="chat-list-item">
      <div className="contact-avatar">
        <img
          src={imgProfile} // Replace with the contact's avatar image
          alt={contactName}
        />
      </div>
      <div className="chat-details">
        <h4>{contactName}</h4>
        <p>{lastMessage}</p>
      </div>
    </div>
  );
}

export default Sidebar;
