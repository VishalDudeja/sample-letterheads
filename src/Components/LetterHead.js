import React, { useState } from "react";
import "../App.css";
import letterheadData from "./LetterHeadData";

/* style={{ width: "800px", height: "700px" }} 
<img src={letterheadData.first.url} alt="sample letterhead" />*/

function Letterhead(props) {
  let letterheadHeight = letterheadData.first.height;
  let letterheadWidth = letterheadData.first.width;
  //console.log(props.setId);
  return (
    <div className="letterhead" id="letterhead">
      <img
        id={props.setId}
        style={{ height: letterheadHeight, width: letterheadWidth }}
        src={letterheadData.first.url}
        alt="sample Rx letterhead"
        onLoad={props.getHeight}
      />
    </div>
  );
}

export default Letterhead;
