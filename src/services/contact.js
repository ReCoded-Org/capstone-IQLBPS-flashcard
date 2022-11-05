import emailjs from 'emailjs-com';

const SERVICE_ID = 'service_8owfnsk';
const TEMPLATE_ID = 'template_5xezz2u';
const USER_ID = 'CYdQVZe5Ev-tZ83_A';

const sendEmail = (formElement) => {
  emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formElement, USER_ID).then(
    (result) => {
      console.log('Success', result);
    },
    (error) => {
      console.log('error', error);
    }
  );
};

export default sendEmail;
