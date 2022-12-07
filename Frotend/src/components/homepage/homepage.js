import React,{useState,useEffect} from "react";
import "./homepage.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useHistory  } from "react-router-dom"

const Homepage = (props) => {
    const [todolist,setTodolist]=useState([]);


    const history = useHistory ();

    useEffect(()=>{
        axios.get("http://localhost:9002/find").then(res=>{
          setTodolist(res.data);
        })
        .catch(err=>console.log(err))
      },[])

     
  
    return (
        <>

        <div className="homepage">
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
  

            <div>
            <div className="row">
            {todolist.map((home) =>{
                return(
                    <div className="col-lg-6 col-md-12 col-12 center-block d-block mx-auto mt-5 mb-5">


        <Card style={{ width: '35vw' }} key={home._id} className="center-block d-block mx-auto">
      <Card.Img variant="top" src={home.images} />
      <Card.Body>
        <Card.Title style={{color:'black'}}><b> Name : </b>{home.name} {home.model}</Card.Title>
        <Card.Text style={{color:'black'}}><b>Price : </b>
       {home.price}
        </Card.Text>
        <Button variant="primary" onClick={() => history.push(`/api/user/${home._id}`)}>View Detail</Button>
      </Card.Body>
    </Card>
      </div>

                   
                )
            })}
                
            </div>
        </div>
        </div>
        </>
    )
}

export default Homepage