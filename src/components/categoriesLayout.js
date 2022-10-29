import React from "react";
import { Link } from "gatsby";
import Layout from "./layout";
import "../styles/works-layout.css";

const CategoriesLayout = ({children, h1, heroImg}) => {
  return(
    <Layout>
      <section className="hero position-relative vh-100 overflow-hidden mb-5">
        <div className="p-3 position-absolute hero-title">
          <h1 className="fw-bold text-white">{h1}</h1>
        </div>
        <div className="position-absolute hero-image"><img src={heroImg} alt="" /></div>
      </section>
      {children}
    </Layout>
  );
};

export default CategoriesLayout;