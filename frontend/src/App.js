import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminDashboard from './pages/AdminDashboard';
import StudentDashboard from './pages/StudentDashboard';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/admin"
            element={
              <PrivateRoute allowedRoles={['admin']}>
                <AdminDashboard />
              </PrivateRoute>
            }
          />

          <Route
  path="/student/dashboard"
  element={<ProtectedRoute role="student"><StudentDashboard /></ProtectedRoute>}
/>
        </Routes>
        <Route
  path="/student/timetable"
  element={<ProtectedRoute role="student"><StudentTimetable /></ProtectedRoute>}
/>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
