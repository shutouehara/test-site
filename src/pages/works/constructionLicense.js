import React from "react";
import { Link } from "gatsby";
import Layout from "../../components/layout";
import ToContact from "../../components/toContact";

export default function constructionLicense () {
  return (
    <Layout>
      <div className="child-page-wrapper pt-5 mb-5">
        <section className="mt-5 p-5">
          <h1 className="pt-5 pb-3 fw-bold ls-4">建設業許可関連</h1>
          <nav>
            <ul className="page-navi-list ps-3">
              <li className="position-relative d-inline-block me-5"><Link to="#application"><span>建設業許可申請</span></Link></li>
              <li className="position-relative d-inline-block"><Link to="#annualReport"><span>年度報告書提出</span></Link></li>
            </ul>
          </nav>
        </section>
        <section id="application" className="scroll-target mt-5 px-5 pb-5">
          <h2 className="pb-1 border-bottom border-5 border-dark fw-bold">建設業許可申請</h2>

          <h3 className="mt-5 mb-3 position-relative">建設業許可申請について</h3>
          <p>建設業では軽微な工事（請負額 税込500万円未満の工事）を除き、業種ごとに建設業許可を受けなければ工事を請け負うことができません。<br />
          元請や下請けであっても建設業許可が必要となります。</p>
          <p>また、建設業許可は5年に1度の更新が必要です。</p>
          <p>建設業許可申請には要件が定められています。<br />
          要件を満たしているかどうか確認し、必要な書類の作成をRISE行政書士事務所にて承ります。</p>

          <nav className="border rounded p-4">
            <ul className="page-navi-list ps-3 mb-0">
              <li className="position-relative d-inline-block me-5 pe-5"><Link to="#applicationFlow"><span>建設業許可申請の流れ</span></Link></li>
              <li className="position-relative d-inline-block me-5 pe-5"><Link to="#applicationResults"><span>建設業許可を取得するとどうなるの？</span></Link></li>
              <li className="position-relative d-inline-block me-5 pe-5"><Link to="#applicationRequirements"><span>建設業許可申請の要件は？</span></Link></li>
              <li className="position-relative d-inline-block me-5 pe-5"><Link to="#applicationDocuments"><span>建設業許可申請に必要な書類は？</span></Link></li>
              <li className="position-relative d-inline-block"><Link to="#applicationFee"><span>建設業許可申請の報酬</span></Link></li>
            </ul>
          </nav>

          <h3 id="applicationFlow" className="scroll-target mt-5 mb-3 position-relative">建設業許可申請の流れ</h3>
          <ul className="work-flow d-flex justify-content-center list-unstyled text-center my-5">
            <li className="border border-dark rounded-circle d-flex justify-content-center align-items-center position-relative">ご相談</li>
            <li className="border border-dark rounded-circle d-flex justify-content-center align-items-center position-relative">弊社による<br />審査</li>
            <li className="border border-dark rounded-circle d-flex justify-content-center align-items-center position-relative">書類作成</li>
            <li className="border border-dark rounded-circle d-flex justify-content-center align-items-center position-relative">書類提出</li>
            <li className="border border-dark rounded-circle d-flex justify-content-center align-items-center position-relative">報酬請求</li>
          </ul>

          <h3 id="applicationResults" className="scroll-target mt-5 mb-3 position-relative">建設業許可を取得するとどうなるの？</h3>
          <p>建設業許可を取得すると、次のような利点を享受できます。</p>

          <nav className="mb-5">
            <ul className="page-navi-list">
              <li className="position-relative"><Link to="#applicationResult1"><span>500万円以上の工事を請け負うことができる</span></Link></li>
              <li className="position-relative"><Link to="#applicationResult2"><span>自社の社会的な信用度を高めることができる</span></Link></li>
              <li className="position-relative"><Link to="#applicationResult3"><span>金融機関から融資を受けやすくなる</span></Link></li>
              <li className="position-relative"><Link to="#applicationResult4"><span>ゼネコンなど大手建設業者と契約を結びやすい</span></Link></li>
              <li className="position-relative"><Link to="#applicationResult5"><span>元請として公共工事に参加できる</span></Link></li>
            </ul>
          </nav>

          <ol className="list-has-head">
            <li id="applicationResult1" className="scroll-target">
              <h4 className="mt-3 mb-3">500万円以上の工事を請け負うことができる</h4>
              建設工事を請け負うにあたって、建設業許可を取得していなければ500万円（税込）以上の工事を、建築一式工事では1,500万円（税込）以上の工事を請け負うことができないという制限があります。<br />
              建設業許可を取得することで、受注できる工事の金額が上がり、自社の可能性の幅を拡げることが可能となります。
            </li>
            <li id="applicationResult2" className="scroll-target">
              <h4 className="mt-3 mb-3">自社の社会的な信用度を高めることができる</h4>
              建設業許可はその信用度の高さが広く認知され、発注者側は「許可業者なら安心できる」と考えられます。建設業許可を取得し、自社の信用度を向上させたり、営業戦略に用いたりすることができます。
            </li>
            <li id="applicationResult3" className="scroll-target">
              <h4 className="mt-3 mb-3 ">金融機関から融資を受けやすくなる</h4>
              公的融資制度（低利で固定利率、長期分割弁済といった有利な制度）などにおいて、許認可業種に対する融資の条件として、当該許認可の取得を含めることが多いです。建設業許可によって資金調達・運用が有利になります。
            </li>
            <li id="applicationResult4" className="scroll-target">
              <h4 className="mt-3 mb-3">ゼネコンなど大手建設業者と契約を結びやすい</h4>
              建設業許可が必要な工事であるにもかかわらず、許可を得ていない下請業者と請負契約を締結した場合、発注者である建設業者も法による罰則が科されます。<br />
              ゼネコンなどは軽微な工事のみを下請発注する場合でも、実質的には許可業者しか参入させない傾向さえあります。<br />
              個人事業については、財政的な信用度の低さ、一人親方の社会保険未加入問題などの理由で、下請に採用されない場合があります。ゼネコンなどの下請になる目的があれば、事業規模は小さくても法人化して建設業許可を取得する方が望ましいです。
            </li>
            <li id="applicationResult5" className="scroll-target">
              <h4 className="mt-3 mb-3">元請として公共工事に参加できる</h4>
              公共工事の元請となるには、建設業許可を取得、さらに経営事項審査を受ける必要があります。軽微な工事のみを受注する場合であっても両方を求められます。<br />
              建設業許可を取得し経営事項審査を受けて、入札へ臨みましょう。
            </li>
          </ol>

          <h3 id="applicationRequirements" className="scroll-target mt-5 mb-3 position-relative">建設業許可申請の要件は？</h3>
          <p>建設業許可を取得するためには、下記5項目の要件を満たしている必要があります。</p>
          <nav>
            <ul className="page-navi-list ps-3">
              <li className="position-relative d-inline-block me-5 pe-5"><Link to="#applicationRequirement1"><span>経営業務管理責任者がいること</span></Link></li>
              <li className="position-relative d-inline-block me-5 pe-5"><Link to="#applicationRequirement2"><span>専任の技術者がいること</span></Link></li>
              <li className="position-relative d-inline-block me-5 pe-5"><Link to="#applicationRequirement3"><span>請負契約に関して誠実であること</span></Link></li>
              <li className="position-relative d-inline-block me-5 pe-5"><Link to="#applicationRequirement4"><span>財産的基礎または金銭的信用があること</span></Link></li>
              <li className="position-relative d-inline-block"><Link to="#applicationRequirement5"><span>欠格要件に該当しないこと</span></Link></li>
            </ul>
          </nav>
          <ol className="list-has-head">
            <li id="applicationRequirement1" className="scroll-target mt-5 mb-3">
              <h4>経営業務管理責任者がいること</h4>
              次のいずれかの体制を有している必要があります。
              <ul className="mb-3">
                <li className="mt-3 mb-3">
                  <h5>常勤役員のうち１人が、次のいずれかに該当すること。（個人である場合は事業主または支配人が対象）</h5>
                  <ul>
                    <li>建設業に関わる５年以上の経営業務管理責任者としての経験を有している。</li>
                    <li>または、建設業に関わる経営業務管理責任者に準ずる地位として、5年以上経営業務を管理した経験を有している。</li>
                    <li>または、建設業に関わる経営業務管理責任者に準ずる地位として、6年以上経営業務の管理責任者を補助する業務に従事した経験を有している。</li>
                  </ul>
                </li>
                <li className="mb-3">
                  <h5>常勤役員のうち１人が、次のいずれかに該当すること。（個人である場合は事業主または支配人が対象）</h5>
                  <ul className="mb-3">
                    <li>建設業に関わる2年以上の役員としての経験かつ５年以上の役員等または役員等に次ぐ職制上の地位としての経験を有している。</li>
                    <li>または5年以上役員等としての経験を有し、建設業に関わる2年以上の役員等としての経験を有していること。</li>
                  </ul>
                  加えて、常勤役員を直接に補佐する者として下記をそれぞれ設置していること。<br />
                  財務管理の経験、労務管理の経験、運営業務の経験を5年以上有していること。
                </li>
              </ul>
              ※常勤とは
              社会保険（健康保険、厚生年金保険）、雇用保険の加入者のことを指しています。
            </li>
            <li id="applicationRequirement2" className="scroll-target mt-3 mb-3">
              <h4>専任の技術者がいること</h4>
              許可を受けて建設業を営もうとする全ての営業所ごとに、一定の資格・実務経験をもつ専任の技術者を常勤で置く必要があります。<br />
              なお、土木工事業、建設工事業、電気工事業、管工事業、鋼構造物工事業、ほ装工事業、造園工事業の7業種は指定建設業として指定されており、特定建設業の許可を受けようとする場合は、国土交通大臣が定める国家資格者を営業所に置く必要があります。
            </li>
            <li id="applicationRequirement3" className="scroll-target mt-3 mb-3">
              <h4>請負契約に関して誠実であること</h4>
              許可を受けようとする法人、その役員、その支店又は営業所の代表者が、個人の場合は本人または支配人が、請負契約に関して不正または不誠実な行為をしたとされる記録がなければ問題ないです。
            </li>
            <li id="applicationRequirement4" className="scroll-target mt-3 mb-3">
              <h4>財産的基礎または金銭的信用があること</h4>
              一般建設業の許可を受ける場合と、特定建設業の許可を受ける場合のそれぞれに基準が定められています。
              <ul>
                <li className="mt3 mb-3">
                  <h5>一般建設業の許可を受ける場合</h5>
                  500万円以上の資金を調達する能力を有していること等。<br />
                  または、許可申請直前に過去5年間許可を受けて、継続して営業した実績を有していること。
                </li>
                <li>
                  <h5>特定建設業の許可を受ける場合</h5>
                  次のすべてに該当していること
                  <ul className="mt3">
                    <li>欠損の額が資本金の額の２０％を越えていない。</li>
                    <li>流動比率が75％以上である。</li>
                    <li>資本金の額が2,000万円以上であり、かつ、自己資本の額が4,000万円以上である。</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li id="applicationRequirement5" className="scroll-target mt-3 mb-3">
              <h4>欠格要件に該当しないこと</h4>
              建設業法第8条に該当しないこと。
            </li>
          </ol>

          <h3 id="applicationDocuments" className="scroll-target mt-5 mb-3 position-relative">建設業許可申請に必要な書類は？</h3>
          <p>許可申請に必要な書類は、県の定める様式に沿って作成する必要があります。<br />
          どの書類が必要か、何を準備すればよいか、ご相談時に確認させていただきます。</p>

          <h3 id="applicationFee" className="scroll-target mt-5 mb-3 position-relative">建設業許可申請の報酬</h3>
          <ul className="list-has-head">
            <li className="mb-3">
              <h4>新規</h4>
              <ul>
                <li>
                  <h5>法人</h5>
                  ¥120,000（税抜）〜
                </li>
                <li>
                  <h5>個人</h5>
                  ¥100,000（税抜）〜
                </li>
              </ul>
            </li>
            <li className="mb-5">
              <h4>更新</h4>
              <ul>
                <li>
                  <h5>法人 / 個人</h5>
                  ¥50,000（税抜）
                </li>
              </ul>
            </li>
          </ul>

        <div className="my-5">
          <Link to="/contact">
            <p className="button-black">建設業許可申請について問い合わせてみる</p>
          </Link>
        </div>

        </section>

        <section id="annualReport" className="scroll-target mt-5 px-5 pb-5">
          <h2 className="pb-1 border-bottom border-5 border-dark fw-bold">建設業　年度報告書提出</h2>

          <h3 className="mt-5 mb-3 position-relative">年度報告書について</h3>
          <p>建設業許可を受けた事業者は、毎年期日までに年度報告書を県に提出する必要があります。<br />
              期限は、事業年度終了後から4ヶ月以内。<br />
              12月末決算の場合は翌年の4月末が期限に、3月末決算の場合は7月末が期限になります。</p>

          <nav className="border rounded p-4">
            <ul className="page-navi-list ps-3 mb-0">
              <li className="position-relative d-inline-block me-5 pe-5"><Link to="#annualReportFlow"><span>年度報告書提出の流れ</span></Link></li>
              <li className="position-relative d-inline-block me-5 pe-5"><Link to="#annualReportResults"><span>年度報告書の提出を怠るとどうなるの？</span></Link></li>
              <li className="position-relative d-inline-block me-5 pe-5"><Link to="#annualReportDocuments"><span>年度報告書作成に必要な書類は？</span></Link></li>
              <li className="position-relative d-inline-block"><Link to="#annualReportFee"><span>年度報告書提出の報酬</span></Link></li>
            </ul>
          </nav>

          <h3 id="annualReportFlow" className="scroll-target mt-5 mb-3 position-relative">年度報告書提出の流れ</h3>
          <ul className="work-flow d-flex justify-content-center list-unstyled text-center my-5">
            <li className="border border-dark rounded-circle d-flex justify-content-center align-items-center position-relative">ご相談</li>
            <li className="border border-dark rounded-circle d-flex justify-content-center align-items-center position-relative">弊社による<br />審査</li>
            <li className="border border-dark rounded-circle d-flex justify-content-center align-items-center position-relative">書類作成</li>
            <li className="border border-dark rounded-circle d-flex justify-content-center align-items-center position-relative">書類提出</li>
            <li className="border border-dark rounded-circle d-flex justify-content-center align-items-center position-relative">報酬請求</li>
          </ul>

          <h3 id="annualReportResults" className="scroll-target mt-5 mb-3 position-relative">年度報告書の提出を怠るとどうなるの？</h3>
          <ol className="list-has-head">
            <li>
              <h4>建設業許可の更新や業種追加手続きができなくなる。</h4>
              建設業許可は5年に1度更新が必要となります。その際、年度報告書の未提出が確認されると、建設業許可の更新手続きができない場合があります。<br />
              また、許可業種の追加申請の際にも、年度報告書の未提出が原因で受け付けてもらえない場合があります。
            </li>
            <li>
              <h4>取引先や銀行への業績証明が不可能となり、信用を損なう。</h4>
              年度報告書を提出しない場合、取引先が行政を通して業務状況や業績情報を確認することができません。<br />
              年度報告書を提出することで、自社の財務状態や雇用管理の状態を公的に示すことができます。
            </li>
          </ol>

          <h3 id="annualReportDocuments" className="scroll-target mt-5 mb-3 position-relative">年度報告書作成に必要な書類は？</h3>
          <p>年度報告書の作成に必要な書類は、下記になります。</p>
          <ol className="mt-4 mb-3">
            <li>工事経歴書</li>
            <li>直前３年の各事業年度における工事施工金額</li>
            <li>財務諸表</li>
            <li>事業報告書（法人のみ）</li>
            <li>沖縄県事業税納税証明書</li>
            <li>使用人数（変更がなければ省略可能）</li>
            <li>国納税証明書 様式その1（消費税及び地方消費税）※経営事項審査を受審する方のみ</li>
          </ol>
          <p>上記に加えて、提出時に下記の書類も持参・提示する必要があります。</p>
          <ol className="mt-4">
            <li>工事経歴書に記載された工事に係る請負金額上位3件の「契約書」（写）又は「注文書及び請書」（写）等</li>
            <li>建設業許可通知書（写）（変更事項があった場合は、変更届の控も必要）</li>
            <li>前期分の事業年度報告書の控</li>
            <li>法人税確定申告書一式／所得税確定申告書一式</li>
            <li>消費税の確定申告書</li>
          </ol>

          <h3 id="annualReportFee" className="scroll-target mt-5 mb-3 position-relative">年度報告書提出の報酬</h3>
          <ul className="list-has-head mb-5">
            <li className="mb-3">
              <h4>法人</h4>
              <ul>
                <li>¥45,000（税抜）〜　※入札参加事業者対象</li>
                <li>¥40,000（税抜）〜</li>
              </ul>
            </li>
            <li className="mb-5">
              <h4>個人</h4>
              <ul>
                <li>¥35,000（税抜）〜　※入札参加事業者対象</li>
                <li>¥30,000（税抜）〜</li>
              </ul>
            </li>
          </ul>

        <hr />
        </section>
      </div>
      <ToContact />
    </Layout>
  )
}