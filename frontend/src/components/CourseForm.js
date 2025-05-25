import React, { useState } from 'react';
import API from '../api/api';

function CourseForm({ existingCourse, onSuccess }) {
  const [code, setCode] = useState(existingCourse ? existingCourse.code : '');
  const [title, setTitle] = useState(existingCourse ? existingCourse.title : '');
  const [department, setDepartment] = useState(existingCourse ? existingCourse.department : '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (existingCourse) {
        await API.put(`/courses/${existingCourse._id}`, { code, title, department });
      } else {
        await API.post('/courses', { code, title, department });
      }
      onSuccess();
    } catch (error) {
      console.error(error);
      alert('Failed to save course.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Code:</label>
        <input value={code} onChange={e => setCode(e.target.value)} required />
      </div>
      <div>
        <label>Title:</label>
        <input value={title} onChange={e => setTitle(e.target.value)} required />
      </div>
      <div>
        <label>Department:</label>
        <input value={department} onChange={e => setDepartment(e.target.value)} />
      </div>
      <button type="submit">{existingCourse ? 'Update' : 'Add'} Course</button>
    </form>
  );
}

export default CourseForm;
