import React from 'react'
import '../../Styles/Contact.css'

const Contact = () => {
  return (
    <div className='contact-page'>
<h1>CONTACT</h1>
<p>Interested in Working with us?<br/> Let's start from Scratch.</p>

<div className='contact-form-container'>
<form action='' method=''>
<input type="text" name="fullname" required placeholder='Name' />
<input type="email" name="email" required placeholder='Email' />
<input type="tel" name="Phone" required placeholder='Phone' />
<textarea cols={50} rows={4} required placeholder='Message'></textarea>
<button className='contact-form-btn' type="submit"> Submit</button>
</form>
</div>

    </div>
  )
}

export default Contact;