import React from 'react'
import PizzaLeft from '../assets/pizzaLeft.jpg'
import '../styles/Contact.css'

const Contact = () => {
  return (
    <div className="contact">
      <div className="leftSide" style={{backgroundImage: `url(${PizzaLeft})` }}></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form id="Contact-form" mathod= "POST">
            <label htmlFor="name">Full Name</label>
            <input name="name" placeholder="Enter full name..." type="text"/>
            <label htmlFor="email">Email</label>
            <input name="email" placeholder="Enter email..." type="text"/>
            <label htmlFor="message">Message</label>
            <textarea rows="6" placeholder=" " name="message" required>

            </textarea>
            <button type="submit"> Send Message </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
