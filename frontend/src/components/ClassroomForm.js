import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ClassroomForm = ({ selectedClassroom, onSuccess, onCancel }) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [capacity, setCapacity] = useState('');
  const [resources, setResources] = useState('');

  useEffect(() => {
    if (selectedClassroom) {
      setName(selectedClassroom.name);
      setLocation(selectedClassroom.location);
      setCapacity(selectedClassroom.capacity);
      setResources(selectedClassroom.resources?.join(', ') || '');
    }
  }, [selectedClassroom]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const classroomData = {
      name,
      location,
      capacity: Number(capacity),
      resources: resources.split(',').map(r => r.trim())
    };

    try {
      if (selectedClassroom) {
        await axios.put(`/api/classrooms/${selectedClassroom._id}`, classroomData);
      } else {
        await axios.post('/api/classrooms', classroomData);
      }
      onSuccess();
    } catch (err) {
      console.error('Error saving classroom:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md">
      <h2 className="text-xl font-semibold mb-3">{selectedClassroom ? 'Edit' : 'Add'} Classroom</h2>
      <input className="input mb-2" placeholder="Classroom Name" value={name} onChange={e => setName(e.target.value)} required />
      <input className="input mb-2" placeholder="Location" value={location} onChange={e => setLocation(e.target.value)} required />
      <input type="number" className="input mb-2" placeholder="Capacity" value={capacity} onChange={e => setCapacity(e.target.value)} required />
      <input className="input mb-3" placeholder="Resources (comma-separated)" value={resources} onChange={e => setResources(e.target.value)} />
      <div className="flex gap-2">
        <button className="btn-primary" type="submit">{selectedClassroom ? 'Update' : 'Add'}</button>
        {selectedClassroom && (
          <button className="btn-secondary" onClick={onCancel} type="button">Cancel</button>
        )}
      </div>
    </form>
  );
};

export default ClassroomForm;
