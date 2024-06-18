import React, { useState } from 'react';
import styles from './Signup.module.css';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'confirmPassword':
        setConfirmPassword(value);
        break;
      default:
        break;
    }
  };

  const handleReset = () => {
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setName('');
    }


  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    try {
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, name }),
      });
      const data = await response.json();
      handleReset();
      if (data.error) {
        setError(data.error);
      } else {
        setError('');
        alert('User created successfully');
      }
    } catch (error) {
      setError('Failed to create account');
      console.error('Error:', error);
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
          <div className={styles.card}>
              <div className={styles.content}>
                  <h1 className={styles.title}>Create an account</h1>
                  <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.inputGroup}>
                          <label htmlFor="name">Your Name</label>
                          <input type="name" name="name" id="name" required value={name} onChange={handleChange} />
                      </div>
                      <div className={styles.inputGroup}>
                          <label htmlFor="email">Your email</label>
                          <input type="email" name="email" id="email" required value={email} onChange={handleChange} />
                      </div>
                      <div className={styles.inputGroup}>
                          <label htmlFor="password">Password</label>
                          <input type="password" name="password" id="password" required value={password} onChange={handleChange} />
                      </div>
                      <div className={styles.inputGroup}>
                          <label htmlFor="confirmPassword">Confirm password</label>
                          <input type="password" name="confirmPassword" id="confirmPassword" required value={confirmPassword} onChange={handleChange} />
                      </div>
                      <div className={styles.checkboxGroup}>
                        <label>
                          <input type="checkbox" required /> I accept the <a href="#">Terms and Conditions</a>
                        </label>
                      </div>
                      {error && <p className={styles.error}>{error}</p>}
                      <button type="submit" className={styles.submitButton}>Create an account</button>
                      <p className={styles.loginPrompt}>
                          Already have an account? <a href="#">Login here</a>
                      </p>
                  </form>
              </div>
          </div>
      </div>
    </section>
  );
}

export default Signup;
