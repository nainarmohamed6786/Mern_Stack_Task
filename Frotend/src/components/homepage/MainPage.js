import React from 'react';
import { useHistory  } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import axios from "axios";
import Button from 'react-bootstrap/Button';

const MainPage = (props) => {
    const history = useHistory ()
  return (
    <div>
         <Navbar bg="dark" variant="dark"expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <button className="btn btn-outline-success" variant="dark" onClick={() => props.setLoginUser({})} >Logout</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <div className='col-lg-12 col-md-12 col-12'>
        <h1 className='text-center mt-5'>Cars</h1>

      </div>


<div className='row mt-5'>
    <div className='col-lg-4 col-md-4 col-12 center-block d-block mx-auto'>
    <div class="card center-block d-block mx-auto" style={{ width: '30vw' }}>
  <img src="https://fastly-production.24c.in/hello-ar/dev/uploads/bcd6150f-975d-4006-acbb-db6db9481cc3/29de0067-918b-43a9-912f-62183774d0bb/43.jpg?w=1248&h=704&auto=format" class="card-img-top img-fluid" alt="..." />
  <div class="card-body">
    <h1 style={{color:'black'}} className="text-center">Hyuandai</h1>
  </div>
</div>
    </div>
    <div className='col-lg-4 col-md-4 col-12 center-block d-block mx-auto'>
    <div class="card center-block d-block mx-auto" style={{ width: '30vw' }}>
  <img src="https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?cs=srgb&dl=pexels-mike-b-120049.jpg&fm=jpg" class="card-img-top img-fluid" alt="..." />
  <div class="card-body">
    <h1 style={{color:'black'}} className="text-center">Benz</h1>
  </div>
</div>
    </div>
    <div className='col-lg-4 col-md-4 col-12 center-block d-block mx-auto'>
    <div class="card center-block d-block mx-auto" style={{ width: '30vw' }}>
  <img src="https://imgd-ct.aeplcdn.com/320x200/n/cw/ec/131181/bolero-neo-exterior-right-front-three-quarter.jpeg?isig=0&q=75" class="card-img-top img-fluid" alt="..." />
  <div class="card-body">
    <h1 style={{color:'black'}} className="text-center">Mahendra</h1>
  </div>
</div>
    </div>
</div>

<div className='row mt-5'>
    <div className='col-lg-4 col-md-4 col-12 center-block d-block mx-auto'>
    <div class="card center-block d-block mx-auto" style={{ width: '30vw' }}>
  <img src="https://d2m3nfprmhqjvd.cloudfront.net/blog/20220909134108/Mahindra-XUV400.jpg" class="card-img-top img-fluid" alt="..." />
  <div class="card-body">
    <h1 style={{color:'black'}} className="text-center">XUV</h1>
  </div>
</div>
    </div>
    <div className='col-lg-4 col-md-4 col-12 center-block d-block mx-auto'>
    <div class="card center-block d-block mx-auto" style={{ width: '30vw' }}>
  <img src="https://blogs.revv.co.in/blogs/wp-content/uploads/2021/02/Toyota-Innova.jpg" class="card-img-top img-fluid" alt="..." />
  <div class="card-body">
    <h1 style={{color:'black'}} className="text-center">Innova</h1>
  </div>
</div>
    </div>
    <div className='col-lg-4 col-md-4 col-12 center-block d-block mx-auto'>
    <div class="card center-block d-block mx-auto" style={{ width: '30vw' }}>
  <img src="https://d1vl6ykwv1m2rb.cloudfront.net/blog/wp-content/uploads/2018/08/01134811/sumo-fact.jpg" class="card-img-top img-fluid" alt="..." />
  <div class="card-body">
    <h1 style={{color:'black'}} className="text-center">TATA Sumo</h1>
  </div>
</div>
    </div>
</div>



<div className='row mt-5'>
    <div className='col-lg-4 col-md-4 col-12 center-block d-block mx-auto'>
    <div class="card center-block d-block mx-auto" style={{ width: '30vw' }}>
  <img src="https://d2m3nfprmhqjvd.cloudfront.net/blog/20220316112427/Thar-feature.jpg" class="card-img-top img-fluid" alt="..." />
  <div class="card-body">
    <h1 style={{color:'black'}} className="text-center">Jeep</h1>
  </div>
</div>
    </div>
    <div className='col-lg-4 col-md-4 col-12 center-block d-block mx-auto'>
    <div class="card center-block d-block mx-auto" style={{ width: '30vw' }}>
  <img src="https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20200920100247_2020-Tata-Nexon-front-static-1200.jpg&w=700&q=90&c=1" style={{ width: '30vw' }} class="card-img-top img-fluid" alt="..." />
  <div class="card-body">
    <h1 style={{color:'black'}} className="text-center">Toyota</h1>
  </div>
</div>
    </div>
    <div className='col-lg-4 col-md-4 col-12 center-block d-block mx-auto'>
    <div class="card center-block d-block mx-auto" style={{ width: '30vw' }}>
  <img src="https://akm-img-a-in.tosshub.com/sites/btmt/images/stories//Newstaffpics/verna_505_122717035128.jpg" class="card-img-top img-fluid" alt="..." />
  <div class="card-body">
    <h1 style={{color:'black'}} className="text-center">Honda</h1>
  </div>
</div>
    </div>
</div>



              
      <button variant="primary" className='btn btn-success mt-5 mb-5 center-block d-block mx-auto' onClick={() => history.push('/home')}>Book Cars</button>
    </div>
  )
}

export default MainPage
