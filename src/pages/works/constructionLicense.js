import React from "react";
import { Link } from "gatsby";
import Layout from "../../components/layout";

export default function constructionLicense () {
  return (
    <Layout>
      <div className="child-page-wrapper pt-5">
        <section className="mt-5 p-5">
          <h1 className="pt-5 pb-3 fw-bold ls-4">建設業許可関連</h1>
          <nav>
            <ul className="page-navi-list ps-3">
              <li className="position-relative d-inline-block me-5"><Link to="#application"><span>建設業許可申請</span></Link></li>
              <li className="position-relative d-inline-block"><Link to="#annualReport"><span>年度報告書提出</span></Link></li>
            </ul>
          </nav>
        </section>
        <section id="application" className="scroll-target mt-5 px-5">
          <h2 className="pb-1 border-bottom border-5 border-dark fw-bold">建設業許可申請</h2>

          <h3 className="mt-5 mb-3 position-relative">建設業許可申請について</h3>
          <p>建設業では軽微な工事（請負額 税込500万円未満の工事）を除き、業種ごとに建設業許可を受けなければ工事を請け負うことができません。<br />
          元請や下請けであっても建設業許可が必要となります。</p>

          <p>また、建設業許可は5年に1度の更新が必要です。</p>

          <p>建設業許可申請には要件が定められています。<br />
          要件を満たしているかどうか確認し、必要な書類の作成をRISE行政書士事務所にて承ります。</p>

          <h3 className="mt-5 mb-3 position-relative">建設業許可申請の流れ</h3>
          <ul className="work-flow d-flex justify-content-center list-unstyled text-center my-5">
            <li className="border border-dark rounded-circle d-flex justify-content-center align-items-center position-relative">ご相談</li>
            <li className="border border-dark rounded-circle d-flex justify-content-center align-items-center position-relative">弊社による<br />審査</li>
            <li className="border border-dark rounded-circle d-flex justify-content-center align-items-center position-relative">書類作成</li>
            <li className="border border-dark rounded-circle d-flex justify-content-center align-items-center position-relative">書類提出</li>
            <li className="border border-dark rounded-circle d-flex justify-content-center align-items-center">報酬請求</li>
          </ul>

          <h3 className="mt-5 mb-3 position-relative">建設業許可を取得するとどうなるの？</h3>
          <p>建設業許可を取得すると、次のことが可能となります。</p>
          <ol className="list-has-head">
            <li>
              <h4 className="mt-5 mb-3">500万円以上の工事を請け負うことができる</h4>
              建設工事を請け負うにあたって、建設業許可を取得していなければ500万円（税込）以上の工事を、建築一式工事では1,500万円（税込）以上の工事を請け負うことができないという制限があります。<br />
              建設業許可を取得することで、受注できる工事の金額が上がり、自社の可能性の幅を拡げることが可能となります。
            </li>
            <li>
              <h4 className="mt-5 mb-3">自社の社会的な信用度を高めることができる</h4>
              建設業許可はその信用度の高さが広く認知され、発注者側は「許可業者なら安心できる」と考えられます。建設業許可を取得し、自社の信用度を向上させたり、営業戦略に用いたりすることができます。
            </li>
            <li>
              <h4 className="mt-5 mb-3 ">金融機関から融資を受けやすくなる</h4>
              公的融資制度（低利で固定利率、長期分割弁済といった有利な制度）などにおいて、許認可業種に対する融資の条件として、当該許認可の取得を含めることが多いです。建設業許可によって資金調達・運用が有利になります。
            </li>
            <li>
              <h4 className="mt-5 mb-3">ゼネコンなど大手建設業者と契約を結びやすい</h4>
              建設業許可が必要な工事であるにもかかわらず、許可を得ていない下請業者と請負契約を締結した場合、発注者である建設業者も法による罰則が科されます。<br />
              ゼネコンなどは軽微な工事のみを下請発注する場合でも、実質的には許可業者しか参入させない傾向さえあります。<br />
              個人事業については、財政的な信用度の低さ、一人親方の社会保険未加入問題などの理由で、下請に採用されない場合があります。ゼネコンなどの下請になる目的があれば、事業規模は小さくても法人化して建設業許可を取得する方が望ましいです。
            </li>
            <li>
              <h4 className="mt-5 mb-3">元請として公共工事に参加できる</h4>
              公共工事の元請となるには、建設業許可を取得、さらに経営事項審査を受ける必要があります。軽微な工事のみを受注する場合であっても両方を求められます。<br />
              建設業許可を取得し経営事項審査を受けて、入札へ臨みましょう。
            </li>
          </ol>

          <h3 className="mt-5 mb-3 position-relative">建設業許可申請の要件とは？</h3>

          <h3 className="mt-5 mb-3 position-relative">建設業許可申請に必要な書類は？</h3>

          <h3 className="mt-5 mb-3 position-relative">建設業許可申請の報酬</h3>

        </section>
        <section id="annualReport" className="scroll-target mt-5 px-5">
          <h2 className="pb-1 border-bottom border-5 border-dark fw-bold">建設業　.年度報告書提出</h2>
          <h3 className="mt-5 mb-3 position-relative">年度報告書について</h3>
        </section>
      </div>
    </Layout>
  )
}