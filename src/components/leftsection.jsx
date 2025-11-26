import React from "react";
import "../App.css";

export const leftsection = ({
  Note,
  setNote,
  title,
  settitle,
  details,
  setdetails,
}) => {
  const submitHandler = (e) => {
    e.preventDefault();

    const noteCopy = [...Note];
    console.log(e.target.value);

    noteCopy.push({ title, details });
    setNote(noteCopy);
    settitle("");
    setdetails("");
  };

  return (
    <div className="leftsection">
      <form
        className="form_input"
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          type="text"
          placeholder="Enter Note Handing"
          className="input1"
          value={title}
          onChange={(elem) => {
            settitle(elem.target.value);
          }}
        />

        <textarea
          placeholder="Enter discription"
          className="input2"
          value={details}
          onChange={(elem) => {
            setdetails(elem.target.value);
          }}
        />

        <button className="btn">Save Note</button>
      </form>
    </div>
  );
};

export default leftsection;
