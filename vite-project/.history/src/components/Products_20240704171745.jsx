import React, { useState, useEffect } from 'react';
import './styles.css'; // Make sure to import the CSS file

const SignUpForm = () => {
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dateOfBirth: '',
    gender: '',
    location: '',
    age: '',
    password: '',
    confirmPassword: '',
    image: null,
    cnic: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormValues({
        ...formValues,
        image: files[0],
      });
    } else {
      setFormValues({
        ...formValues,
        [name]: value,
      });
    }
  };

  const validate = (values) => {
    let errors = {};

    if (!values.firstName) {
      errors.firstName = 'First Name is required';
    }
    if (!values.lastName) {
      errors.lastName = 'Last Name is required';
    }
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.dateOfBirth) {
      errors.dateOfBirth = 'Date of Birth is required';
    }
    if (!values.gender) {
      errors.gender = 'Gender is required';
    }
    if (!values.location) {
      errors.location = 'Location is required';
    }
    if (!values.age) {
      errors.age = 'Age is required';
    } else if (!/^\d+$/.test(values.age)) {
      errors.age = 'Age must be a number';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = 'Confirm Password is required';
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = 'Passwords must match';
    }
    if (!values.image) {
      errors.image = 'Image is required';
    }
    if (!values.cnic) {
      errors.cnic = 'CNIC is required';
    } else if (!/^\d{5}-\d{7}-\d$/.test(values.cnic)) {
      errors.cnic = 'CNIC must be in the format: XXXXX-XXXXXXX-X';
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(formValues));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      console.log(formValues);
      setIsSubmitting(false);
    }
  }, [errors]);

  const pakistaniCities = [
    'Karachi',
    'Lahore',
    'Islamabad',
    'Rawalpindi',
    'Faisalabad',
    'Multan',
    'Peshawar',
    'Quetta',
    'Gujranwala',
    'Sialkot',
  ];

  return (
    <form onSubmit={handleSubmit} className="container mt-5 form-background">
      <div className="form-group mb-3">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
          value={formValues.firstName}
          onChange={handleChange}
        />
        {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
      </div>

      <div className="form-group mb-3">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
          value={formValues.lastName}
          onChange={handleChange}
        />
        {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
      </div>

      <div className="form-group mb-3">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          value={formValues.email}
          onChange={handleChange}
        />
        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
      </div>

      <div className="form-group mb-3">
        <label htmlFor="dateOfBirth">Date of Birth</label>
        <input
          type="date"
          id="dateOfBirth"
          name="dateOfBirth"
          className={`form-control ${errors.dateOfBirth ? 'is-invalid' : ''}`}
          value={formValues.dateOfBirth}
          onChange={handleChange}
        />
        {errors.dateOfBirth && <div className="invalid-feedback">{errors.dateOfBirth}</div>}
      </div>

      <div className="form-group mb-3">
        <label htmlFor="gender">Gender</label>
        <select
          id="gender"
          name="gender"
          className={`form-control ${errors.gender ? 'is-invalid' : ''}`}
          value={formValues.gender}
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {errors.gender && <div className="invalid-feedback">{errors.gender}</div>}
      </div>

      <div className="form-group mb-3">
        <label htmlFor="location">Location</label>
        <select
          id="location"
          name="location"
          className={`form-control ${errors.location ? 'is-invalid' : ''}`}
          value={formValues.location}
          onChange={handleChange}
        >
          <option value="">Select City</option>
          {pakistaniCities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
        {errors.location && <div className="invalid-feedback">{errors.location}</div>}
      </div>

      <div className="form-group mb-3">
        <label htmlFor="age">Age</label>
        <input
          type="text"
          id="age"
          name="age"
          className={`form-control ${errors.age ? 'is-invalid' : ''}`}
          value={formValues.age}
          onChange={handleChange}
        />
        {errors.age && <div className="invalid-feedback">{errors.age}</div>}
      </div>

      <div className="form-group mb-3">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          className={`form-control ${errors.password ? 'is-invalid' : ''}`}
          value={formValues.password}
          onChange={handleChange}
        />
        {errors.password && <div className="invalid-feedback">{errors.password}</div>}
      </div>

      <div className="form-group mb-3">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
          value={formValues.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
      </div>

      <div className="form-group mb-3">
        <label htmlFor="image">Image</label>
        <input
          type="file"
          id="image"
          name="image"
          className={`form-control ${errors.image ? 'is-invalid' : ''}`}
          onChange={handleChange}
        />
        {errors.image && <div className="invalid-feedback">{errors.image}</div>}
      </div>

      <div className="form-group mb-3">
        <label htmlFor="cnic">CNIC</label>
        <input
          type="text"
          id="cnic"
          name="cnic"
          className={`form-control ${errors.cnic ? 'is-invalid' : ''}`}
          value={formValues.cnic}
          onChange={handleChange}
        />
        {errors.cnic && <div className="invalid-feedback">{errors.cnic}</div>}
      </div>

      <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm;
