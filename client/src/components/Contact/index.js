import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Contact() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [ status, setStatus ] = useState('Submit');

    // set state for contact form 
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [subject, setSubject] = useState('');

    const [result, setResult] = useState(null);

    const submitForm = async (e) => {
        e.preventDefault();
        setStatus('Sending email');

    let emailMessage = {
        name: name,
        email: email,
        subject: subject,
        message: message
    } 
    console.log(emailMessage);
    
    let response = await fetch("http://localhost:3000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(emailMessage),
      });
      setResult({
        success: false,
        message: 'something went wrong, please try again.'
      });
      setStatus("Submit");
      let result = await response.json();
      alert(result.status);
    };
    
    return (
        
        <div id={'contact'} className='contact-container'>
            <h2>Contact</h2>
            <p>hello@reallygreat.com</p>
        
            <Button 
                style={{
                    backgroundColor: 'var(--font-color)',
                    color: 'var(--body-bg-color)',
                    borderColor: 'white'
                }}
                variant="primary" 
                onClick={handleShow}>Send a Message
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Contact Form</Modal.Title>
                    <button className='contact-close-btn' variant="secondary" onClick={handleClose}>
                        <div className='contact-line1'></div>
                        <div className='contact-line2'></div>
                    </button>
                </Modal.Header>
                <Modal.Body>
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
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                //value={state.email}
                                onChange={(e) => setEmail(e.target.value)} 
                                type="text"
                                placeholder="email@example.com"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Label>Subject</Form.Label>
                            <Form.Control
                                //value={state.name}
                                onChange={(e) => setSubject(e.target.value)} 
                                type="text"
                                placeholder="Subject"
                                autoFocus
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
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Contact;