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

  const [error, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Error Handling
    const formErrors = {};
    // Required Error handling
    if (!formInput.fName) {
      formErrors.fName = 'First name is required';
    }
    if (!formInput.lName) {
      formErrors.lName = 'Last name is required';
    }
    if (!formInput.phone) {
      formErrors.phone = 'Phone is required';
    }
    if (!formInput.email) {
      formErrors.email = 'Email is required';
    }
    if (!formInput.address) {
      formErrors.address = 'Address is required';
    }

    setErrors(formErrors);

    // No Error in form and submission
    if (Object.keys(formErrors).length === 0) {
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
      console.log('Form Submitted successfully');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrors((prevState) => ({
      ...prevState,
      [name]: '',
    }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          name="fName"
          type="text"
          label="First Name"
          handleChange={handleChange}
          value={formInput.fName}
          error={error.fName}
        />
        <TextField
          name="lName"
          type="text"
          label="Last Name"
          handleChange={handleChange}
          value={formInput.lName}
          error={error.lName}
        />
        <TextField
          name="phone"
          type="text"
          label="Contact No"
          handleChange={handleChange}
          value={formInput.phone}
          error={error.phone}
        />
        <TextField
          name="email"
          type="email"
          label="Email"
          handleChange={handleChange}
          value={formInput.email}
          error={error.email}
        />
        <TextField
          name="address"
          type="address"
          label="Last Name"
          handleChange={handleChange}
          value={formInput.address}
          error={error.address}
        />

        <input type="submit" value="Submit Form" />
      </form>
    </div>
  );
}

export default FormPage;
