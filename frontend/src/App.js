import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CourseList from './components/CourseList';
import CourseForm from './components/CourseForm';
import Register from './pages/Register';
import Login from './pages/Login'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import { AuthContext } from './context/AuthContext'; // <- Import the context

// Dummy components
const FacultyDashboard = () => <h2>Faculty Dashboard</h2>;
const AdminPanel = () => <h2>Admin Panel</h2>;
const StudentSchedule = () => <h2>Student Schedule</h2>;

function App() {
  const { role } = useContext(AuthContext); // <- Get dynamic role

  return (
    <Router>
      <Navbar role={role} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Public */}
        <Route path="/courses" element={<CourseList />} />
        <Route path="/courses/add" element={<CourseForm />} />
        <Route path="/courses/edit/:id" element={<CourseForm />} />

        {/* Private by role */}
        <Route
          path="/faculty"
          element={
            <PrivateRoute allowedRoles={['faculty']}>
              <FacultyDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <PrivateRoute allowedRoles={['admin']}>
              <AdminPanel />
            </PrivateRoute>
          }
        />
        <Route
          path="/schedule"
          element={
            <PrivateRoute allowedRoles={['student']}>
              <StudentSchedule />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
