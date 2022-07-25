import React, { useState } from 'react';
import './index.css';
import countries from 'countries-list';
import TextField from '../../Components/TextField';
import RadioButton from '../../Components/RadioButton';
import Select from '../../Components/Select';

function FormPage() {
  const [formInput, setFormInput] = useState({
    fName: '',
    lName: '',
    gender: 'male',
    nationality: '',
    phone: '',
    email: '',
    address: '',
    dob: '',
    eduBackground: '',
  });

  // Options for RadioButton
  const genderOptions = [
    {
      id: 1,
      name: 'gender',
      label: 'Male',
      value: 'male',
    },
    {
      id: 2,
      name: 'gender',
      label: 'Female',
      value: 'female',
    },
    {
      id: 3,
      name: 'gender',
      label: 'Other',
      value: 'other',
    },
  ];

  // Options for Select
  const nationalityOptions = [];

  const countriesList = () => {
    const nations = countries.countries;
    Object.keys(nations).forEach((key) => {
      nationalityOptions.push({
        name: nations[key].name,
        value: key,
      });
    });
  };

  countriesList();

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
    if (!formInput.nationality) {
      formErrors.nationality = 'Nationality is required';
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
      console.log('Form Submitted successfully', formInput);
    }
  };

  // Textfield and RadioButton Change Function
  const handleChange = (e) => {
    // Switching based on component for TextField, RadioButton and Select
    if (typeof (e) === 'object') {
      const { name, value } = e.target;

      setFormInput((prevState) => ({
        ...prevState,
        [name]: value,
      }));
      setErrors((prevState) => ({
        ...prevState,
        [name]: '',
      }));
    } else {
      // Condition Specifically for Select Component
      setFormInput((prevState) => ({
        ...prevState,
        nationality: e,
      }));
      setErrors((prevState) => ({
        ...prevState,
        nationality: '',
      }));
    }
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

        <RadioButton
          handleChange={handleChange}
          value={formInput.gender}
          error={error.gender}
          gender={genderOptions}
        />

        <Select
          options={nationalityOptions}
          value={formInput.nationality}
          handleChange={handleChange}
          error={error.nationality}
          placeholder="Search something"
        />

        <TextField
          name="address"
          type="address"
          label="Address"
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
