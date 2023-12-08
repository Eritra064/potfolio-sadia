import React from 'react';
import emailjs from '@emailjs/browser';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import swal from 'sweetalert2';




const Contact = () => {
  
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_w1ccbsx', 'template_601cprg', e.target, 'ZKrRwMwwkl32UONF1')
      .then((result) => {
        console.log(result.text);
        swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      }, (error) => {
        console.log(error.text);
        swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
    e.target.reset()
  };
  return (
    <div className='whole-container'>
      <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236153.21826833504!2d91.65422453437559!3d22.357629608752735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8a64095dfd3%3A0x5015cc5bcb6905d9!2sChattogram!5e0!3m2!1sen!2sbd!4v1702047354650!5m2!1sen!2sbd" 
          />
    <div className='contact'>
      <h2>Send me a message!</h2>
      <Form onSubmit={handleOnSubmit}>
        <Form.Field
          id='form-input-control-email'
          control={Input}
          label='Email'
          name='user_email'
          placeholder='Email…'
          required
          icon='mail'
          iconPosition='left'
          className='form-input'
        />
        <Form.Field
          id='form-input-control-last-name'
          control={Input}
          label='Name'
          name='user_name'
          placeholder='Name…'
          required
          icon='user circle'
          iconPosition='left'
          className='form-input'
        />
        <Form.Field
          id='form-textarea-control-opinion'
          control={TextArea}
          label='Message'
          name='user_message'
          placeholder='Message…'
          required
          className='form-input'
        />
        <Button className='contact-button' type='submit' color='green'>Submit</Button>
      </Form>
    </div>
    </div>
  );
}
export default Contact;