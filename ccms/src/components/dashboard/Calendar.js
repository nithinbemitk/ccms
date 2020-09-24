import React from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import './custom.css'


// import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";

function Calendar() {
    const events = [{ title: "Nithin Birthday", date: '2020-09-23' }, { title: "KP Birthday", date: '2020-09-11' }];

    return (
        <div >
            <FullCalendar
                defaultView="dayGridMonth"
                plugins={[dayGridPlugin]}
                events={events}
            />
        </div>
    );
}

export default Calendar;
