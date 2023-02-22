import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useInView } from 'framer-motion';
import useThemeStorage from '../themeStorage';
import { BsFillTelephoneFill,BsFillEnvelopeFill } from "react-icons/bs";

function Contact() {
    // set theme
    const [theme, toggleTheme, componentMounted] = useThemeStorage();

    // set state for contact form open/close 
    const [ show, setShow] = useState('hidden-contact');
    const handleClick = () => {
        setShow('contact-show')
    }
    const handleClose = () => {
        setShow('hidden-contact');
    }
    
    const [ status, setStatus ] = useState('Submit');

    // set state for contact form 
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [subject, setSubject] = useState('');

    // set state for response 
    const [result, setResult] = useState(null);

    // handle sumbit form 
    const submitForm = async (e) => {
        e.preventDefault();
        setStatus('Sending email');
        e.target.reset();
    
    let emailMessage = {
        name: name,
        email: email,
        subject: subject,
        message: message
    } 

    if ( emailMessage === '') {
        setResult({
            message: 'Please fill out all fields'
        })
    } else {
    
    //console.log(emailMessage);
    //let URI = process.env.NODE_ENV === 'development' ? process.env.DEV_URI : process.env.PROD_URI;
    
    let response = await fetch("/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(emailMessage),
      });
      if (response) {
        setResult({
            success: true, 
            message: 'Message was sent, we will get back to you shortly.'
        })
      } else {
        setResult({
            success: false, 
            message: 'Something went wrong, please try again later.'
        })
      }}
    }; 

    // transition styling 
    const ref = useRef(null)
    const isInView = useInView(ref)
    const transitions = {
        animationName: isInView ? 'slideUp' : 'none',
        animationDuration: '2s',
        animationTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)',
        display: 'block'
        }

    return (
        <div>
            <div className={show}>
                <div className='contact-top-container'>
                    <div>Contact Form</div>
                    <button className='contact-close-btn' onClick={handleClose}>
                        <div className='contact-line1'></div>
                        <div className='contact-line2'></div>
                    </button>
                </div>
                <div>
                    <div>
                    {result && (
                        <p className={`${result.success ? 'success' : 'error'}`}>
                        {result.message}
                        </p>
                    )}
                    </div>
                    <Form onSubmit={submitForm}>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                //value={state.name}
                                onChange={(e) => setName(e.target.value)} 
                                type="text"
                                placeholder="Name"
                                autoFocus
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                //value={state.email}
                                onChange={(e) => setEmail(e.target.value)} 
                                type="text"
                                placeholder="email@example.com"
                                required
                            />
                        </Form.Group>
                            <Form.Label>Subject</Form.Label>
                            <Form.Control
                                //value={state.name}
                                onChange={(e) => setSubject(e.target.value)} 
                                type="text"
                                placeholder="Subject"
                                required
                            />
                        <Form.Group
                            className="mb-3"
                            controlId="message"
                        >
                            <Form.Label>Message</Form.Label>
                            <Form.Control 
                                //value={state.message} 
                                onChange={(e) => setMessage(e.target.value)}  
                                as="textarea" 
                                rows={3} 
                                required
                            />
                        </Form.Group>
                        <Button 
                            style={{
                                backgroundColor: 'var(--body-bg-color)',
                                color: 'var(--font-color)',
                                borderColor: 'var(--font-color)'
                            }}
                            type="submit" 
                            variant="primary" >{status}
                        </Button>
                    </Form>
                </div>
            </div>  
        <div className='contact-container' style={{position: 'relative'}} ref={ref}>
            <h2 style={transitions}>Contact</h2>
            <div><p><BsFillTelephoneFill/> 844-463-GOEVOKE</p></div>
            <div><p><BsFillEnvelopeFill/> hello@evokediagnostics.com</p></div>
            <Button id={'contact'}
                style={{
                    backgroundColor: 'var(--font-color)',
                    color: 'var(--body-bg-color)',
                    borderColor: 'white'
                }}
                onClick={handleClick}>Send a Message
            </Button>
            </div>    
        </div>
    )
}

export default Contact;