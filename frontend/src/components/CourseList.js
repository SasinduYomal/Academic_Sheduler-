import React, { useEffect, useState } from 'react';
import API from '../api/api';

function CourseList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    API.get('/courses')
      .then(res => setCourses(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Courses</h2>
      <ul>
        {courses.map(course => (
          <li key={course._id}>{course.code} - {course.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default CourseList;
