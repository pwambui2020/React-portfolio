import React from 'react'
import './Contact.css'
import mail from '../../assets/mail.svg'
import call from '../../assets/call.svg'
import location from '../../assets/location.svg'

const Contact = () => {
  return (
    <div>
        <div className="contact">
            <div className="contact-title">
                <h1>Get In Touch</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm currently available to take on new projects, so feel free to contact me.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail} alt="" style={{width:'100px', height:'50px'}}/> <p>example@email.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call} alt="" style={{width:'100px', height:'50px'}}/> <p>+254 723 860 008</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location} alt="" style={{width:'100px', height:'50px'}}/> <p>Nairobi, Kenya</p>
                        </div>
                    </div>
                </div>
          
                <form className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter your name' name='name' />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter your email'name='email' />
                    <label htmlFor="">Your Message</label>
                    <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                    <button className='contact-submit' type='submit'>Send Now</button>
                </form>
            </div>   
        </div>
      
    </div>
  )
}

export default Contact
