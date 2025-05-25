import React from 'react';

function Home() {
  return (
    <div style={styles.container}>
      <h1>Welcome to Academic Scheduler System</h1>
      <p>Please log in or register to manage academic schedules.</p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '40px'
  }
};

export default Home;
