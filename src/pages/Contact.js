import React, { useState } from "react";
import PizzaLeft from "../assets/pizzaLeft.jpg";
import "../styles/join.css"


function Contact() {
  const[form,setform]=useState();
  const clk=()=>{
    setform("")
    alert("Your form has been submitted successfully✔✔")
  }
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" value={form} />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" value={form} />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message" value={form}
            required 
          ></textarea >
          <button type="submit" onClick={clk}> Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;