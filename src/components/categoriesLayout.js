import React from "react";
import { Link } from "gatsby";
import Layout from "./layout";
import ToContact from "../components/toContact";
import "../styles/categories-layout.css";

const CategoriesLayout = ({heroImg, h1, description, children}) => {
  return(
    <Layout>
      <section className="hero overflow-hidden mb-5 pb-5 pt-5">
        <div className="row mt-5 pt-5 px-5">
          <div className="col align-self-end hero-image"><img src={heroImg} alt="" /></div>
          <div className="col p-3 hero-title d-grid justify-content-end align-items-center">
            <h1 className="categorys-header fw-bold position-relative">{h1}</h1>
            <p className="text-end fs-4" style={{wordBreak: 'keep-all'}}>{description}</p>
          </div>
        </div>
      </section>
      {children}
      <ToContact />
    </Layout>
  );
};

export default CategoriesLayout;