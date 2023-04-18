import React from 'react';

export default function ContactInfo({formData}) {

  return (
    <div className='contactInfo'>
        <h6>{formData.fname} {formData.lname}</h6>
    </div>
  );
}
