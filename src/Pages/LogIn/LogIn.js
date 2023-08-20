import React, { useEffect, useState } from 'react';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import style from './LogIn.module.css';
import { Link } from 'react-router-dom';

const simulateNetworkReguest = ()=> {
  return new Promise((resolve) => setTimeout(resolve, 2000));
};

const LogIn = () => {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if(isLoading) {
      simulateNetworkReguest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => {
    setLoading(true);
  };

  return (
    <div>
      <Container >
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className={style.cbd}>
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase text-secondary">
                    Login
                  </h2>
                  <div className="mb-3">
                    <Form>
                      <Form.Group className="mb-3" controlId="Name" >
                        <Form.Label  className="text-center">UserName</Form.Label>
                        <Form.Control type="text" className={style.formControl} placeholder="Enter username" required/>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control className={style.formControl} type="email" placeholder="Enter email" required/>
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control className={style.formControl} type="password" placeholder="Password" required/>
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"></Form.Group>
                      <div className="d-grid">
                        <Button  className={style.btn} type="submit" onClick={!isLoading ? handleClick : null }>
                          {isLoading ? 'Loading...' : 'LogIn'}
                        </Button>
                      </div>

                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Already have an account??{' '}
                        <Link to='/SignUp' className='text-primary fw-bold'>Sign Up</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default LogIn