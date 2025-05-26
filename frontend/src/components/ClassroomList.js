import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ClassroomForm from './ClassroomForm';

const ClassroomList = () => {
  const [classrooms, setClassrooms] = useState([]);
  const [selectedClassroom, setSelectedClassroom] = useState(null);

  const fetchClassrooms = async () => {
    try {
      const res = await axios.get('/api/classrooms');
      setClassrooms(res.data);
    } catch (err) {
      console.error('Error fetching classrooms:', err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this classroom?')) {
      await axios.delete(`/api/classrooms/${id}`);
      fetchClassrooms();
    }
  };

  useEffect(() => {
    fetchClassrooms();
  }, []);

  return (
    <div className="p-6">
      <ClassroomForm selectedClassroom={selectedClassroom} onSuccess={() => { fetchClassrooms(); setSelectedClassroom(null); }} onCancel={() => setSelectedClassroom(null)} />
      <h2 className="text-2xl font-semibold mt-6 mb-4">Classroom List</h2>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Name</th>
            <th className="border p-2">Location</th>
            <th className="border p-2">Capacity</th>
            <th className="border p-2">Resources</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {classrooms.map(c => (
            <tr key={c._id}>
              <td className="border p-2">{c.name}</td>
              <td className="border p-2">{c.location}</td>
              <td className="border p-2">{c.capacity}</td>
              <td className="border p-2">{c.resources?.join(', ')}</td>
              <td className="border p-2">
                <button className="btn-warning mr-2" onClick={() => setSelectedClassroom(c)}>Edit</button>
                <button className="btn-danger" onClick={() => handleDelete(c._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClassroomList;
