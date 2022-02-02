import React from 'react';
import iconx from './images/iconx.svg';

function popUp(props) {
    return (props.trigger) ? (
        <div className="overlay">
    <div className="popUp">
        <div className="popUpContainer">
        <img src={iconx} onClick={() => props.setTrigger(false)} /></div>
        <div>{ props.children } </div>
        </div>
     </div>
    ) : ""
}

export default popUp;

