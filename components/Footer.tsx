import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer style={{
      position: 'fixed',
      bottom: 0,
      width: '100vw'
    }}>
      <nav className="container">
        <div className="footer__container" style={{ padding: "2rem 0" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span className="footer__brand title-font">Near Fusion</span>
            <span>All rights reserved 2023</span>
          </div>
          <div className="footer__list">
            <Link href="/">
              <a className="footer__link">About Us</a>
            </Link>
            <Link href="/">
              <a className="footer__link">Twitter</a>
            </Link>
            <button className="footer__btn">Join Discord</button>
          </div>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
