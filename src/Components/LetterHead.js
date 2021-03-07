import React from "react";
import letterheadData from "./LetterHeadData";

/* style={{ width: "800px", height: "700px" }} 
<img src={letterheadData.first.url} alt="sample letterhead" />*/

function Letterhead() {
  let letterheadHeight = letterheadData.first.height;
  let letterheadWidth = letterheadData.first.width;

  return (
    <>
      <img
        style={{ height: letterheadHeight, width: letterheadWidth }}
        src={letterheadData.first.url}
        alt="sample letterhead"
      />
    </>
  );
}

export default Letterhead;
