import React from 'react';
import {Link} from "react-router-dom";

export default function Navigation() {

    const navStyle = {
        position: "fixed",
        height: "100vw",
        width: "20vw",
        textAlign: "center",
        zIndex: "2"
      }
    
      const pStyle = {
        margin: "20px 10%",
        textAlign: "left",
        width: "80%"
      }

      const infoStyle = {
        color: "green",
        margin: "20px 5%",
        textAlign: "center",
        width: "90%"
      }
    
      const linkStyle = {
        color: "#000",
        textAlign: "center",
        textDecoration: "none",
        width: "100%"
      }

      const footerStyle = {
          position: "fixed", 
          bottom: "0", 
          textAlign: "center", 
          width: navStyle.width
        }

    return (
        <div className="navigation" style={navStyle}>
            <h1 id="title">VR Tutorial</h1>
            <p style={pStyle}>This web application was built to test AFrame using React.</p>
            <p style={pStyle}>Please use one of the links to view other pages!</p>
            <p style={infoStyle}>Use your keyboard to move around the enviroment</p>
            <p style={infoStyle}>A[Left], W[Forward], S[Backward], D[Right]</p>
            <nav>
                <ul>
                    <li>
                        <Link to="/" style={linkStyle}>Home</Link>
                    </li>
                    <li>
                        <Link to="/about" style={linkStyle}>About</Link>
                    </li>
                </ul>
            </nav>
            <div id="footer" style={footerStyle}>
            <footer>
                <p>Darius Turner ©2020</p>
            </footer>
          </div>
        </div>
    )
}