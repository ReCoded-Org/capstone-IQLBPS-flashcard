import emailjs from 'emailjs-com';

const SERVICE_ID = 'service_3tixi8d';
const TEMPLATE_ID = 'template_tsw4ro5';
const USER_ID = 'Cprut94nRZj80oKe-';

const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
}

export default handleSubmit;