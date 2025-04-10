import React from 'react'
import "../Components/Contact/Contact.css"
import msg_icon from '../assets/edusity/msg-icon.png'
import mail_icon from '../assets/edusity/mail-icon.png'
import phone_icon from '../assets/edusity/phone-icon.png'
import location_icon from '../assets/edusity/location-icon.png'
import white_arrow from "../assets/edusity/white-arrow.png"

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "90c650a1-f000-46a2-9b1f-0127c8fec237");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (

    <div className="contact-wrapper">
  <div className='contact'>
    <div className='contact'>
        <div className='contact-col'>
            <h3>Send us a message <img src={msg_icon} alt=''/></h3>
                <p>Feel free to reach out through contact form or find our contact information below. Your feeback, questions, and suggestions are imporant to us as we strive to provide exceptional service to our community. </p>
<ul>
    <li><img src={mail_icon} alt=''/>lakesideminigolf@gmail.com</li>
    <li><img src={phone_icon} alt=''/>+1 252-270-5233</li>
    <li><img src={location_icon} alt=''/>3358 River Rd, Henrico, NC, United States, North Carolina

</li>
</ul>

        </div>
        <div className='contact-col'>
            <form onSubmit={onSubmit}> 
                <label> Email*</label>
                <input type="email" name='name' placeholder='Enter your email' required/>
                <label> Phone Number</label>
                <input type="number" name='phone' placeholder='Enter your Number' />
                <label> Write your messages here*</label>
                <textarea name='message'  rows="6" placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt=''/></button>

            </form>
            <span>{result}</span>
        </div>
    </div>
    </div>
    </div>

  )
}

export default Contact