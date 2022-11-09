import React from "react";
import { Link } from "gatsby";
import CategoriesLayout from "../../components/categoriesLayout";

import heroImg from "../../../static/bookstand-bg.jpg";

export default function Works () {
  return (
    <CategoriesLayout heroImg={heroImg} h1="受付業務" description="RISE行政書士事務所では、次の業務を承っています。" >
      <section className="m-5 pb-5">
        <h2 className="text-end mb-5"><p className="px-5 fs-2">受付業務一覧</p></h2>
        <ul className="ms-auto row gap-3 text-center w-75 list-unstyled mb-5">
          <li className="col">
            <Link to="#constructionLicense">
              <p className="button-black py-3 px-2">建設業許可</p>
            </Link>
          </li>
          <li className="col">
            <Link to="#managementExamination">
              <p className="button-black py-3 px-2">経営事項審査</p>
            </Link>
          </li>
          <li className="col">
            <Link to="#bid">
              <p className="button-black py-3 px-2">入札参加</p>
            </Link>
          </li>
        </ul>
        <ul className="ms-auto row gap-3 text-center w-75 list-unstyled mb-5">
          <li className="col"></li>
          <li className="col">
            <Link to="#industrialDisposal">
              <p className="button-black py-3 px-2">産業廃棄物収集運搬業許可</p>
            </Link>
          </li>
          <li className="col">
            <Link to="#others">
              <p className="button-black py-3 px-2">その他</p>
            </Link>
          </li>
        </ul>
      </section>
      <section id="constructionLicense" className="mt-5 mx-5 p-5">
        <div className="w-75">
          <h2 className="mb-4">建設業許可</h2>
          <p className="mb-0"><Link className="has-under-line" to="/works/constructionLicense/">建設業許可関連</Link></p>
          <ul>
            <li><Link className="has-under-line" to="/works/constructionLicense/#apply">建設業許可申請について</Link></li>
            <li><Link className="has-under-line" to="/works/constructionLicense/#reports">年度報告書について</Link></li>
            <li></li>
          </ul>
        </div>
      </section>
      <section id="managementExamination" className="mx-5 p-5">
        <div className="w-75">
          <h2 className="mb-4">経営事項審査</h2>
          <p className="mb-0"><Link className="has-under-line" to="/works/managementExamination/">経営規模等評価申請関連</Link></p>
          <ul>
            <li><Link className="has-under-line" to="/works/managementExamination/#analytics">経営状況分析申請</Link></li>
            <li></li>
          </ul>
        </div>
      </section>
      <section id="bid" className="mx-5 p-5">
        <div className="w-75">
          <h2 className="mb-4">入札参加</h2>
          <p className="mb-0"><Link className="has-under-line" to="/works/bid/">入札参加関連</Link></p>
          <ul>
            <li><Link className="has-under-line" to="/works/bid/#consultant">工事、測量及び建設コンサルタントについて</Link></li>
            <li><Link className="has-under-line" to="/works/bid/#objects">物品、役務業について</Link></li>
            <li></li>
          </ul>
        </div>
      </section>
      <section id="industrialDisposal" className="mx-5 p-5">
        <div className="w-75">
          <h2 className="mb-4">産業廃棄物収集運搬業許可</h2>
          <p className="mb-0"><Link className="has-under-line" to="/works/industrialDisposal/">産業廃棄物収集運搬業許可</Link></p>
        </div>
      </section>
      <section id="others" className="mx-5 mb-5 p-5">
        <div className="w-75">
          <h2 className="mb-4">その他</h2>
        <p>建設業務に関わる農地法関連、古物商関連など</p>
        </div>
      </section>
    </CategoriesLayout>
  )
}
