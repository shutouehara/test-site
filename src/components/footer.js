import React from "react";
import { Link } from "gatsby";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="pt-4">
      <div className="row mb-4">
        <p className="col text-center">
          <Link to="/privacy-policy/">プライバシーポリシー</Link>
        </p>
        <p className="col text-center">
          <Link to="/disclaimer/">免責事項</Link>
        </p>
        <p className="col text-center">
          <Link to="/">トップページ</Link>
        </p>
      </div>
      <p className="text-center mb-0 fw-light">&copy; {new Date().getFullYear()} rise-okinawa.com</p>
    </footer>
  )
};

export default Footer;