import React, { useContext, useState } from 'react';
import { ThemeContext } from '../ThemeContext';

export default function PhotoGallery() {
  const { uglyThings, deleteUglyThing, editUglyThing } = useContext(ThemeContext);
  const [editModes, setEditModes] = useState(uglyThings.map(() => false));
  const [editedTitles, setEditedTitles] = useState(uglyThings.map(() => ''));
  const [editedDescriptions, setEditedDescriptions] = useState(uglyThings.map(() => ''));

  const handleEdit = (index, uglyThing) => {
    
    const updatedEditModes = [...editModes];
    const updatedEditedTitles = [...editedTitles];
    const updatedEditedDescriptions = [...editedDescriptions];

    updatedEditModes[index] = true;
    updatedEditedTitles[index] = uglyThing.title;
    updatedEditedDescriptions[index] = uglyThing.description;

    setEditModes(updatedEditModes);
    setEditedTitles(updatedEditedTitles);
    setEditedDescriptions(updatedEditedDescriptions);
  };

  const handleCancelEdit = (index) => {
    
    const updatedEditModes = [...editModes];
    const updatedEditedTitles = [...editedTitles];
    const updatedEditedDescriptions = [...editedDescriptions];

    updatedEditModes[index] = false;
    updatedEditedTitles[index] = '';
    updatedEditedDescriptions[index] = '';

    setEditModes(updatedEditModes);
    setEditedTitles(updatedEditedTitles);
    setEditedDescriptions(updatedEditedDescriptions);
  };

  const handleSaveEdit = (index, uglyThing) => {
    
    editUglyThing(uglyThing._id, editedTitles[index], editedDescriptions[index]);

    
    const updatedEditModes = [...editModes];
    const updatedEditedTitles = [...editedTitles];
    const updatedEditedDescriptions = [...editedDescriptions];

    updatedEditModes[index] = false;
    updatedEditedTitles[index] = '';
    updatedEditedDescriptions[index] = '';

    setEditModes(updatedEditModes);
    setEditedTitles(updatedEditedTitles);
    setEditedDescriptions(updatedEditedDescriptions);
  };

  return (
    <div className='img_gallery'>
      {uglyThings.map((uglyThing, index) => (
        <div key={uglyThing._id} className='photo-sq'>
          <img src={uglyThing.imgUrl} alt={uglyThing.title} />
          {editModes[index] ? (
            <>
              <input
                type='text'
                value={editedTitles[index]}
                onChange={(e) => {
                  const updatedEditedTitles = [...editedTitles];
                  updatedEditedTitles[index] = e.target.value;
                  setEditedTitles(updatedEditedTitles);
                }}
              />
              <input
                type='text'
                value={editedDescriptions[index]}
                onChange={(e) => {
                  const updatedEditedDescriptions = [...editedDescriptions];
                  updatedEditedDescriptions[index] = e.target.value;
                  setEditedDescriptions(updatedEditedDescriptions);
                }}
              />
              <button onClick={() => handleSaveEdit(index, uglyThing)}>Save</button>
              <button onClick={() => handleCancelEdit(index)}>Cancel</button>
            </>
          ) : (
            <>
              <h3>{uglyThing.title}</h3>
              <p>{uglyThing.description}</p>
              <div className='edit-delete'>
                <button onClick={() => handleEdit(index, uglyThing)}>Edit</button>
                <button onClick={() => deleteUglyThing(uglyThing._id)}>Delete</button>
              </div>              
            </>
          )}
        </div>
      ))}
    </div>
  );
  
}

