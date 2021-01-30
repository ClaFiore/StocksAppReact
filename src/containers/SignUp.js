import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css'

const SignUp = props => {

    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <div>
        <Button variant="primary" onClick={handleShow}>
          Sign Up
        </Button>
  
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Sign Up</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Form>
                <Form.Label>First Name</Form.Label>
                <Form.Control name="firstname" placeholder="First name"/>
                <Form.Label>Last Name</Form.Label>
                <Form.Control name="lastname" placeholder="Last name"/>
                <Form.Label>Email Address</Form.Label>
                <Form.Control name="email" placeholder="Enter email address" />
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" placeholder="Choose new password" type='password'/>
              </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
}

export default SignUp