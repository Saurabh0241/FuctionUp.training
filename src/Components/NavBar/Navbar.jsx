import React from 'react'
import { Link } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import { useSelector } from 'react-redux';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { GrFavorite } from "react-icons/gr";
import styles from './Navbar.module.css';
function Navbarfun() {
    const Movieproduct=useSelector(state=>state.Cart.moviefav)
    
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container fluid>
            <Navbar.Brand href="#">
                <h1>MOVIEAPP</h1>
            </Navbar.Brand>
            
            <Nav>
              <Nav.Link to="/Moviecard" as={Link}>
              <h5 style={{color:'white'}}>Moviecard</h5>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link to="/" as={Link}>
               <h5 style={{color:'white'}}>Home</h5>
              </Nav.Link>
            </Nav>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <Nav.Link to="/favoriteMovie" as={Link}>
                <h5 style={{color:'white'}} className={styles.navbaricon}>favoriteMovie<GrFavorite className={styles.icons} size={40}/>  {Movieproduct.length}</h5>
                {/* <div className={styles.navbaricon}>
               <GrFavorite   size={40}/> 
                </div> */}
                </Nav.Link>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }
export default Navbarfun