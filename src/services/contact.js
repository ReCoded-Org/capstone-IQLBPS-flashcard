import emailjs from 'emailjs-com';

const SERVICE_ID = 'service_3tixi8d';
const TEMPLATE_ID = 'template_tsw4ro5';
const USER_ID = 'Cprut94nRZj80oKe-';

const senEmail= (text) => {
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, text, USER_ID)
      .then((result) => {
        //TODO: create alert if its successful
      }, (error) => {
        //TODO: create alert if something went wrong
      });
}

export default sendEmail;