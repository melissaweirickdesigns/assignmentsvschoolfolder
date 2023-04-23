import React, { useState } from "react";

export default function MemeHistory({ memeHistory, onRemove, onSave }) {
  const [selected, setSelected] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");

  function handleSelect(index) {
    if (selected.includes(index)) {
      setSelected(selected.filter((i) => i !== index));
    } else {
      setSelected([...selected, index]);
    }
  }

  function handleRemove() {
    onRemove(selected);
    setSelected([]);
  }

  function handleEdit() {
    if (selected.length === 1) {
      setEditMode(true);
      const meme = memeHistory[selected[0]];
      setTopText(meme.topText);
      setBottomText(meme.bottomText);
    } else {
      alert("Please select only one meme to edit.");
    }
  }

  function handleSave() {
    onSave(selected, topText, bottomText);
    setEditMode(false);
    setSelected([]);
  }
  
  

  return (
    <div className="padding-history">
      <div className="preview-header">Your Meme History</div>
      {selected.length > 0 && !editMode && (
        <div className="remove-from-history">
          <button
            className="remove-from-history-button"
            onClick={handleRemove}
          >
            Remove from History
          </button>
          <button className="remove-from-history-button" onClick={handleEdit}>
            Edit Meme Text
          </button>
        </div>
      )}
      {editMode && (
        <div className="edit-history">
          <input
            type="text"
            className="edit-top-text"
            value={topText}
            onChange={(e) => setTopText(e.target.value)}
            placeholder="Enter top text"
          />
          <input
            type="text"
            className="edit-bottom-text"
            value={bottomText}
            onChange={(e) => setBottomText(e.target.value)}
            placeholder="Enter bottom text"
          />
          <button className="remove-from-history-button" onClick={() => handleSave()}>
            Save Meme Text
            </button>

        </div>
      )}
      <div className="memeHistory">
        {memeHistory.map((meme, index) => (
          <div key={index} className="history-piece">
            <div className="select-checkbox">
              <input
                type="checkbox"
                checked={selected.includes(index)}
                onChange={() => handleSelect(index)}
              />
            </div>
            <h2 className="meme-history-header">{"Meme " + (index + 1)}</h2>
            <div className="meme-wrapper">
              <img src={meme.randomImage} alt="Meme" />
              <h2 className="history-text history-top-text">{meme.topText}</h2>
              <h2 className="history-text history-bottom-text">
                {meme.bottomText}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
