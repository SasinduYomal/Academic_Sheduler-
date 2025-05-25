import React from 'react';
import './Home.css';

function Home() {
  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={styles.heroBox}>
        <h1 style={styles.title}>Welcome to the Academic Scheduler System</h1>
        <p style={styles.subtitle}>
          Please log in or register to manage academic schedules.
        </p>
      </div>

      {/* About Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>About Us</h2>
        <p style={styles.sectionText}>
          The Academic Scheduler System is designed to streamline course and faculty scheduling, ensuring every student and instructor stays on track. Built for universities and colleges, our platform brings clarity and efficiency to academic planning.
        </p>
      </section>

      {/* Features Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>What You Can Do</h2>
        <div style={styles.features}>
          <div style={styles.featureCard}>
            <h3 style={styles.featureTitle}>📅 Schedule Classes</h3>
            <p style={styles.featureText}>Easily view and organize your academic schedule.</p>
          </div>
          <div style={styles.featureCard}>
            <h3 style={styles.featureTitle}>👨‍🏫 Faculty Management</h3>
            <p style={styles.featureText}>Faculty can manage their classes and availability.</p>
          </div>
          <div style={styles.featureCard}>
            <h3 style={styles.featureTitle}>🔐 Role-Based Access</h3>
            <p style={styles.featureText}>Students, faculty, and admins see personalized content.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={styles.sectionAlt}>
        <h2 style={styles.sectionTitle}>Testimonials</h2>
        <div style={styles.testimonials}>
          <div style={styles.testimonialCard}>
            <p>"This platform made scheduling my semester stress-free!"</p>
            <span>- A Student</span>
          </div>
          <div style={styles.testimonialCard}>
            <p>"Our department now spends less time on logistics."</p>
            <span>- Faculty Member</span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Contact Us</h2>
        <p style={styles.sectionText}>Have questions? Reach out at <a href="mailto:support@academicscheduler.com" style={styles.link}>support@academicscheduler.com</a></p>
      </section>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    background: 'linear-gradient(to right, #007bff, #00c6ff)',
    minHeight: '100vh',
    paddingBottom: '60px'
  },
  heroBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    margin: '0 auto',
    marginTop: '60px',
    padding: '50px',
    borderRadius: '20px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
    maxWidth: '700px',
    textAlign: 'center',
    animation: 'fadeSlide 1s ease-in-out'
  },
  title: {
    fontSize: '2.8rem',
    color: '#007bff',
    marginBottom: '20px'
  },
  subtitle: {
    fontSize: '1.3rem',
    color: '#333'
  },
  section: {
    marginTop: '60px',
    padding: '40px 20px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9'
  },
  sectionAlt: {
    marginTop: '60px',
    padding: '40px 20px',
    textAlign: 'center',
    backgroundColor: '#fff'
  },
  sectionTitle: {
    fontSize: '2rem',
    color: '#007bff',
    marginBottom: '20px'
  },
  sectionText: {
    fontSize: '1.1rem',
    maxWidth: '700px',
    margin: '0 auto',
    color: '#333'
  },
  link: {
    color: '#0056b3',
    textDecoration: 'underline'
  },
  features: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '20px',
    marginTop: '30px'
  },
  featureCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: '25px',
    borderRadius: '15px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.15)',
    width: '280px',
    animation: 'slideUp 1s ease-in-out'
  },
  featureTitle: {
    color: '#007bff',
    fontSize: '1.2rem',
    marginBottom: '10px'
  },
  featureText: {
    fontSize: '1rem',
    color: '#444'
  },
  testimonials: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '20px',
    marginTop: '30px'
  },
  testimonialCard: {
    backgroundColor: '#eef6ff',
    padding: '20px',
    borderRadius: '10px',
    width: '300px',
    fontStyle: 'italic',
    color: '#333',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
  }
};

export default Home;
