import React from 'react';
import { Link } from 'react-router-dom';

export default function Calendarpreview() {
  return (
    <>
      <div className="calendar-preview-section">
        <h3>Calendar Preview
        <Link to="/calendar">
          <button>Go to Calendar</button>
        </Link>
        </h3>
        <div className="nextthreecalendarview">
          <h4>Level 4 Assessment</h4>
          <h5>Make sure to turn in all your assignments into git</h5>
          <h6>- 6/20/2023 4:00 PM Mountain Time</h6>
        </div>
        <div className="nextthreecalendarview">
          <h4>Level 5 Start</h4>
          <h5>Lets get going with completing level 5</h5>
          <h6>- 6/21/2023 4:00 PM Mountain Time</h6>
        </div>
        <div className="nextthreecalendarview">
          <h4>Final Day of work before Weekend</h4>
          <h5>Remember to get approval for Friday time off for dumpster removal</h5>
          <h6>- 6/22/2023 4:00 PM Mountain Time</h6>
        </div>
        
      </div>
    </>
  );
}
