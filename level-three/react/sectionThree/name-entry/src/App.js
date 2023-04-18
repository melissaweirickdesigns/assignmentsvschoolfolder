import React, { useState } from 'react';
import Form from './components/Form';
import NameList from './components/NameList';
import './App.css';
import ContactInfo from './components/ContactInfo';

export default function App() {
  const [contacts, setContacts] = useState([]);
  //The `contacts` state variable holds an array of contacts
  const [duplicate, setDuplicate] = useState(false);
  //`duplicate` holds a boolean value to indicate whether a duplicate contact has been found
  const [selectedContact, setSelectedContact] = useState(null);
  //`selectedContact` holds the currently selected contact object
  const [formData, setFormData] = useState({});
  //`formData` holds the form data submitted by the user

  function addContactHandler(contact) {
    const capitalizedFirstName =
      contact.fname.charAt(0).toUpperCase() +
      contact.fname.slice(1).toLowerCase();
    const capitalizedLastName =
      contact.lname.charAt(0).toUpperCase() +
      contact.lname.slice(1).toLowerCase();
    const lowercaseEmail = contact.email.toLowerCase();
//changing the first character of the first and last name to a capital and then the remaining characters to a lowercase to unify submissions
    const contactExists = contacts.some(
      (c) => c.email.toLowerCase() === lowercaseEmail
    );
//changes the email address submitted by the user and makes them all lower case. then runs through an array with the some method to see if there is a match already in the contacts array

    if (!contactExists) {
      const updatedContact = {
        fname: capitalizedFirstName,
        lname: capitalizedLastName,
        email: lowercaseEmail,
      };
      setContacts([...contacts, updatedContact]);
      return true;

      //if the contact does not existing based on the email address only, then it will grab the contacts array and add the updated contact to the end of the array and then submit the new updated array to the contacts useState
    } else {
      window.alert('Duplicate contact found');
      return false;
      //if a duplicate is found, then it will display an alert that the contact already exists
    }
  }

  function updateFormData(formData) {
    setFormData(formData);
  }
//this allows the formData to be imported from the Form.js file to be used in the ContactInfo.js file. 

  return (
    <div className="appDiv">
      <Form
        addContactHandler={addContactHandler}
        contacts={contacts}
        duplicate={duplicate}
        selectedContact={selectedContact}
        setSelectedContact={setSelectedContact}
        updateFormData={updateFormData}
      />
      <ContactInfo formData={formData} />
      <NameList
        contacts={contacts}
        setDuplicate={setDuplicate}
        onContactSelect={(contact) => {
          setDuplicate(true);
          setSelectedContact(contact);
        }}
      />
    </div>
  );
}
