import React from "react";
import { Link } from "gatsby";
import Layout from "../../components/layout";
import ToContact from "../../components/toContact";

export default function industrialDisposal () {
  return (
    <Layout>
      <div className="child-page-wrapper pt-5 mb-5">
        <section className="mt-5 p-5">
          <h1 className="pt-5 pb-3 fw-bold ls-4">産業廃棄物収集運搬業許可</h1>

          <nav className="border rounded p-4">
            <ul className="page-navi-list ps-3 mb-0">
              <li className="position-relative d-inline-block me-5 pe-5"><Link to="#industrialDisposalFlow"><span>産業廃棄物収集運搬業許可申請の流れ</span></Link></li>
              <li className="position-relative d-inline-block me-5 pe-5"><Link to="#industrialDisposalAbout"><span>産業廃棄物収集運搬業許可申請について</span></Link></li>
              <li className="position-relative d-inline-block me-5 pe-5"><Link to="#industrialDisposalFor"><span>産業廃棄物収集運搬業許可を取得するとどうなるの？</span></Link></li>
              <li className="position-relative d-inline-block me-5 pe-5"><Link to="#industrialDisposalDocuments"><span>産業廃棄物収集運搬業許可申請に必要な書類は？</span></Link></li>
              <li className="position-relative d-inline-block"><Link to="#industrialDisposalFee"><span>産業廃棄物収集運搬業許可申請の報酬</span></Link></li>
            </ul>
          </nav>

        </section>

        <section id="industrialDisposalFlow" className="scroll-target mt-5 px-5 pb-5">
          <h2 className="pb-1 border-bottom border-5 border-dark fw-bold">産業廃棄物収集運搬業許可申請の流れ</h2>
          <ul className="work-flow d-flex justify-content-center list-unstyled text-center my-5">
            <li className="border border-dark rounded-circle d-flex justify-content-center align-items-center position-relative">ご相談</li>
            <li className="border border-dark rounded-circle d-flex justify-content-center align-items-center position-relative">弊社による<br />審査</li>
            <li className="border border-dark rounded-circle d-flex justify-content-center align-items-center position-relative">書類作成</li>
            <li className="border border-dark rounded-circle d-flex justify-content-center align-items-center position-relative">書類提出</li>
            <li className="border border-dark rounded-circle d-flex justify-content-center align-items-center position-relative">報酬請求</li>
          </ul>

        </section>

        <section id="industrialDisposalAbout" className="scroll-target mt-5 px-5 pb-5">
          <h2 className="pb-1 border-bottom border-5 border-dark fw-bold">産業廃棄物収集運搬業許可申請について</h2>
          <p>産業廃棄物収集運搬業許可とは、産業廃棄物を処理するために収集運搬することを事業として行う場合に必要とされる許可です。<br />
          取り扱う廃棄物の種類、業務に従事する作業員の内訳、使用する機材や土地などを県に申請します。</p>

        </section>

        <section id="industrialDisposalFor" className="scroll-target mt-5 px-5 pb-5">
          <h2 className="pb-1 border-bottom border-5 border-dark fw-bold">産業廃棄物収集運搬業許可を取得するとどうなるの？</h2>
          <p>建設現場で生まれるゴミや汚泥を収集し運搬することを工事案件に含めることが可能となります。<br />
          これにより、廃棄物の運搬まで自社業務に含めることができます。</p>
          <p>産業廃棄物収集運搬業については、委託であっても、許可を取得してない業者に委託した場合に罰金や懲役などが科されます。</p>

        </section>

        <section id="industrialDisposalDocuments" className="scroll-target mt-5 px-5 pb-5">
          <h2 className="pb-1 border-bottom border-5 border-dark fw-bold">経営規模等評価申請に必要な書類は？</h2>
          <p>許可申請に必要な書類は、県の定める様式に沿って作成する必要があります。<br />
          どの書類が必要か、何を準備すればよいか、ご相談時に確認させていただきます。</p>

        </section>

        <section id="industrialDisposalFee" className="scroll-target mt-5 px-5 pb-5">
          <h2 className="pb-1 border-bottom border-5 border-dark fw-bold">経営状況分析申請の報酬</h2>
          <ul className="list-has-head pb-5 mb-5">
            <li className="mb-3">
              <h4>法人 / 個人</h4>
              ¥15,000（税抜）
            </li>
          </ul>

        <hr />
        </section>
      </div>
      <ToContact />
    </Layout>
  )
}