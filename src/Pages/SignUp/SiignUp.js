import React, { useRef, useState } from 'react';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import style from './SignUp.module.css';
import axios from 'axios';

const SiignUp = () => {
const [fullname, setFullname] = useState('');
const [username, setUsername] = useState('');
const [university, setUniversity] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [comfirmPassword, setComfirmPassword] = useState('');
const [yearStudy, setYearStudy] = useState('');

const fullnameRef = useRef();
const usernameRef = useRef();
const universityRef = useRef();
const emailRef = useRef();
const passwordRef = useRef();
const comfirmPasswordRef = useRef();
const yearStudyRef = useRef();

const fullnameHandler = (event) => {
  setFullname(event.target.value);
};

const usernameHandler = (event) => {
  setUsername(event.target.value);
};

const universityHandler = (event) => {
  setUniversity(event.target.value);
};

const emailHandler = (event) => {
  setEmail(event.target.value);
};

const passwordHanler = (event) =>{
  setPassword(event.target.value);
};

const comfirmPasswordHandler = (event) =>{
  setComfirmPassword(event.target.value);
};

const yearStudyHandler = (event) => {
  setYearStudy(event.target.value);
};

const submitFormHandler = (event) => {
  event.preventDefault();

  const enteredfullName = fullnameRef.current.value;
  const enteredUsername = usernameRef.current.value;
  const enteredUniversity = universityRef.current.value;
  const enteredEmail = emailRef.current.value;
  const enteredPassword = passwordRef.current.value;
  const enteredComfirmPassword = comfirmPasswordRef.current.value;
  const enteredYearStudy = yearStudyRef.current.value;

  const SignUpFormData = {
    fullname: enteredfullName,
    username: enteredUsername,
    university: enteredUniversity,
    email: enteredEmail,
    password: enteredPassword,
    comfirmPassword: enteredComfirmPassword,
    yearStudy: enteredYearStudy
  }

  axios.post('https://student-info-294ff-default-rtdb.firebaseio.com/signUpUsers', SignUpFormData)
  .then((response) => {
    console.log('Data Sent Successfully!', response);
    setFullname('');
    setUsername('');
    setEmail('');
    setUniversity('');
    setPassword('');
    setComfirmPassword('');
    setYearStudy('');
  })

  .catch((error) => {
    console.log('Error Sending Data!', error)
  })
}

  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center mt-86" style={{marginTop: "86px", marginBottom: "20px"}}>
          <Col md={8} lg={6} xs={12}>
            <Card className={style.cbd}>
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase text-secondary">Sign Up</h2>
                  <div className="mb-3">
                    <Form 
                      onSubmit={submitFormHandler}>
                      <Form.Group className="mb-3" controlId="Name">
                        <Form.Label className="text-center">
                          Full Name
                        </Form.Label>
                        <Form.Control type="text" placeholder="Enter Full Name" className={style.formControl} required ref={fullnameRef} value={fullname} onChange={fullnameHandler}/>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="Name" >
                        <Form.Label  className="text-center">Username</Form.Label>
                        <Form.Control type="text" className={style.formControl} placeholder="Enter username" required ref={usernameRef} value={username} onChange={usernameHandler}/>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="Name" >
                        <Form.Label  className="text-center">Your University</Form.Label>
                        <Form.Control type="text" className={style.formControl} placeholder="Enter your university" required ref={universityRef} value={university} onChange={universityHandler}/>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control type="email" placeholder="Enter email" className={style.formControl} required ref={emailRef} value={email} onChange={emailHandler}/>
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" className={style.formControl} required ref={passwordRef} value={password} onChange={passwordHanler}/>
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password" className={style.formControl} required ref={comfirmPasswordRef} value={comfirmPassword} onChange={comfirmPasswordHandler}/>
                      </Form.Group>

                      <Form.Group 
                        className="mb-3"
                        controlId="formBasicCheckbox">
                      <Form.Label>Choose the current year of your studies</Form.Label>
                        <Form.Select aria-label=" " className={style.formControl} ref={yearStudyRef} value={yearStudy} onChange={yearStudyHandler}>
                          <option value="1" className= {style.op}>One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                          <option value="4">Four</option>
                          <option value="5">Five</option>
                        </Form.Select>
                      </Form.Group>

                      <div className="d-grid">
                        <Button className={style.btn} type="submit">
                          Create Account
                        </Button>
                      </div>

                    </Form>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
    );
};

export default SiignUp;