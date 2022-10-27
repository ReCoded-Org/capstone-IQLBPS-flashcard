import React from 'react';
import { useForm } from 'react-hook-form';

function Contact() {
    const {register, formState :{errors}, handleSubmit } = useForm();
    // TODO: using sendEmail instead of onSubmit
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <form 
        className='w-full max-w-lg m-auto py-10 mt-10 px-10 border'
        onSubmit={handleSubmit(onSubmit)}
        >
            <h1 className='text-gray-600 text-center text-xl font-medium'>Contact Us</h1>
            <label className='text-gray-600 font-medium' htmlFor='name'>
            Name
            <input 
            className='border-solid border-gray-300 border py-2 px-4 w-full
            rounded text-gray-700' name='name' id='name' {...register('name', {required: "Please enter your name",})}/>
            {errors.name && <div className="mb-3 text-normal text-red-500">{errors.name.message}</div>}
            </label>
            <label className='text-gray-600 font-medium' htmlFor='email'>
            Email
            <input 
            className='border-solid border-gray-300 border py-2 px-4 w-full
            rounded text-gray-700' name='email' id='email' {...register( 'email', { required: "Please enter your email",})}/>
            {errors.email && <div className="mb-3 text-normal text-red-500">{errors.email.message}</div>}
            </label>
            <label className='text-gray-600 font-medium' htmlFor='message'>
            Message
            <textarea 
            className='border-solid border-gray-300 border py-2 px-4 w-full
            rounded text-gray-700' name='message' id='message' {...register('message', {required: "Please enter a message",})}/>
            {errors.message && <div className="mb-3 text-normal text-red-500">{errors.message.message}</div>}
            </label>
            <button className='mt-4 w-full bg-green-400 hover:bg-green-600 text-green-100 border shadow py-3 px-6 font-semibold text-md rounded' type='submit'>Submit</button>
        </form>
    )
}

export default Contact;