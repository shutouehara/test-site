import React from "react";
import CategoriesLayout from "../../components/categoriesLayout";
import { Link } from "gatsby";

import heroImg from "../../../static/relux-bg.jpg";

export default function News () {
  return (
    <CategoriesLayout heroImg={heroImg} h1="新着情報" description="RISE行政書士事務所の営業案内や　提出に関する情報などを掲載しています。" >
      <section className="news-list-grid d-grid position-relative">
        <div className="news-list-head position-sticky d-flex flex-wrap align-content-center p-5">
          <p className="w-100 fs-2 fw-bold text-center mb-0">News</p>
          <p className="w-100 text-center">新着情報一覧</p>
        </div>
        <div className="news-list p-5 d-grid gap-5">
          <Link to="/">
            <div className="d-flex">
              <p className="news-image m-auto overflow-hidden rounded-circle position-relative">
                <img src={heroImg} alt="" className="position-absolute h-100" />
              </p>
              <div className="col-10">
                <p className="mb-0"><date>2022/10/22</date>　<span>ニュース</span></p>
                <p>東村の入札参加資格審査申請が始まりました。提出期限は1月11日までです。</p>
              </div>
            </div>
          </Link>
          <Link to="/">
            <div className="d-flex">
              <p className="news-image m-auto overflow-hidden rounded-circle position-relative">
                <img src={heroImg} alt="" className="position-absolute h-100" />
              </p>
              <div className="col-10">
                <p className="mb-0"><date>2022/10/22</date>　<span>ニュース</span></p>
                <p>東村の入札参加資格審査申請が始まりました。提出期限は1月11日までです。東村の入札参加資格審査申請が始まりました。提出期限は1月11日までです。東村の入札参加資格審査申請が始まりました。提出期限は1月11日までです。</p>
              </div>
            </div>
          </Link>
          <Link to="/">
            <div className="d-flex">
              <p className="news-image m-auto overflow-hidden rounded-circle position-relative">
                <img src={heroImg} alt="" className="position-absolute h-100" />
              </p>
              <div className="col-10">
                <p className="mb-0"><date>2022/10/22</date>　<span>ニュース</span></p>
                <p>東村の入札参加資格審査申請が始まりました。提出期限は1月11日までです。東村の入札参加資格審査申請が始まりました。提出期限は1月11日までです。東村の入札参加資格審査申請が始まりました。提出期限は1月11日までです。東村の入札参加資格審査申請が始まりました。提出期限は1月11日までです。</p>
              </div>
            </div>
          </Link>
          <Link to="/">
            <div className="d-flex">
              <p className="news-image m-auto overflow-hidden rounded-circle position-relative">
                <img src={heroImg} alt="" className="position-absolute h-100" />
              </p>
              <div className="col-10">
                <p className="mb-0"><date>2022/10/22</date>　<span>ニュース</span></p>
                <p>東村の入札参加資格審査申請が始まりました。提出期限は1月11日までです。東村の入札参加資格審査申請が始まりました。提出期限は1月11日までです。東村の入札参加資格審査申請が始まりました。提出期限は1月11日までです。</p>
              </div>
            </div>
          </Link>
          <Link to="/">
            <div className="d-flex">
              <p className="news-image m-auto overflow-hidden rounded-circle position-relative">
                <img src={heroImg} alt="" className="position-absolute h-100" />
              </p>
              <div className="col-10">
                <p className="mb-0"><date>2022/10/22</date>　<span>ニュース</span></p>
                <p>東村の入札参加資格審査申請が始まりました。提出期限は1月11日までです。東村の入札参加資格審査申請が始まりました。提出期限は1月11日までです。東村の入札参加資格審査申請が始まりました。提出期限は1月11日までです。東村の入札参加資格審査申請が始まりました。提出期限は1月11日までです。</p>
              </div>
            </div>
          </Link>
          <Link to="/">
            <div className="d-flex">
              <p className="news-image m-auto overflow-hidden rounded-circle position-relative">
                <img src={heroImg} alt="" className="position-absolute h-100" />
              </p>
              <div className="col-10">
                <p className="mb-0"><date>2022/10/22</date>　<span>ニュース</span></p>
                <p>東村の入札参加資格審査申請が始まりました。提出期限は1月11日までです。東村の入札参加資格審査申請が始まりました。提出期限は1月11日までです。東村の入札参加資格審査申請が始まりました。提出期限は1月11日までです。</p>
              </div>
            </div>
          </Link>
          <Link to="/">
            <div className="d-flex">
              <p className="news-image m-auto overflow-hidden rounded-circle position-relative">
                <img src={heroImg} alt="" className="position-absolute h-100" />
              </p>
              <div className="col-10">
                <p className="mb-0"><date>2022/10/22</date>　<span>ニュース</span></p>
                <p>東村の入札参加資格審査申請が始まりました。提出期限は1月11日までです。東村の入札参加資格審査申請が始まりました。提出期限は1月11日までです。東村の入札参加資格審査申請が始まりました。提出期限は1月11日までです。東村の入札参加資格審査申請が始まりました。提出期限は1月11日までです。</p>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </CategoriesLayout>
  )
}
