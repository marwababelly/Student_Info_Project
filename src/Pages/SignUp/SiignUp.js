import React from 'react';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import style from './SignUp.module.css';

const SiignUp = () => {
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
                    <Form>
                      <Form.Group className="mb-3" controlId="Name">
                        <Form.Label className="text-center">
                          Full Name
                        </Form.Label>
                        <Form.Control type="text" placeholder="Enter Full Name" className={style.formControl} required/>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="Name" >
                        <Form.Label  className="text-center">Username</Form.Label>
                        <Form.Control type="text" className={style.formControl} placeholder="Enter username" required/>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="Name" >
                        <Form.Label  className="text-center">Your University</Form.Label>
                        <Form.Control type="text" className={style.formControl} placeholder="Enter your university" required/>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control type="email" placeholder="Enter email" className={style.formControl} required/>
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" className={style.formControl} required/>
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password" className={style.formControl} required/>
                      </Form.Group>

                      <Form.Group 
                        className="mb-3"
                        controlId="formBasicCheckbox">
                      <Form.Label>Choose the current year of your studies</Form.Label>
                        <Form.Select aria-label=" " className={style.formControl}>
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