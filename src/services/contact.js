import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

const SERVICE_ID = 'service_3tixi8d';
const TEMPLATE_ID = 'template_tsw4ro5';
const USER_ID = 'Cprut94nRZj80oKe-';

const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
    e.target.reset()
}

export default handleSubmit;