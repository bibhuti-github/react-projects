import { Navbar, Nav, Container } from 'react-bootstrap';
import { HeaderBg } from './Images'
const Navigation=()=>{
    return(
        <>
        
        <img src={HeaderBg} className="header-bgimage"/>
            <Navbar collapseOnSelect expand="lg">
                <Container  class="cust-nav">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Link href="#">Home</Nav.Link>
                            <Nav.Link href="#">Services</Nav.Link>
                            <Nav.Link href="#">Our Projects</Nav.Link>
                            <Nav.Link href="#">Shop</Nav.Link>
                            <Nav.Link href="#">Pages</Nav.Link>
                            <Nav.Link href="#">News</Nav.Link>
                            <Nav.Link href="#">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
export default Navigation;