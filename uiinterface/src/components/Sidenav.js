import React, { useContext, useState } from "react";
import "./sidenav.css";
import { MdMenu } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosAdd } from "react-icons/io";
import { FaRegMessage } from "react-icons/fa6";
import { AiOutlineFieldTime } from "react-icons/ai";
import { RiQuestionMark } from "react-icons/ri";
import { Context } from "../context/Context";
import { IoIosLogOut } from "react-icons/io";

const Sidenav = ({ Questions, setQuestions, postQuestions,extended,setExtended,logout }) => {
  
  const { setShowresult, input } = useContext(Context);

  return (
    <div className="sidenav">
      <div className="top">
        <MdMenu
          className="menu-bar"
          onClick={() => setExtended(!extended)}
          height={200}
          width={200}
        />
        <div className="plus-bar" onClick={() => setShowresult(false)}>
          <IoIosAdd className="plus" />
          {extended ? (
            <p style={{ position: "relative", top: "8px" }}>New chat</p>
          ) : null}
        </div>
        {extended ? (
          <div>
            <p className="recent-p">Recent</p>
            <div className="RECENT-MAIN">
              {Questions.length ? (
                <ul>
                  {Questions.map((item) => (
                    <div className="recent-div d-flex">
                      <FaRegMessage className="recent" />
                      <li className="questions">{item}</li>
                    </div>
                  ))}
                </ul>
              ) : (
                <p>No recent Chats</p>
              )}
            </div>
          </div>
        ) : null}
      </div>
      <div className="bottom">
      <a href="https://support.google.com/gemini/?hl=en#topic=15280100" target='_blank'>
        <div className="help-div">
          <RiQuestionMark className="help" />
          {extended ? <p>Help</p> : null}
        </div>
      </a>  
        <div className="activity-div">
          <AiOutlineFieldTime className="activity" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="setting-div" onClick={()=>logout()}>
          <IoIosLogOut  className="setting" />
          {extended ? <p>LogOut</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
