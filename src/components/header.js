import React from "react";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";
import { Navbar, Nav } from 'react-bootstrap';
import '../styles/header.css';

import logo from "../../static/logo_rise.png";
import { useEffect } from "react";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname ===rootPath;

  const HeaderLogo = isRootPath === true
  ? <h1 className="my-0"><img src={logo} alt="RISE行政書士事務所のウェブサイトです。" width={160} className="logo" /></h1>
  : <p className="mb-0"><img src={logo} alt="" width={160} className="logo" /></p>;

  // const HeaderClass = isRootPath === true
  // ? 'bg-light'
  // : 'bg-dark';

  const [ headerBgClass, setHeaderBgClass ] = useState('header-transparent');
  const toggleHeaderClass = () => {
    window.scrollY > 120
    ? setHeaderBgClass('header-mainColor')
    : setHeaderBgClass('header-transparent');
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleHeaderClass);
    return () => window.removeEventListener('scroll', toggleHeaderClass);
  },[]);

  return (
    <header id="header" className={`px-4 w-100 position-fixed zindex-fixed ${headerBgClass}`}>
      <Navbar expand="md" variant="dark" className="py-0 d-flex justify-content-between">
        <Navbar.Brand href="/">{HeaderLogo}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive" className="menu px-lg-5">
          <Nav as="ul" className="ml-auto gap-5">
            <Nav.Item as="li"><Link to="/works/">受付業務</Link></Nav.Item>
            <Nav.Item as="li"><Link to="/features/">特徴／実績</Link></Nav.Item>
            <Nav.Item as="li"><Link to="/about/">RISEについて</Link></Nav.Item>
            <Nav.Item as="li"><Link to="/news/">新着情報</Link></Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
};

export default Header;