import React,{useState} from 'react'
import '../../Styles/Contact.css'

const Contact = () => {
const [name,setName] = useState("");
const [email, setEmail] = useState("");
const [phone,setPhone] = useState("");
const[message,setMessage] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "9dc2b35f-ce88-4710-9b74-6fc1149f46d1");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      alert('Thanks, your message has been received!')
    }

    // Rest Form
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <div className='contact-page'>
<h1>CONTACT</h1>
<p>Interested in Working with us?<br/> Let's start from Scratch.</p>

<div className='contact-form-container'>
<form onSubmit={onSubmit}>
<input type="text" name="Name" required placeholder='Name' value={name} onChange={(e)=> setName(e.target.value)} />
<input type="email" name="email" required placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)} />
<input type="tel" name="phone"  placeholder='Phone'value={phone} onChange={(e)=> setPhone(e.target.value)} />
<textarea name='message' cols={50} rows={4} required placeholder='Message'value={message} onChange={(e)=> setMessage(e.target.value)} ></textarea>
<button className='contact-form-btn' type="submit"> Submit</button>
</form>
</div>

    </div>
  )
}

export default Contact;