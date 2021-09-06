import React,{ Component,Fragment } from 'react'
import {Container,Row,Col,Form,Button}from 'react-bootstrap';
import { ArrowRight } from 'react-bootstrap-icons';
import { FaUserAlt } from "react-icons/fa";
import { BsLockFill } from "react-icons/bs";
import './Style.css';
import iconImg from './logo.svg'


 class App extends Component {
  render() {
    return (
      <Fragment>
        
        <Container>
      
        <img className="icon-img" src={iconImg} alt="icon"/>
          <Row className="mt-5" >

            <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-lg roundrd-lg ">
           

            <h3> welcome back </h3> 
            <h5> Enter your credentials to access your account </h5> 
           
            <div className="lobox p-2">
       <Form>
      
           <Form.Group >
           
             <Form.Control  type="email"  placeholder="Enter email" />
             <FaUserAlt aria-hidden="true"/>
              </Form.Group>

                <Form.Group >
              
                <Form.Control type="password" placeholder="Password" />
                <BsLockFill />
                </Form.Group>
                
           
             
  <Button variant="primary btn-block" type="submit">
        Signin
  </Button>
 <div className="text-left mt-3">
   <a href="#"><small className="reset ">forget your password?</small></a>
   <a href="#"><small className="resset ">reset password</small></a>
 </div>
</Form>
</div>
            </Col>
          </Row>
        </Container>
      </Fragment>
     
    )
  }
}

export default App
