import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';

const StudentTimetable = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchTimetable = async () => {
      try {
        const res = await axios.get('/api/timetable');
        const formatted = res.data.map(event => ({
          title: `${event.moduleName} (${event.courseName})`,
          start: `${event.date}T${event.time}`, // date + time
          end: `${event.date}T${addOneHour(event.time)}`,
          extendedProps: {
            classroom: event.classroom,
          },
        }));
        setEvents(formatted);
      } catch (err) {
        console.error('Error fetching timetable:', err);
      }
    };

    fetchTimetable();
  }, []);

  const addOneHour = (timeStr) => {
    const [hours, minutes] = timeStr.split(':').map(Number);
    const date = new Date();
    date.setHours(hours + 1, minutes);
    return date.toTimeString().slice(0, 5);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Timetable</h1>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        allDaySlot={false}
        slotMinTime="08:00:00"
        slotMaxTime="18:00:00"
        events={events}
        height="auto"
        eventColor="#3b82f6"
        eventContent={(arg) => (
          <>
            <b>{arg.timeText}</b>
            <br />
            <i>{arg.event.title}</i>
            <br />
            <small>Room: {arg.event.extendedProps.classroom}</small>
          </>
        )}
      />
    </div>
  );
};

export default StudentTimetable;
