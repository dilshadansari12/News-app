import React from 'react';
import log  from "../log.gif";

const Loading = () => {
  return (
    <div style={{width:"100%" }} className="d-flex justify-content-center align-items-center">
        <img src={log} alt="spin loggos" />
    </div>
  )
}


export default Loading;