import React from "react";
import "../App.css";
import Cards from "./cards"

export const rightsection = ({ Note, setNote, title, details }) => {
 
  return (
    <div className="rightsection">
      <h1>Recent Notes</h1>
      <Cards Note = {Note} setNote={setNote}
              title = {title} details = {details}/>
    </div>
  );
};

export default rightsection;
