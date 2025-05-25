import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CourseList from './components/CourseList';
import CourseForm from './components/CourseForm';
import Register from './pages/Register';
import Home from './pages/Home';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import ScheduleList from './components/ScheduleList';

const getUserRole = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return user ? user.role : null;
};

function App() {
  const role = getUserRole();

  return (
    <Router>
      <Navbar role={role} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/courses" element={<CourseList />} />
        <Route path="/courses/add" element={<CourseForm />} />
        <Route path="/courses/edit/:id" element={<CourseForm />} />
        <Route path="/schedules" element={<ScheduleList />} />
        {/* Add more role-specific pages */}
      </Routes>
    </Router>
  );
}

export default App;
