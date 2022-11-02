import React, { useRef } from 'react';
import emailjs from 'emailjs-com';


const SERVICE_ID = 'service_8owfnsk';
const TEMPLATE_ID = 'template_5xezz2u';
const USER_ID = 'CYdQVZe5Ev-tZ83_A';
export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

const sendEmail= (text) => {
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, text, USER_ID)
      .then((result) => {
        //TODO: create alert if its successful
      }, (error) => {
        //TODO: create alert if something went wrong
      });
      return (
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      );
    };
  }
export default sendEmail;