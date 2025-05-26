import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FacultyForm from './FacultyForm';

const FacultyList = () => {
  const [faculties, setFaculties] = useState([]);
  const [selectedFaculty, setSelectedFaculty] = useState(null);

  const fetchFaculties = async () => {
    try {
      const res = await axios.get('/api/faculty');
      setFaculties(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this faculty?')) {
      try {
        await axios.delete(`/api/faculty/${id}`);
        fetchFaculties();
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleSuccess = () => {
    setSelectedFaculty(null);
    fetchFaculties();
  };

  useEffect(() => {
    fetchFaculties();
  }, []);

  return (
    <div className="p-6">
      <FacultyForm
        selectedFaculty={selectedFaculty}
        onSuccess={handleSuccess}
        onCancel={() => setSelectedFaculty(null)}
      />
      <h2 className="text-2xl font-semibold mt-6 mb-4">Faculty List</h2>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Name</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {faculties.map((faculty) => (
            <tr key={faculty._id}>
              <td className="border p-2">{faculty.name}</td>
              <td className="border p-2">
                <button
                  onClick={() => setSelectedFaculty(faculty)}
                  className="bg-yellow-400 text-white px-3 py-1 mr-2 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(faculty._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FacultyList;
