import React, {useState} from 'react';
import Logo from "../assets/pizzaLogo.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from '@mui/icons-material/Reorder';
import Button from '@mui/material/Button';

// import { Button } from '@mui/material';
// import { useState } from "react";

const Navbar = () => {
const toggleNavbar = ()=>{
    setOpenLinks(! openLinks);
};
    const[openLinks, setOpenLinks] = useState(false);
    return (
        <div className="navbar">
            <div className="leftSide" id={openLinks ? "open" : "closed"}>

                <img src={Logo} alt="Logo" />
                <div className="hiddenLinks">
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                </div>

            </div>
            <div className="rightSide">
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Button onClick={toggleNavbar}>
                    <ReorderIcon/>
                </Button>
            </div>
        </div>
    );
}

export default Navbar;
