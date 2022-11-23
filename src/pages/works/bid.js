import React from "react";
import { Link } from "gatsby";
import Layout from "../../components/layout";
import ToContact from "../../components/toContact";

export default function industrialDisposal () {
  return (
    <Layout>
      <div className="child-page-wrapper pt-5 mb-5">
        <section className="mt-5 p-5">
          <h1 className="pt-5 pb-3 fw-bold ls-4">入札参加資格審査申請　沖縄県</h1>

          <nav className="border rounded p-4">
            <ul className="page-navi-list ps-3 mb-0">
              <li className="position-relative d-inline-block me-5 pe-5"><Link to="#bidFlow"><span>入札参加資格審査申請の流れ</span></Link></li>
              <li className="position-relative d-inline-block me-5 pe-5"><Link to="#bidAbout"><span>入札参加資格審査申請について</span></Link></li>
              <li className="position-relative d-inline-block me-5 pe-5"><Link to="#bidFor"><span>入札参加資格審査申請をするとどうなるの？</span></Link></li>
              <li className="position-relative d-inline-block me-5 pe-5"><Link to="#bidDocuments"><span>入札参加資格審査申請に必要な書類は？</span></Link></li>
              <li className="position-relative d-inline-block"><Link to="#bidFee"><span>入札参加資格審査申請の報酬</span></Link></li>
            </ul>
          </nav>

        </section>

        <section id="bidFlow" className="scroll-target mt-5 px-5 pb-5">
          <h2 className="pb-1 border-bottom border-5 border-dark fw-bold">入札参加資格審査申請の流れ</h2>
          <ul className="work-flow d-flex justify-content-center list-unstyled text-center my-5">
            <li className="border border-dark rounded-circle d-flex justify-content-center align-items-center position-relative">ご相談</li>
            <li className="border border-dark rounded-circle d-flex justify-content-center align-items-center position-relative">弊社による<br />審査</li>
            <li className="border border-dark rounded-circle d-flex justify-content-center align-items-center position-relative">書類作成</li>
            <li className="border border-dark rounded-circle d-flex justify-content-center align-items-center position-relative">書類提出</li>
            <li className="border border-dark rounded-circle d-flex justify-content-center align-items-center position-relative">報酬請求</li>
          </ul>

        </section>

        <section id="bidAbout" className="scroll-target mt-5 px-5 pb-5">
          <h2 className="pb-1 border-bottom border-5 border-dark fw-bold">入札参加資格審査申請について</h2>
          <p>沖縄県が発注する建設工事の入札に参加することを希望する事業者は、入札参加資格審査を申請する必要があります。<br />
          入札参加資格は2年ごとに申請が必要です。<br />
          また、入札参加資格審査を申請するには、建設業許可の取得、経営事項審査を済ませていることが条件となります。</p>
          <p><Link to="/works/constructionLicense/">建設業許可の確認はこちらから</Link></p>
          <p><Link to="/works/managementExamination/">経営事項審査の確認はこちらから</Link></p>

        </section>

        <section id="bidFor" className="scroll-target mt-5 px-5 pb-5">
          <h2 className="pb-1 border-bottom border-5 border-dark fw-bold">入札参加資格審査申請をするとどうなるの？</h2>
          <p>公共工事を入札するための、入札参加資格を取得することができます。</p>

        </section>

        <section id="bidDocuments" className="scroll-target mt-5 px-5 pb-5">
          <h2 className="pb-1 border-bottom border-5 border-dark fw-bold">入札参加資格審査申請に必要な書類は？</h2>
          <p>入札参加資格審査申請に必要な書類は、下記になります。</p>
          <ol className="mt-4 mb-3">
            <li>建設工事入札参加資格審査申請書</li>
            <li>技術職員有資格者名簿</li>
            <li>技術職員の保有資格の合格証明書の写し</li>
            <li>経営規模等評価結果通知書・総合評定値通知書の写し</li>
            <li>建設業許可通知書の写しまたは許可証明書の写し</li>
            <li>建設業労働災害防止協会加入証明書の写し</li>
            <li>県税納税証明書の写し</li>
            <li>国税納税証明書の写し</li>
            <li>障がい者雇用状況報告書の写し</li>
            <li>雇用保険被保険者資格取得等確認通知書（事業主通知用）の写し</li>
            <li>健康保険及び厚生年金保険に係る標準報酬決定通知書等の写し</li>
            <li>社会保険料納入確認書の写し</li>
            <li>労働保険証明書の写し</li>
            <li>建設業退職金共済事業加入・履行証明書の写し</li>
            <li>電子入札システムより出力される利用者情報</li>
            <li>その他</li>
          </ol>

        </section>

        <section id="bidFee" className="scroll-target mt-5 px-5 pb-5">
          <h2 className="pb-1 border-bottom border-5 border-dark fw-bold">入札参加資格審査申請の報酬</h2>
          <ul className="list-has-head pb-5 mb-5">
            <li className="mb-3">
              ¥30,000（税抜）
            </li>
          </ul>

        <hr />
        </section>
      </div>
      <ToContact />
    </Layout>
  )
}