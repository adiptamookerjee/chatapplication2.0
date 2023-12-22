import React from "react";
import VideoCallRoundedIcon from "@mui/icons-material/VideoCallRounded";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import Messages from "./Messages";
import Input from "./Input";
import "./Chat.css";

function Chat() {
  return (
    <div className="chat">
      <div className="chatInfo">
        <div className="contact">
          <img src={"dp.png"} alt="" />
          <span className="contactName">Jane</span>
        </div>
        <div className="chatIcons">
          <VideoCallRoundedIcon fontSize="large" />
          <CallRoundedIcon fontSize="large" />
          <MoreVertRoundedIcon fontSize="large" />
        </div>
      </div>
      <Messages className="messages"/>
      <Input/>
    </div>
  );
}

export default Chat;
