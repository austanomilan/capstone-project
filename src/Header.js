import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "./images/photo.jpg";
import { Helmet } from "react-helmet";

const Header = () => {
  return (
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
    <header className="header">
      <section>
        <div className="banner">
          <h2 className="banner-h2">Little Lemon</h2>
          <h3 className="banner-h3">Chicago</h3>
          <p className="banner-p">
            We are a family owned Mediterraneran restaurant, focused on
            traditional recipes servred with a modern twist.
          </p>
          <Link to="/booking">
            <button
              aria-label="On Click"
              className="banner-b"
              style={{
                position: "relative",
                bottom: "4rem",
              }}
            >
              Reserve Table
            </button>
          </Link>
        </div>
        <div className="banner-img">
          <img src={bannerImg} alt="" className="banner-mag" />
        </div>
      </section>
    </header>
    </>
  );
};

export default Header;
