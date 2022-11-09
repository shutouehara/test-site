import React from "react";
import { Link } from "gatsby";
import "../styles/contactComponentLayout.css";

import logo from "../../static/logo_rise.png";

const ToContact = () => {
  return (
    <section className="my-5 py-5">
      <div className="d-flex justify-content-center gap-5 m-auto">
        <p className="mb-0"><img src={logo} alt="" width={160} /></p>
        <p className="align-self-center fs-5 mb-0">沖縄の発展のために</p>
      </div>
      <p className="text-center my-4 fw-bold fs-5">RISE行政書士事務所</p>
      <div className="my-5 mx-auto p-5 w-50 border border-dark rounded">
        <p className="fs-3 mb-1">お問い合わせ</p>
        <p>初回のご相談に費用は一切かかりません。お気軽にお問合せください。</p>
        <dl className="my-5">
          <dt>事務所所在地</dt>
          <dd className="mb-3"><a href="https://goo.gl/maps/LEvVgpmkqenvFPUx6" target="_blank" rel="noopener noreferrer" className="has-under-line">〒900-0021<br />沖縄県那覇市泉崎1-8-8 泉崎マンション302号</a></dd>
          <dt>電話番号</dt>
          <dd className="mb-3">098-917-5874</dd>
          <dt>FAX</dt>
          <dd className="mb-3">098-917-5875</dd>
          <dt>メールアドレス</dt>
          <dd className="mb-3">
            <div className="d-grid to-contact align-items-center">
              <p><a href="mailto:gsl.uehara@rising.okinawa" target="_blank" rel="noopener noreferrer" className="has-under-line">gsl.uehara@rising.okinawa</a></p>
              <Link to="/contact">
                <p className="button-black">お問い合わせを入力する</p>
              </Link>
            </div>
          </dd>
        </dl>
      </div>
    </section>
  );
}

export default ToContact;