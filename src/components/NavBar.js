import { useState,useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import navIcon1 from '../assets/github-svgrepo-com.svg';
import navIcon2 from '../assets/linkedin-svgrepo-com.svg';
import navIcon3 from '../assets/whatsapp-128-svgrepo-com.svg'; 
import logo from '../assets/logo.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";



export default function NavBar(){
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
        if(window.scrollY > 50){
            setScrolled(true);
        }else{
            setScrolled(false);
        }
    }

    window.addEventListener('scroll',onScroll);

    return () => window.removeEventListener('scroll',onScroll);

    }, []);


    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return(
      <Router>
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/" style={{display:'inline'}}>
            <img src={logo} alt="Logo"/>
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" >
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://github.com/Felnando2112"><img src={navIcon1} alt="github" /></a>
                <a href="https://www.linkedin.com/in/fernando-avenda%C3%B1o-540152260/"><img src={navIcon2} alt="linkedin" /></a>
                <a href="https://wa.me/584242111400"><img src={navIcon3} alt="whatsapp" /></a>
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
        </Navbar>
      </Router>
    );
}