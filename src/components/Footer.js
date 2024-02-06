import React from "react";
import footerlogo from "../images/footerlogo.png";

const Footer = () => {
    return (
        <footer className="">
            <section>
                <div className="company-info">
                    <img src={footerlogo} alt="/" />
                </div>
                <div>
                    <h3>Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Menu</a></li>
                        <li><a href="/booking">Reservations</a></li>
                        <li><a href="/">Login</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Address: <br />123 Town Street, Chicago</li>
                        <li>Phone: <br /> +00 123 456 789</li>
                        <li>Email: <br /> contact@little-lemon.com</li>
                    </ul>
                </div>
                <div>
                    <h3>Social Media Links</h3>
                    <ul>
                        <li><a href="/">Facebook</a></li>
                        <li><a href="/">Instagram</a></li>
                        <li><a href="/">Twitter</a></li>
                    </ul>
                </div>
            </section>
        </footer>
    );
};

export default Footer;