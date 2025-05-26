import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentDashboard = () => {
  const [faculties, setFaculties] = useState([]);
  const [courses, setCourses] = useState([]);
  const [modules, setModules] = useState([]);
  const [timetable, setTimetable] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [facRes, courseRes, modRes, timeRes] = await Promise.all([
          axios.get('/api/faculties'),
          axios.get('/api/courses'),
          axios.get('/api/modules'),
          axios.get('/api/timetable'),
        ]);
        setFaculties(facRes.data);
        setCourses(courseRes.data);
        setModules(modRes.data);
        setTimetable(timeRes.data);
      } catch (err) {
        console.error('Error fetching student data:', err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Student Dashboard</h1>

      {/* Faculties Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Faculties</h2>
        <ul className="list-disc list-inside">
          {faculties.map(f => <li key={f._id}>{f.name}</li>)}
        </ul>
      </section>

      {/* Courses Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Courses</h2>
        <ul className="list-disc list-inside">
          {courses.map(c => (
            <li key={c._id}>
              {c.name} – {c.code}
            </li>
          ))}
        </ul>
      </section>

      {/* Modules Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Modules</h2>
        <ul className="list-disc list-inside">
          {modules.map(m => (
            <li key={m._id}>
              {m.name} ({m.code})
            </li>
          ))}
        </ul>
      </section>

      {/* Timetable Section */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Timetable</h2>
        <table className="w-full table-auto border">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-2 py-1">Course</th>
              <th className="border px-2 py-1">Module</th>
              <th className="border px-2 py-1">Date</th>
              <th className="border px-2 py-1">Time</th>
              <th className="border px-2 py-1">Classroom</th>
            </tr>
          </thead>
          <tbody>
            {timetable.map(item => (
              <tr key={item._id}>
                <td className="border px-2 py-1">{item.courseName}</td>
                <td className="border px-2 py-1">{item.moduleName}</td>
                <td className="border px-2 py-1">{item.date}</td>
                <td className="border px-2 py-1">{item.time}</td>
                <td className="border px-2 py-1">{item.classroom}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default StudentDashboard;
