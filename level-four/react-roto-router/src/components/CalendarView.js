import React, { useEffect } from 'react';
import $ from 'jquery';
import 'evo-calendar';
import '../evo-calendar.orange-coral.css';
import '../evo-calendar.css'

export default function CalendarView() {

    //https://edlynvillegas.github.io/evo-calendar/
  
    useEffect(() => {
    $('#calendar').evoCalendar({
        theme: 'Orange Coral',
        todayHighlight: 'true'
    })
  }, []);

  return (
    <div className="main-container">
        <h1>Upcoming Schedule</h1>
      <div id="calendar"></div>
    </div>
  );
}
