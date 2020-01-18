import React from "react";
import "./style.css";
import logo from '../Header/logo.png';

function Footer() {

    return (
        <footer className="footer">
            <img id="logo" src={logo} />
            <span>Camp Search</span>
        </footer>
    );
}

export default Footer;