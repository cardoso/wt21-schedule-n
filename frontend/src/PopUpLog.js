import React from 'react';
import { BsXLg } from "react-icons/bs";

function popUpLog(props) {
    return (props.trigger) ? (
        <div className="overlay">
    <div className="signUpContainer">
    <div className="signUp"><BsXLg onClick={() => props.setTrigger(false)} /></div>
        <div className="signUpTop">{ props.children } </div>
        </div>
     </div>
    ) : ""
}

export default popUpLog;


