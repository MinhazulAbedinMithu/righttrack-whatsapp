import React from "react";
import imgProfile from "../../images/profile.png";
import { MdOutlineGroups } from "react-icons/md";
import { RiFocus2Fill } from "react-icons/ri";
import { TbMessageDots, TbDotsVertical } from "react-icons/tb";

import "./sidebar.css";

const Sidebar = ({ conversationData, selectedPerson, setSelectedPerson }) => {
  return (
    <>
      <div className="header">
        <div className="header-left">
          <img src={imgProfile} alt="profile" />
        </div>
        <div className="header-right">
          <MdOutlineGroups />
          <RiFocus2Fill />
          <TbMessageDots />
          <TbDotsVertical />
        </div>
      </div>
      <div>
        {conversationData.map((person, index) => (
          <div
            key={index}
            className="person"
            onClick={() => {
              setSelectedPerson(person);
            }}
          >
            <div className="person-image">
              <img src={person.image} alt="Profile" />
            </div>
            <div className="person-info">
              <h4>{person.name}</h4>
              <p>{person?.messages[person?.messages?.length - 1].message}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
