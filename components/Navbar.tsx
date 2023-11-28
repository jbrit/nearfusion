import React from "react";
import Link from "next/link";

type Props = {};
const Navbar = (props: Props) => {
  return (
    <nav className="navbar">
      <div className="container navbar__container">
        <Link href="/">
          <span className="navbar__brand title-font">NearFusion</span>
        </Link>
        <div className="navbar__list">
          <Link href="/">
            <a className="navbar__link">
              Let&apos;s get tracking
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
