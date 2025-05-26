import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CourseForm = ({ selectedCourse, onSuccess, onCancel }) => {
  const [name, setName] = useState('');

  useEffect(() => {
    if (selectedCourse) {
      setName(selectedCourse.name);
    }
  }, [selectedCourse]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (selectedCourse) {
        await axios.put(`/api/course/${selectedCourse._id}`, { name });
      } else {
        await axios.post('/api/course', { name });
      }
      setName('');
      onSuccess();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-2">{selectedCourse ? 'Edit Course' : 'Add Course'}</h2>
      <input
        className="border p-2 w-full mb-3"
        placeholder="Course Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <div className="flex gap-2">
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          {selectedCourse ? 'Update' : 'Add'}
        </button>
        {selectedCourse && (
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

export default CourseForm;
