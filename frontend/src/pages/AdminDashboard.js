import React from 'react';
import CourseList from '../components/CourseList';

import ClassroomList from '../components/ClassroomList';

const AdminDashboard = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <CourseList />
      <ModuleList />
      <ClassroomList />
    </div>
  );
};

export default AdminDashboard;
