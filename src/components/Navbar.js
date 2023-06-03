import React, {useState} from 'react';
import {Link} from "react-router-dom";
import "./NavbarStyle.css"
import {motion} from "framer-motion"
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const toggle = () => {
        setOpen(!open)
    }
    let ClassName = open ? "hamburger active" : "hamburger"
    const variants = {
        show: {
            y: 0,
            opacity: 1
        },
        hide: {
            y: -50,
            opacity: 0
        }
    }
    return (
        <div className="header">
            <motion.nav>
                <div>Movie Search</div>
                <ul>
                    <li><Link className="link" to="/">Home</Link></li>
                    <li><Link className="link" to="/popular">Popular</Link></li>
                    <li><Link className="link" to="/upcoming">Upcoming</Link></li>
                </ul>
                <motion.ul animate={!open ? {y: 0} : {y: "100vh"}} transition={open ? {delay: 0, type: "tween", ease: "easeOut"} : {delay: 0.1, type: "tween", ease: "easeOut"}}>
                    <motion.li animate={open ? "show" : "hide"} variants={{show: {...variants.show, transition: {delay: 0.1, duration: 0.4}}, hide: {...variants.hide, transition: {delay: 0.01, duration: 0.09}}}} onClick={() => setOpen(!open)}><Link className="link" to="/">Home</Link></motion.li>
                    <motion.li animate={open ? "show" : "hide"} variants={{show: {...variants.show, transition: {delay: 0.3, duration: 0.4}}, hide: {...variants.hide, transition: {delay: 0.02, duration: 0.09}}}} onClick={() => setOpen(!open)}><Link className="link" to="/popular">Popular</Link></motion.li>
                    <motion.li animate={open ? "show" : "hide"} variants={{show: {...variants.show, transition: {delay: 0.5, duration: 0.4}}, hide: {...variants.hide, transition: {delay: 0.03, duration: 0.09}}}} onClick={() => setOpen(!open)}><Link className="link" to="/upcoming">Upcoming</Link></motion.li>
                </motion.ul>
                <HamburgerMenu ClassName={ClassName} toggle={toggle}/>
            </motion.nav>
        </div>
    );
};

export default Navbar;