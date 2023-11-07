import React, { useEffect, useRef, useState } from "react";
import "./chatScreen.css";
import {
  MdMic,
  MdOutlineAdd,
  MdPlusOne,
  MdSearch,
  MdSend,
} from "react-icons/md";
import { TbDotsVertical } from "react-icons/tb";
const ChatScreen = ({ selectedPerson }) => {
  const [inputMessage, setInputMessage] = useState("");
  const chatBodyRef = useRef(null);

  //   const scrollToBottom = () => {
  //     if (chatBodyRef.current) {
  //       chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
  //     }
  //   };

  //   useEffect(() => {
  //     scrollToBottom();
  //   }, [inputMessage, selectedPerson]);

  return (
    <>
      <div className="chat-header">
        <div className="chat-profile">
          <div className="chat-profile-image">
            <img src={selectedPerson.image} alt="Profile" />
          </div>
          <div className="chat-profile-info">
            <h4>{selectedPerson.name}</h4>
            <p>{selectedPerson?.activeStatus}</p>
          </div>
        </div>
        <div className="header-right">
          <MdSearch />
          <TbDotsVertical />
        </div>
      </div>
      {/* chat body  */}
      <div
        className="chat-body"
        ref={chatBodyRef}
        style={{
          overflowY: "scroll",
          height: "100%",
          paddingTop: "50px",
        }}
      >
        {selectedPerson.messages.map((message, index) => (
          <div
            key={index}
            className={`message ${
              message.from === "me" ? "right-message" : "left-message"
            }`}
          >
            <div className="title">
              <span className="indicator"> </span>
              {message.message}
            </div>
          </div>
        ))}
      </div>
      <div className="chat-footer">
        <div>
          <MdOutlineAdd className="icon" />
        </div>
        <div className="chat-input">
          <input
            type="text"
            name="input"
            id="input"
            placeholder="write your message"
            value={inputMessage}
            onChange={(e) => {
              setInputMessage(e.target.value);
            }}
          />
        </div>
        {inputMessage.length > 0 ? (
          <div>
            <MdSend className="icon" />
          </div>
        ) : (
          <div>
            <MdMic className="icon" />
          </div>
        )}
      </div>
    </>
  );
};

export default ChatScreen;
