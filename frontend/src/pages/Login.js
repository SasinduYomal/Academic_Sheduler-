import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // import Link here

function Login() {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('student');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const fakeToken = 'sample_jwt_token_123';
    const user = { email, role, token: fakeToken };
    localStorage.setItem('user', JSON.stringify(user));
    navigate('/');
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleLogin} style={styles.form}>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <select value={role} onChange={(e) => setRole(e.target.value)} style={styles.input}>
          <option value="student">Student</option>
          <option value="faculty">Faculty</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit" style={styles.button}>Login</button>
      </form>

      {/* Registration link */}
      <p style={{ marginTop: '20px' }}>
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
}

const styles = {
  container: {
    padding: '40px',
    textAlign: 'center'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    maxWidth: '300px',
    margin: 'auto'
  },
  input: {
    padding: '10px',
    fontSize: '16px'
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none'
  }
};

export default Login;
