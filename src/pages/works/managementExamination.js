import React from "react";
import { Link } from "gatsby";
import Layout from "../../components/layout";
import ToContact from "../../components/toContact";

export default function constructionLicense () {
  return (
    <Layout>
      <div className="child-page-wrapper pt-5 mb-5">
        <section className="mt-5 p-5">
          <h1 className="pt-5 pb-3 fw-bold ls-4">経営事項審査関連</h1>
          <h2 className="pb-1 border-bottom border-5 border-dark fw-bold">経営規模等評価申請（経審）について</h2>
          <p>経審とは、行政が公共工事を発注できるほどの業者であるかどうかを経営的、技術的に審査する制度です。<br />
              工事の規模などによって、求められる評定値が異なります。<br />
              また、経審の結果通知書には有効期限があります。審査基準日（決算日）より1年７ヶ月の有効期限が切れる前に次の経審を済ませていなければ、入札に参加できなくなります。</p>
          <h2>経審を受けるとどうなるの？</h2>
          <p>経審を受けることで、公共工事を入札するための入札参加資格審査の申請を行うことができます。<br />
              入札参加資格審査申請の前に、必ず経審が済ませておく必要があります。</p>
          <p><Link to="/works/bid/">入札参加資格審査申請の確認はこちらから</Link></p>
          <p>経営規模等評価申請を申請するまでに、経営状況分析を経ている必要があります。<br />
              経営状況分析申請を行ってから、経営規模等評価申請を以って経営事項審査申請となります。</p>
          <nav>
            <ul className="page-navi-list ps-3">
              <li className="position-relative d-inline-block me-5"><Link to="#managementAnalysis"><span>経営状況分析申請</span></Link></li>
              <li className="position-relative d-inline-block"><Link to="#examination"><span>経営規模等評価申請</span></Link></li>
            </ul>
          </nav>
        </section>
        <section id="managementAnalysis" className="scroll-target mt-5 px-5 pb-5">
          <h2 className="pb-1 border-bottom border-5 border-dark fw-bold">経営状況分析申請</h2>

          <p>経営状況分析とは、公共工事を入札しようとする企業を会計的な立場から点数化したもので、行政指定の専門分析機関に申請する必要があります。</p>

          <nav className="border rounded p-4">
            <ul className="page-navi-list ps-3 mb-0">
              <li className="position-relative d-inline-block me-5 pe-5"><Link to="#managementAnalysisFlow"><span>経営状況分析申請の流れ</span></Link></li>
              <li className="position-relative d-inline-block me-5 pe-5"><Link to="#managementAnalysisDocuments"><span>経営状況分析申請に必要な書類は？</span></Link></li>
              <li className="position-relative d-inline-block"><Link to="#managementAnalysisFee"><span>経営状況分析申請の報酬</span></Link></li>
            </ul>
          </nav>

          <h3 id="managementAnalysisFlow" className="scroll-target mt-5 mb-3 position-relative">経営状況分析申請の流れ</h3>
          <ul className="work-flow d-flex justify-content-center list-unstyled text-center my-5">
            <li className="border border-dark rounded-circle d-flex justify-content-center align-items-center position-relative">ご相談</li>
            <li className="border border-dark rounded-circle d-flex justify-content-center align-items-center position-relative">弊社による<br />審査</li>
            <li className="border border-dark rounded-circle d-flex justify-content-center align-items-center position-relative">書類作成</li>
            <li className="border border-dark rounded-circle d-flex justify-content-center align-items-center position-relative">書類提出</li>
            <li className="border border-dark rounded-circle d-flex justify-content-center align-items-center position-relative">報酬請求</li>
          </ul>

          <h3 id="managementAnalysisDocuments" className="scroll-target mt-5 mb-3 position-relative">経営状況分析申請に必要な書類は？</h3>
          <p>次の書類を準備していただきます。</p>
          <ol className="mt-4 mb-3">
            <li>経営状況分析申請書</li>
            <li>審査基準日直前1年分の財務諸表等</li>
            <li>減価償却実施額を確認できる書類</li>
            <li>建設業許可通知書の写し、または建設業許可証明書の写し</li>
          </ol>

          <h3 id="managementAnalysisFee" className="scroll-target mt-5 mb-3 position-relative">経営状況分析申請の報酬</h3>
          <ul className="list-has-head">
            <li className="mb-3">
              <h4>法人 / 個人</h4>
              ¥15,000（税抜）
            </li>
          </ul>

        </section>
        <section id="examination" className="scroll-target mt-5 px-5 pb-5">
          <h2 className="pb-1 border-bottom border-5 border-dark fw-bold">経営規模等評価申請</h2>

          <p>経営規模等評価とは、公共工事を入札しようとする企業の経営規模、技術力、社会性を数値によって表したものです。
経営規模等評価結果から会社の状態を把握し、経営事項審査を進めます。</p>

          <nav className="border rounded p-4">
            <ul className="page-navi-list ps-3 mb-0">
              <li className="position-relative d-inline-block me-5 pe-5"><Link to="#examinationFlow"><span>経営規模等評価申請の流れ</span></Link></li>
              <li className="position-relative d-inline-block me-5 pe-5"><Link to="#examinationDocuments"><span>経営規模等評価申請に必要な書類は？</span></Link></li>
              <li className="position-relative d-inline-block"><Link to="#examinationFee"><span>経営規模等評価申請の報酬</span></Link></li>
            </ul>
          </nav>

          <h3 id="examinationFlow" className="scroll-target mt-5 mb-3 position-relative">経営規模等評価申請の流れ</h3>
          <ul className="work-flow d-flex justify-content-center list-unstyled text-center my-5">
            <li className="border border-dark rounded-circle d-flex justify-content-center align-items-center position-relative">ご相談</li>
            <li className="border border-dark rounded-circle d-flex justify-content-center align-items-center position-relative">弊社による<br />審査</li>
            <li className="border border-dark rounded-circle d-flex justify-content-center align-items-center position-relative">書類作成</li>
            <li className="border border-dark rounded-circle d-flex justify-content-center align-items-center position-relative">書類提出</li>
            <li className="border border-dark rounded-circle d-flex justify-content-center align-items-center position-relative">報酬請求</li>
          </ul>

          <h3 id="examinationDocuments" className="scroll-target mt-5 mb-3 position-relative">経営規模等評価申請に必要な書類は？</h3>
          <p>許可申請に必要な書類は、県の定める様式に沿って作成する必要があります。<br />
          どの書類が必要か、何を準備すればよいか、ご相談時に確認させていただきます。</p>

          <h3 id="examinationFee" className="scroll-target mt-5 mb-3 position-relative">経営規模等評価申請の報酬</h3>
          <ul className="list-has-head">
            <li className="mb-3">
              <h4>法人 / 個人</h4>
              ¥45,000（税抜）〜
            </li>
          </ul>

        <hr />
        </section>
      </div>
      <ToContact />
    </Layout>
  )
}