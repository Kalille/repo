import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



function Scheduler() {
  const localizer = momentLocalizer(moment);
   const [events, setEvents] = useState([]);
 const [selectedSlot, setSelectedSlot] = useState('null');
 
  const [newEvent, setNewEvent] = useState({
     title: '',
    start: null,
    end: null,
   });

  const handleEventSelect = (newEvent) => {
    //  Handle event selection (e.g., delete or update)
    //  console.log('Selected Event:', newEvent);
   };

   const handleSlotSelect = (slotInfo) => {
//     // Handle slot selection (e.g., create new appointment)
     setSelectedSlot(slotInfo);
  };

  const handleDateChange = (date, field) => {
    setNewEvent({
      ...newEvent,
      [field]: date,
    });
  };

  const handleAppointmentSubmit = () => {
    if (newEvent.title && newEvent.start && newEvent.end) {
      setEvents([...events, newEvent]);
      setNewEvent({ title: '', start: null, end: null });
      setSelectedSlot(null);
    }
  };

  useEffect(() => {
    // Fetch and set events data here
    // Replace the following line with your actual data fetching logic
    const fetchedEvents = [
      // Example event data, replace with your own
      {
        title: 'Meeting',
        start: new Date(2023, 8, 15, 10, 0),
        end: new Date(2023, 8, 15, 11, 0),
      },
      {
        title: 'Appointment',
        start: new Date(2023, 8, 16, 14, 0),
        end: new Date(2023, 8, 16, 15, 0),
      },
    ];

    setEvents(fetchedEvents);

    console.log('Events:', fetchedEvents);
  }, []); // Make sure to provide an empty dependency array to run this effect only once

  return (
     <div>
      <h1>Appointment Scheduler</h1>
      <Calendar
      
        views={["month", "week", "day"]}
        localizer={localizer}
        events={events}
         startAccessor="start"
        endAccessor="end"
         onSelectEvent={handleEventSelect}
        onSelectSlot={handleSlotSelect}
        selectable
         defaultView="week"
       />
   
      {selectedSlot && (
         <div>
        <h2>New Appointment</h2>
          <form>
             <div>
              <label>Title:</label>
              <input
               type="text"
               value={newEvent?.title}
               onChange={(e) =>
                 handleDateChange(e.target.value, 'title')
                }
              />
            </div>
            <div>
             <label>Start Date & Time:</label>
              <DatePicker
                selected={newEvent?.start}
              onChange={(date) => handleDateChange(date, 'start')}
              showTimeSelect
                 dateFormat="MMMM d, yyyy h:mm aa"               />
           </div>
           <div>
             <label>End Date & Time:</label>
              <DatePicker
                 selected={newEvent?.end}
                 onChange={(date) => handleDateChange(date, 'end')}
                 showTimeSelect
                 dateFormat="MMMM d, yyyy h:mm aa"
               />
             </div>
             <button type="button" onClick={handleAppointmentSubmit}>
               Save Appointment
             </button>
           </form>
         </div>
       )}
     </div>
  );
}

export default Scheduler;

