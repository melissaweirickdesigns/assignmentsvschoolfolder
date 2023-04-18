import React, { useState, useEffect } from 'react';

export default function Form({ addContactHandler, updateFormData }) {
  const [formData, setFormDataLocal] = useState({
    fname: '',
    lname: '',
    email: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  function handleChange(event) {
    setFormDataLocal((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setFormSubmitted(true);
  }

  useEffect(() => {
    if (formSubmitted) {
      const contact = {
        fname: formData.fname,
        lname: formData.lname,
        email: formData.email,
      };
      const contactAdded = addContactHandler(contact);
      if (contactAdded || !contactAdded) {
        setFormSubmitted(false);
        setFormDataLocal({
          fname: '',
          lname: '',
          email: '',
        });
      }
    }
    updateFormData(formData);
  }, [formData, formSubmitted, addContactHandler, updateFormData]);

  return (
    <div>
      <form onSubmit={handleSubmit} className="nameChangeForm">
        <h1>Name Change Form</h1>
        <input
          type="email"
          className="email"
          placeholder="Email Address"
          value={formData.email}
          name="email"
          onChange={handleChange}
        />
        <input
          type="text"
          className="fname"
          placeholder="First Name"
          value={formData.fname}
          name="fname"
          onChange={handleChange}
        />
        <input
          type="text"
          className="lname"
          placeholder="Last Name"
          value={formData.lname}
          name="lname"
          onChange={handleChange}
        />
        <button type="submit" className="submitButton" name="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
