import React from 'react'
import "../App.css"

    const cards = ({ Note, setNote, title, details }) => {
    const deleteNote = (idx) => {
        console.log(idx);
        const noteCopy = [...Note];
    
        noteCopy.splice(idx, 1);
        setNote(noteCopy);
      };
    
  return (
    <div className="card_section">
        {Note.map(function (Note, idx) {
          return (
            <div key={idx} className="Recent_card">
              <div>
                <h3 className="card_title">
                  {Note.title} <br /> <hr />
                </h3>
                <h3 className="card_content">{Note.details}</h3>
              </div>
              <div>
                <button
                  className="delete_btn"
                  onClick={() => {
                    deleteNote(idx);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
  )
}

export default cards