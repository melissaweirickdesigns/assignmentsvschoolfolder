export default function CalendarFull() {
    const iframeStyles = {
      border: '0',
      margin: '50px'
    };
  
    return (
      <>
        <iframe
          src="https://calendar.google.com/calendar/embed?src=melissaweirickdesigns%40gmail.com&ctz=America%2FDenver"
          style={iframeStyles}
          width="800"
          height="600"
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </>
    );
  }
  