import React from "react";
// import { Link } from "gatsby";
import CategoriesLayout from "../components/categoriesLayout";

import heroImg from "../../static/features_hero.jpg";

export default function Freatures () {
  return (
    <CategoriesLayout heroImg={heroImg} h1="特徴 実績" description="RISE行政書士事務所の特徴と実績です。" >
      <h2 className="mb-5 me-5 ps-5 py-3 features-head fs-1 fw-bold position-relative">RISEの特徴</h2>
      <section className="me-5 mb-5 ps-5 pb-3 features-wrapper position-relative">
        <h3 className="mb-3 features-third-head fw-bold">どこでも相談しやすい</h3>
        <p>RISE行政書士事務所へのご相談の際は、私たちが相談主様の事務所やご自宅などへ伺うことが可能です。<br />
        ご都合のよろしいお日にちを調整いただき、訪問させていただきます。</p>
        <p>また、相談主様がRISE行政書士事務所へ来所いただくことも可能です。</p>
        <p>相談主様にとって話しやすい場所をご提示ください。<br />
        ご相談のお問い合わせはこちらから</p>
      </section>
      <section className="me-5 mb-5 ps-5 pb-3 features-wrapper position-relative">
        <h3 className="mb-3 features-third-head fw-bold">相談初期費用はかかりません</h3>
        <p>案件に着手する前段階で、ご依頼内容の遂行が可能かどうかを判断させていただきます。<br />
        ご相談時点では着手金などを請求いたしません。お気軽にご相談ください。</p>
      </section>
      <section className="me-5 mb-5 ps-5 pb-3 features-wrapper position-relative">
        <h3 className="mb-3 features-third-head fw-bold">ノウハウに基づくRISEの提案</h3>
        <p>RISE行政書士事務所は相談主様の状況や目的に合わせて、最適な提案をさせていただきます。</p>
        <p>申請の要件確認や必要書類の作成など、RISE行政書士事務所がプロとしてサポートいたします。</p>
        <p>また、申請後の相談主様の、事業の継続的な発展を見据えた提案を心がけます。</p>
        <p>RISE行政書士事務所はお客様と共に事業を、そして沖縄を発展させていけるよう努めます。</p>
      </section>
      <h2 className="mb-5 me-5 ps-5 py-3 features-head fs-1 position-relative">RISEの実績</h2>
      <section className="me-5 mb-5 ps-5 pb-3 features-wrapper position-relative">
        <h3 className="mb-3 features-third-head">建設業許可取得率100％</h3>
        <p>承った建設業許可申請について、100％の取得実績があります。<br />
        RISEでは許可申請案件を引き受ける前に、申請が通るまでの見込みを必ず立ててから引き受けます。<br />
        依頼者の申請に何が必要か徹底的に調査し、これまでの経験も踏まえて、質にこだわる仕事が実績にも表れています。</p>
      </section>
      <section className="me-5 mb-5 ps-5 pb-3 features-wrapper position-relative">
        <h3 className="mb-3 features-third-head">120件のお客さま</h3>
        <p>有難いことに、2022年現在は120件のお客様と取引させていただいております。<br />
        創業当初からのお客様より定期的にご相談いただいているほか、紹介から新たなお客様と繋がり、弊社の仕事を信頼されてご相談いただくこともあります。<br />
        また、RISEのお客様は沖縄の経済を支え、未来をつくる仲間であるとも考えます。共に課題に立ち向かい、歩み続けていることを誇りに思います。</p>
      </section>
      <section className="me-5 mb-5 ps-5 pb-3 features-wrapper position-relative">
        <h3 className="mb-3 features-third-head">年間300件の業務案件</h3>
        <p>RISEは年間約300件の業務案件を引き受けています。<br />
        2年ごとの入札参加資格審査申請、事業環境の変化に合わせて経審の作成及び提出など、建設業に関わる申請を中心に幅広く対応しています。<br />
        規模が大きくはない事務所ですが、全ての仕事においてお客様のより良い未来を志し、質を意識して取り組んでいます。</p>
      </section>
      <section className="me-5 mb-5 ps-5 pb-3 features-wrapper">
        <h3 className="mb-3 features-third-head">14年の実績</h3>
        <p>おかげさまで創業から14年、皆様に支えられて事業を続けられています。<br />
        これからも沖縄の発展に貢献するべく、RISEは日々精進してまいります。</p>
      </section>
    </CategoriesLayout>
  );
}
