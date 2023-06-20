import emailjs from 'emailjs-com';

export default function TechSupport(props) {

    function sendEmail(e) {
        e.preventDefault();
      
        const serviceID = 'service_ewavj19';
        const templateID = 'template_7f7o9i8';
      
        const templateParams = {
          fname: e.target.fname.value,
          lname: e.target.lname.value,
          email: e.target.email.value,
          message: e.target.message.value,
        };
      
        const userID = 'T8sA4laONCJsfRyct';
      
        emailjs.sendForm(serviceID, templateID, e.target, userID)
          .then((result) => {
            console.log(result.text);
            window.alert("Thank you for submitting your ticket, we will be in touch within 24 business hours");
          })
          .catch((error) => {
            console.log(error.text);
            window.alert("There was an error, please reach out to 801-386-6272");
          });
        e.target.reset();
      }
      

    return (
        <>
        <div className="tech-contact-form">
            <h3>Technical Support Request</h3>
            <h6>If you are experiencing technical difficulties, please submit a ticket below and we will get back to you in 24 business hours.</h6>
            <form onSubmit={sendEmail}>
                <input name="fname" placeholder="First Name" />
                <input name="lname" placeholder="Last Name" />
                <input type="email" name="email" placeholder="john@abc.com" />
                <input type="textbox" name="message" placeholder="Please describe your technical issue" />
                <button>Send Support Request</button>
            </form>
        </div>
        </>
    )
}