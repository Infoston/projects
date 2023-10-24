import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
const Registration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname:'',
    
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegistration = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(formData);
  
    localStorage.setItem('users', JSON.stringify(users));
    alert("You have been registered successfully");
    navigate("/login")
  };

  return (
    <div>
      <h2>Registration</h2>
      <label htmlFor="firstName">First Name: </label>
      <input type='text' id='firstName' name='firstname' onChange={handleInputChange} /><br/>
      <label htmlFor="username">User Name: </label>
      <input
        type="text"
        name="username"
        
        value={formData.username}
        onChange={handleInputChange}
      /><br/>
      <label htmlFor="password">Pass  Word: </label>
      <input
        type="password"
        name="password"
       
        value={formData.password}
        onChange={handleInputChange}
      /><br/>
      <button onClick={handleRegistration}>Register</button>
      {/* <button >Already Have an Account Please click here to Login</button>
      navigate("/login") */}
    </div>
  
  );
};

export default Registration;
