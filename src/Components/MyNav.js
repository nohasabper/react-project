import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
function NavBar() {
   const cart = useSelector(store=>store.cart)
   return (
      <>
      <Navbar className='fixed-top'  bg="primary" expand="lg">
         <Container>
            <Link to="/" className='navbar-brand text-light'>ShopApp</Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="me-auto">
                  <Link to="/Products" className='nav-link text-light'>Products</Link>

                  <Link to="/cart" className='nav-link text-light'><i class="fa-solid fa-cart-shopping"></i><Badge bg="danger">{cart.length}</Badge></Link>
                  
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
      </>
   )
}

export default NavBar;