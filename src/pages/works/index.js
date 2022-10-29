import React from "react";
import { Link } from "gatsby";
import CategoriesLayout from "../../components/categoriesLayout";

import heroImg from "../../../static/bookstand-bg.jpg";

export default function Works () {
  return (
    <CategoriesLayout h1="受付業務一覧" heroImg={heroImg}>
      <ul>
        <li>
          <Link to="/">トップページ</Link>
        </li>
        <li>
          <Link to="/features/">RISE行政書士事務所の特徴／RISE行政書士事務所の実績</Link>
        </li>
        <li>
          <Link to="/about/">RISE行政書士事務所について（事務所概要）</Link>
        </li>
        <li>
          <Link to="/news/">RISE行政書士事務所　新着情報一覧</Link>
        </li>
        <li>
          <Link to="/contact/">お問い合わせフォーム</Link>
        </li>
      </ul>
      <hr />
      <ul>
        <li>
          <Link to="/works/constructionLicense/">建設業許可</Link>
        </li>
        <li>
          <Link to="/works/managementExamination/">経営事項審査</Link>
        </li>
        <li>
          <Link to="/works/industrialDisposal/">産廃業許可</Link>
        </li>
        <li>
          <Link to="/works/bid/">入札参加</Link>
        </li>
        <li>
          <Link to="/works/curio/">古物商</Link>
        </li>
      </ul>
    </CategoriesLayout>
  )
}
