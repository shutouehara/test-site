import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import CarouselComponent from "../components/carouselComponent";
import ToContact from "../components/toContact";
import "../styles/top.css";

import hero from '../../static/rise_hero.webp';
import serviceIcon from '../../static/serviceIcon.svg';

export default function Home () {

  return (
    <Layout>
      <section className="hero-section position-relative">
        <div className="vh-100 w-100 overflow-hidden">
          <img src={hero} alt="" />
        </div>
        <div className="position-absolute top-50 translate-middle-y end-0 px-5 text-white">
          <h2 className="h1 mb-4 text-shadow">沖縄の発展のために<br />私たちが貢献できること</h2>
          <p className="h5 text-shadow">私たちの仕事は、役所に申請を出して<br />許可をもらうことが最終目的ではない。<br />案件の先に沖縄の発展を意識して、<br />熱心に、そして丁寧に取り組む。</p>
          <Link to="/about">
            <p className="button-white mt-4">RISEについて</p>
          </Link>
        </div>
      </section>
      <section className="my-5 pt-5">
        <h2 className="w-75 mx-auto fw-bold my-4">サービス案内</h2>
        <CarouselComponent />
      </section>
      <section className="features-section my-5 py-4 overflow-hidden">
        <div className="w-75 d-md-flex justify-content-between m-auto">
          <div className="d-inline-block text-center my-auto">
            <h2 className="fw-bold mb-4 text-white text-shadow">RISEの特徴</h2>
            <p>
              <img src={serviceIcon} alt="" width={104} />
            </p>
          </div>
          <div className="white-band position-relative">
            <div className="d-flex justify-content-between gap-5">
              <p className="text-center w-75">明白な業務内容<br />安心の明朗会計</p>
              <p><img src={serviceIcon} alt="" width={80} /></p>
            </div>
            <div className="d-flex justify-content-between gap-5">
              <p className="text-center w-75">業界の経験に基づく<br />多角的な提案</p>
              <p><img src={serviceIcon} alt="" width={80} /></p>
            </div>
            <Link to="/features">
              <p className="button-black mt-4">RISEの特徴</p>
            </Link>
          </div>
        </div>
      </section>
      <section className="achievement-section my-5 py-4 overflow-hidden">
        <div className="w-75 d-md-flex justify-content-between m-auto">
          <div className="white-band position-relative">
            <div className="d-flex justify-content-between gap-5">
              <p className="text-center w-75">明白な業務内容<br />安心の明朗会計</p>
              <p><img src={serviceIcon} alt="" width={80} /></p>
            </div>
            <div className="d-flex justify-content-between gap-5">
              <p className="text-center w-75">業界の経験に基づく<br />多角的な提案</p>
              <p><img src={serviceIcon} alt="" width={80} /></p>
            </div>
            <Link to="/features">
              <p className="button-black mt-4">RISEの実績</p>
            </Link>
          </div>
          <div className="d-inline-block text-center my-auto">
            <h2 className="fw-bold mb-4 text-white text-shadow">RISEの実績</h2>
            <p>
              <img src={serviceIcon} alt="" width={104} />
            </p>
          </div>
        </div>
      </section>
      <section className="top-news-section mb-5">
        <div className="news-index row p-4">
          <div className="col text-center align-self-center">
            <h2 className="d-inline-block m-auto py-3 px-5 fs-1 fw-bold">新着情報</h2>
          </div>
          <div className="col-7 d-grid gap-4">
            <Link to="/">
              <div className="d-flex">
                <p className="news-image m-auto overflow-hidden rounded-circle position-relative">
                  <img src={hero} alt="" className="position-absolute h-100" />
                </p>
                <div className="col-8">
                  <p className="mb-0"><date>2022/10/22</date>　<span>ニュース</span></p>
                  <p>東村の入札参加資格審査申請が始まりました。提出期限は1月11日までです。</p>
                </div>
              </div>
            </Link>
            <Link to="/">
              <div className="d-flex">
                <p className="news-image m-auto overflow-hidden rounded-circle position-relative">
                  <img src={hero} alt="" className="position-absolute h-100" />
                </p>
                <div className="col-8">
                  <p className="mb-0"><date>2022/10/22</date>　<span>ニュース</span></p>
                  <p>東村の入札参加資格審査申請が始まりました。提出期限は1月11日までです。</p>
                </div>
              </div>
            </Link>
            <Link to="/">
              <div className="d-flex">
                <p className="news-image m-auto overflow-hidden rounded-circle position-relative">
                  <img src={hero} alt="" className="position-absolute h-100" />
                </p>
                <div className="col-8">
                  <p className="mb-0"><date>2022/10/22</date>　<span>ニュース</span></p>
                  <p>東村の入札参加資格審査申請が始まりました。提出期限は1月11日までです。</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <ToContact />
    </Layout>
  )
}
