import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const ContactForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            await axios.post('/.netlify/functions/submit-form', data);
            alert('Message sent successfully!');
        } catch (error) {
            console.error('There was an error!', error);
            alert('Failed to send message.');
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                Name:
                <input {...register('name', { required: 'Name is required' })} />
                {errors.name && <span>{errors.name.message}</span>}
            </label>
            <label>
                Email:
                <input type="email" {...register('email', { required: 'Email is required' })} />
                {errors.email && <span>{errors.email.message}</span>}
            </label>
            <label>
                Message:
                <textarea {...register('message', { required: 'Message is required' })} />
                {errors.message && <span>{errors.message.message}</span>}
            </label>
            <button type="submit">Send</button>
        </form>
    );
};

export default ContactForm;
