import React, { useEffect, useState } from "react";
import "../App.css";
import ContentData from "./ContentData";

function Content(props) {
  let medicineArr = ContentData.Medicine;

  const [state, setstate] = useState("false");

  useEffect(() => {
    let contHeight = document.getElementById("content").clientHeight;
    //  console.log(cont);
  }, []);

  useEffect(() => {
    applyPageBreak();
  });

  let applyPageBreak = () => {
    let ele = document.getElementsByClassName("content-child");
    let height = 135;

    //let heightMargin = 135;
    for (let i = 0; i < ele.length; i++) {
      // console.log(ele[i].clientHeight);
      height = height + ele[i].clientHeight;
      // console.log(height);

      if (height > 448) {
        console.log("inside condition");
        console.log("margin applied on" + ele[i].id);
        let setMargin = ele[i].clientHeight + 100;
        //console.log(setMargin);
        document.getElementById(ele[i].id).style.marginTop = setMargin + "px";
        document.getElementById(ele[i].id).style.color = "red";
        //window.location.reload(false);
        setstate("True");
        break;
      }
    }
  };

  /* applyPageBreak(); */

  return (
    <div className="content" id="content">
      <p className="content-child" id="complaints">
        <span>Complaints :</span> {ContentData.complaints}
      </p>
      <br />
      <p className="content-child" id="diagnosis">
        <span>Diagnosis :</span>
        {ContentData.Diagnosis}
      </p>
      <br />
      <div className="content-child" id="medicine">
        <span>Medicine :</span>
        <table>
          <tbody>
            <tr>
              <th>Medicine Name</th>
              <th>Dosage</th>
              <th>Duration</th>
            </tr>
            {medicineArr.map((cVal, index) => {
              return (
                <>
                  <tr key={index}>
                    {cVal.map((val, i) => {
                      return <td key={i}>{val}</td>;
                    })}
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
      <br />
      <p className="content-child" id="notes">
        <span>Notes :</span>
        {ContentData.Notes}
      </p>
      <br />
      <p className="content-child" id="tests">
        <span>Investigations :</span>
        {ContentData.Investigations}
      </p>
      <br />

      <p className="content-child" id="followup">
        <span>Next Followup Details :</span> {ContentData.NextFollowupDetails}
      </p>
    </div>
  );
}

export default Content;
