import React, { useState } from 'react';
import TextField from '../../Components/TextField';

function FormPage() {
  const [formInput, setFormInput] = useState({
    fName: '',
    lName: '',
    gender: '',
    nationality: '',
    phone: '',
    email: '',
    address: '',
    dob: '',
    eduBackground: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormInput({
      fName: '',
      lName: '',
      gender: '',
      nationality: '',
      phone: '',
      email: '',
      address: '',
      dob: '',
      eduBackground: '',
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput({
      ...formInput,
      [name]: value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField name="fName" type="text" label="First Name" handleChange={handleChange} value={formInput.fName} />
        <TextField name="lName" type="text" label="Last Name" handleChange={handleChange} value={formInput.lName} />
        <TextField name="phone" type="text" label="Contact No" handleChange={handleChange} value={formInput.phone} />
        <TextField name="email" type="email" label="Email" handleChange={handleChange} value={formInput.email} />
        <TextField name="address" type="address" label="Last Name" handleChange={handleChange} value={formInput.address} />

        <input type="submit" value="Submit Form" />
      </form>
    </div>
  );
}

export default FormPage;
