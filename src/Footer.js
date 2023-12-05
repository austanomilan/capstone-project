import React from "react"
import small_logo from "./images/Logo .svg";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <>
        <Helmet>
            <title>Little Lemon</title>
            <meta name="Author" content="Little Lemon"/>
            <meta name="description" content="Newly added dishes"/>
            <meta name="og:title" content="Little Lemon"/>
            <meta name="og:description" content="Eat and place your order for reservstion"/>
            <meta name="og:image" content="https://example.com/one-place-fishing-store.jpg"/>
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Helmet>
        <footer className="">
            <section>
            <div className="company-info">
                <img src={small_logo} alt=""/>
                <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes servred with a modern twist.</p>
            </div>
            <div>
                <h3>Important Links</h3>
            <ul>
                <l><Link to="/homepage">Home</Link></l>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/booking">Reservations</Link></li>
                <li><Link to="/order-online">Order Online</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
            </div>
            <div>
                <h3>Contact</h3>
            <ul>
            <li>Address: <br/> 123 Town Street, Chicago</li>
                <li>Phone: <br/> +00 123 456 789</li>
                <li>Email: <br/> little@lemon.com</li>
            </ul>
            </div>
            <div>
                <h3>Social Media Links</h3>
            <ul>
                <li><Link to="/facebook">Facebook</Link></li>
                <li><Link to="/instagram">Instagram</Link></li>
                <li><Link to="/twitter">Twitter</Link></li>
            </ul>
            </div>
            </section>
        </footer>
        </>
    );
}

export default Footer;