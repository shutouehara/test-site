import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

export default function Freatures () {
  return (
    <Layout>
      <h1>Features.</h1>
      <Link to="/">トップページ</Link>
      <Link to="/works/">受付業務一覧</Link>
      <Link to="/about/">RISE行政書士事務所について（事務所概要）</Link>
      <Link to="/news/">RISE行政書士事務所　新着情報一覧</Link>
      <Link to="/contact/">お問い合わせフォーム</Link>
    </Layout>
  )
}
