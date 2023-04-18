import React from 'react';

export default function NameList(props) {

  return (
    <div className='nameList'>
      <h1>Contacts</h1>
      <ul>
        {props.contacts &&
        //this is checking to make sure that a list exists and is not null
          props.contacts.map(
            //this will map over each item and adds them to the list
            (contact) =>
                <li className='nameListDiv'>
                  <p className='firstName'>{contact.fname}</p>
                  <p className='lastName'>{contact.lname}</p>
                </li>
              )
          }
      </ul>
    </div>
  );
}