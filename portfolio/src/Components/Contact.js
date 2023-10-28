import React from 'react'
import {motion} from 'framer-motion';
import '../Styles/Contact.css'

const Contact = () => {
  return (
    <div className='contact-page'>
      <h1>Let’s Bring Those Ideas To Life.</h1>

      <form className='form' action="https://formsubmit.co/fyvesensestest@gmail.com" method="POST">
      {/* <input type="hidden" name="_next" value="/thanks"/> */}
      <input type="hidden" name="_autoresponse" value="Thanks for contacting us! Average response times ranges from 1-5 business days. We appreciate your patience." />
      <input type="hidden" name="_subject" value="New Fyve Senses Contact Form Inquiry" />

      <label for="name"> Full Name &#40;required&#41;	</label>
     <input id='name' type="text" name="Name" required />
     <label for="email"> Email &#40;required&#41;	</label>
     <input id='email' type="email" name="Email" required />
     <label for="number"> Phone Number</label>
     <input id='number' type='text' name='Phone Number'/>
     <label for="message"> Message &#40;required&#41;	</label>
    <textarea rows={6} id='message' name='Message' required></textarea>
    <button type="submit">Send</button >
</form>

    </div>
  )
}

export default Contact;