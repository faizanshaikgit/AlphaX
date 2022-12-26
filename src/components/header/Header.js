import { Routes,Route,NavLink, useNavigate } from "react-router-dom";
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap'
import SIGNUP from '../signup'
import LOGIN from '../login'
import FORGOTPASS from '../Forgotpass'
import {useSelector,useDispatch} from 'react-redux';
import { clearLoginStatus } from "../../slices/Userslice";
import './header.css';
import Dashboard from "../UserDashBoard/Dashboard";
function Header(){
    return(
        <>
            <div>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container>
                <Navbar.Brand href="">Your Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                    <NavLink className="nav-link" to="signup">SignUp</NavLink>
                    <NavLink className="nav-link" to="login">Login</NavLink>
                    {/* <NavLink className="nav-link" to="sidebar">Dashboard</NavLink> */}
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
            </div>
            <Routes>
            <Route path="/" element={<LOGIN/>}></Route>
            <Route path="/signup" element={<SIGNUP/>}></Route>
            <Route path="/login" element={<LOGIN/>}></Route>
            <Route path="/sidebar" element={<Dashboard/>}></Route>
            <Route path='/userdashboard' element={<Dashboard/>}></Route>
            <Route path='/Forgotpass' element={<FORGOTPASS/>}></Route>
            </Routes>
      </>
    )
}
export default Header;