import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FacultyForm = ({ selectedFaculty, onSuccess, onCancel }) => {
  const [name, setName] = useState('');

  useEffect(() => {
    if (selectedFaculty) {
      setName(selectedFaculty.name);
    }
  }, [selectedFaculty]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (selectedFaculty) {
        await axios.put(`/api/faculty/${selectedFaculty._id}`, { name });
      } else {
        await axios.post('/api/faculty', { name });
      }
      onSuccess();
      setName('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-2">{selectedFaculty ? 'Edit Faculty' : 'Add Faculty'}</h2>
      <input
        className="border p-2 w-full mb-3"
        placeholder="Faculty Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <div className="flex gap-2">
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          {selectedFaculty ? 'Update' : 'Add'}
        </button>
        {selectedFaculty && (
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-300 text-black px-4 py-2 rounded"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default FacultyForm;
