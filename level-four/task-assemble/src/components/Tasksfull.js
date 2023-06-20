export default function Tasksfull() {
    const iframeStyles = {
      background: 'transparent',
      border: '1px solid #ccc',
    };

    return (
      <>
        <iframe
          className="airtable-embed"
          src="https://airtable.com/embed/shrxIOlErwsusQNcL?backgroundColor=teal&viewControls=on"
          frameBorder="0"
          onWheel=""
          width="100%"
          height="533"
          style={iframeStyles}
        ></iframe>
      </>
    );
  }
  