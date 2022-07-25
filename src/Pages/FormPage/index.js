import React, { useState } from 'react';
import './index.css';

import countries from 'countries-list';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import TextField from '../../Components/TextField';
import RadioButton from '../../Components/RadioButton';
import Select from '../../Components/Select';
import DatePicker from '../../Components/DatePicker';
import TextArea from '../../Components/TextArea';

function FormPage() {
  const [formInput, setFormInput] = useState({
    fName: '',
    lName: '',
    gender: 'male',
    nationality: '',
    phone: '',
    email: '',
    address: '',
    dob: new Date(),
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
        value: nations[key].name,
      });
    });
  };

  countriesList();

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const [error, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Error Handling
    const formErrors = {};
    // Required Error handling
    if (!formInput.fName) {
      formErrors.fName = 'First name is required!';
    }
    if (!formInput.lName) {
      formErrors.lName = 'Last name is required!';
    }
    if (!formInput.phone.match('[0-9]{10}')) {
      formErrors.phone = 'Phone is invalid!';
    }
    if (!formInput.phone) {
      formErrors.phone = 'Phone is required!';
    }
    if (!isValidEmail(formInput.email)) {
      formErrors.email = 'Email is invalid!';
    }
    if (!formInput.email) {
      formErrors.email = 'Email is required!';
    }
    if (!formInput.address) {
      formErrors.address = 'Address is required!';
    }
    if (!formInput.nationality) {
      formErrors.nationality = 'Nationality is required!';
    }
    if (!formInput.eduBackground) {
      formErrors.eduBackground = 'Education background is required!';
    }

    setErrors(formErrors);

    // No Error in form and submission
    if (Object.keys(formErrors).length === 0) {
      setFormInput({
        fName: '',
        lName: '',
        gender: 'male',
        nationality: '',
        phone: '',
        email: '',
        address: '',
        dob: new Date(),
        eduBackground: '',
      });
      console.log('Submitted Form:', formInput);
      toast.success('Form Submitted successfully!');
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
      // Condition Specifically for Select Component or If returns only value
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

  const handleDatePicker = (e) => {
    setFormInput((prevState) => ({
      ...prevState,
      dob: e,
    }));
    setErrors((prevState) => ({
      ...prevState,
      dob: new Date(),
    }));
  };

  return (
    <div className="form__wrapper">
      <form onSubmit={handleSubmit}>
        <TextField
          name="fName"
          label="First Name"
          handleChange={handleChange}
          value={formInput.fName}
          error={error.fName}
        />
        <TextField
          name="lName"
          label="Last Name"
          handleChange={handleChange}
          value={formInput.lName}
          error={error.lName}
        />
        <TextField
          name="phone"
          label="Contact No"
          handleChange={handleChange}
          value={formInput.phone}
          error={error.phone}
        />
        <TextField
          name="email"
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
          label="Gender:"
        />

        <Select
          options={nationalityOptions}
          value={formInput.nationality}
          handleChange={handleChange}
          error={error.nationality}
          placeholder="Nationality"
        />

        <DatePicker
          name="dob"
          label="Date of Birth:"
          selected={formInput.dob}
          handleDatePicker={handleDatePicker}
          maxDate={new Date()}
        />

        <TextField
          name="address"
          label="Address"
          handleChange={handleChange}
          value={formInput.address}
          error={error.address}
        />

        <TextArea
          name="eduBackground"
          label="Education background"
          handleChange={handleChange}
          value={formInput.eduBackground}
          error={error.eduBackground}
        />

        <input className="submit__btn" type="submit" value="Submit Form" />
      </form>

      <ToastContainer />
    </div>
  );
}

export default FormPage;
