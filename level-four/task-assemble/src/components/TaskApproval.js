

export default function TaskApproval(props) {

    const secondIframeStyles = {
        background: 'transparent',
        border: '1px solid #ccc',
      };
    

    return(
        <>
            <iframe
                className="airtable-embed"
                src="https://airtable.com/embed/shrefWDhvhXacUcAJ?backgroundColor=teal"
                frameBorder="0"
                onWheel=""
                width="100%"
                height= "600px"
                style={secondIframeStyles}>
            </iframe>
        </>

    )
    
}