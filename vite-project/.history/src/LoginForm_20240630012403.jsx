import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform validation or authentication logic here
    if (email.trim() === '' || password.trim() === '') {
      setErrorMessage('Please enter your email and password.');
    } else {
      // Clear error message if valid
      setErrorMessage('');
      // Simulate login logic (replace with actual authentication)
      console.log('Logging in with:', { email, password });
      // Clear form fields after submission
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="mb-4">Login</h2>
          {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-outline-dark ms-2">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
