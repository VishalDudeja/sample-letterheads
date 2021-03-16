import React, { useState } from "react";
import Letterhead from "./Components/LetterHead";
import Content from "./Components/Content";

let imageId = "letterheadImage";
function App() {
  const [letterImgHeight, setLetterImgHeight] = useState();

  let getHeight = () => {
    /*  return setLetterImgHeightt(document.getElementById(id).offsetHeight); */
    return setLetterImgHeight(document.getElementById(imageId).offsetHeight);
  };

  return (
    <div className="main-container">
      <Letterhead
        getHeight={getHeight}
        letterImgHeight={letterImgHeight}
        setId={imageId}
      />
      <Content letterImgHeight={letterImgHeight} />
    </div>
  );
}

export default App;
