import React from 'react'
import {motion} from 'framer-motion';
import '../Styles/Contact.css'

const Contact = () => {
  return (
    <motion.div
    
    initial={{opacity:0, transition: { duration: 1.5 }}}
    animate={{opacity:1, transition: { duration: 1.5 }}}
    exit={{opacity:0,transition: { duration: 1.5 }}}
    className='contact-page'>
      <h1>Let’s Bring Those Ideas To Life.</h1>

      <form className='form' action="https://formsubmit.co/86f1b1b43e682ac14c2b92af98fd2a91" method="POST">
      {/* <input type="hidden" name="_next" value="/thanks"/> */}
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

    </motion.div>
  )
}

export default Contact;