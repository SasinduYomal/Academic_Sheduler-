import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ScheduleForm() {
  const [formData, setFormData] = useState({
    course: '',
    faculty: '',
    classroom: '',
    day: '',
    startTime: '',
    endTime: '',
  });

  const [courses, setCourses] = useState([]);
  const [faculty, setFaculty] = useState([]);
  const [classrooms, setClassrooms] = useState([]);

  useEffect(() => {
    axios.get('/api/courses').then((res) => setCourses(res.data));
    axios.get('/api/faculty').then((res) => setFaculty(res.data));
    axios.get('/api/classrooms').then((res) => setClassrooms(res.data));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/schedules', formData);
      alert('Schedule added successfully!');
      setFormData({ course: '', faculty: '', classroom: '', day: '', startTime: '', endTime: '' });
    } catch (err) {
      alert('Error: ' + err.response?.data?.error || err.message);
    }
  };

  return (
    <div>
      <h2>Add Class Schedule</h2>
      <form onSubmit={handleSubmit}>
        <select name="course" value={formData.course} onChange={handleChange} required>
          <option value="">Select Course</option>
          {courses.map((c) => (
            <option key={c._id} value={c._id}>{c.name}</option>
          ))}
        </select>
        <select name="faculty" value={formData.faculty} onChange={handleChange} required>
          <option value="">Select Faculty</option>
          {faculty.map((f) => (
            <option key={f._id} value={f._id}>{f.name}</option>
          ))}
        </select>
        <select name="classroom" value={formData.classroom} onChange={handleChange} required>
          <option value="">Select Classroom</option>
          {classrooms.map((cl) => (
            <option key={cl._id} value={cl._id}>{cl.name}</option>
          ))}
        </select>
        <select name="day" value={formData.day} onChange={handleChange} required>
          <option value="">Select Day</option>
          {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
            <option key={day} value={day}>{day}</option>
          ))}
        </select>
        <input type="time" name="startTime" value={formData.startTime} onChange={handleChange} required />
        <input type="time" name="endTime" value={formData.endTime} onChange={handleChange} required />
        <button type="submit">Add Schedule</button>
      </form>
    </div>
  );
}

export default ScheduleForm;
