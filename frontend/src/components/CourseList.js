import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CourseForm from './CourseForm';

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const fetchCourses = async () => {
    try {
      const res = await axios.get('/api/course');
      setCourses(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Delete this course?')) {
      await axios.delete(`/api/course/${id}`);
      fetchCourses();
    }
  };

  const handleSuccess = () => {
    setSelectedCourse(null);
    fetchCourses();
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="p-6">
      <CourseForm selectedCourse={selectedCourse} onSuccess={handleSuccess} onCancel={() => setSelectedCourse(null)} />
      <h2 className="text-2xl font-semibold mt-6 mb-4">Course List</h2>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Name</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course._id}>
              <td className="border p-2">{course.name}</td>
              <td className="border p-2">
                <button onClick={() => setSelectedCourse(course)} className="bg-yellow-400 text-white px-3 py-1 mr-2 rounded">Edit</button>
                <button onClick={() => handleDelete(course._id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseList;
