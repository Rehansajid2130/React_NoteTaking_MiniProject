import React from "react";
import "./App.css";
import { useState } from "react";

import Leftsection from "./components/leftsection";
import Rightsection from "./components/rightsection";

export const App = () => {
  const [title, settitle] = useState("");
  const [details, setdetails] = useState("");

  const [Note, setNote] = useState([]);

  return (
    <div className="container">
      <Leftsection
        Note={Note}
        setNote={setNote}
        title={title}
        settitle={settitle}
        details={details}
        setdetails={setdetails}
      />
      <Rightsection Note={Note} setNote={setNote} />
    </div>
  );
};
export default App;
