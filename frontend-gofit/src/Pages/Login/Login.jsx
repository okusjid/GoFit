import React, { useState } from 'react';
import styles from './Login.module.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleReset = () => {
    setEmail('');
    setPassword('');
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (data.error) {
        setError(data.error);
      } else {
        setError('');
        handleReset();
        alert('Login successful');
        // Redirect user or perform further actions
      }
    } catch (error) {
      setError('Failed to login');
      handleReset();
      console.error('Error:', error);
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.content}>
            <h1 className={styles.title}>LOGIN</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <label htmlFor="email">Your email</label>
                <input type="email" name="email" id="email" required value={email} onChange={handleChange} />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" required value={password} onChange={handleChange} />
              </div>
              
              {error && <p className={styles.error}>{error}</p>}
              <button type="submit" className={styles.submitButton}>Login to your account</button>
              <p className={styles.loginPrompt}>
                Create have an account? <a href="#">Sign up here</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
