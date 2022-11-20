import React from "react";
import CategoriesLayout from "../components/categoriesLayout";

import heroImg from "../../static/about_hero.jpg";

export default function About () {
  return (
    <CategoriesLayout heroImg={heroImg} h1="事務所概要" description="RISE行政書士事務所は、沖縄のさらなる発展を目指し、お客様の事業に貢献していきます。" >
      <section className="mt-5 mx-5 p-5">
        <h2 className="border-bottom border-dark d-inline-block pb-1 px-1 mb-3">社名「RISE」の由来</h2>
        <p>RISEは英語で「上がる」の意味を持ちます。<br />
        RISEとお客様とのお付き合いから双方の業績が向上し、お互いに良い状態に上がることを意図し、「RISE」と名づけています。<br />
        また、RISEは事業を通じて沖縄全体の発展をも目指しています。沖縄のあらゆることを向上させるためにも、意識高く事業と向き合ってまいります。</p>
      </section>
      <section className="mx-5 p-5">
        <h2 className="border-bottom border-dark d-inline-block pb-1 px-1 mb-3">ロゴについて</h2>
        <p>RISEの文字を囲う円は、RISEとお客様との距離を表しています。円は円周上から中心までの距離が常に近く、RISEの「いつでもどこでも相談しやすい」という特徴を表しています。<br />
        また、円は安定の印象を持つ図形です。安定した仕事を心がけると同時に、円が完全に繋がっていないのは「常に同じことだけをやるのではなく変革も必要」であるとの意識の表れです。<br />
        縁の切れ端が未来へと伸びゆくため、先端が細く遠くに伸びています。また少し上向きなのはお客さまの業績向上への願いも込められています。</p>
      </section>
      <section className="mx-5 mb-5 p-5">
        <h2 className="border-bottom border-dark d-inline-block pb-1 px-1 mb-3">RISEの描く沖縄の未来ビジョン</h2>
        <p>RISEは行政書士の仕事を通じて、沖縄の進化、発展へ貢献していきたいと考えます。</p>

        <p>私たちの仕事の先には、建物や道路、橋などを造る建設、公共工事の仕事があります。それらは社会の基盤となり、未来の沖縄を築いていくために欠かせないものとなります。<br />
        RISEにはお客様と行政との橋渡しとなり、お客様の事業を円滑にする務めがあります。それだけでなく、事業のその先、未来の沖縄をお客様と共に造っていく責任もあると感じています。</p>
        <p>様々なことが急速に発展してきました。近い将来には、沖縄でも大きなビルが立ち並び、機械化された生活空間が広がり、車も空を飛ぶはずです。<br />
        そして誰もが、より良く豊かな人生を送れる沖縄に。</p>
        <p>RISEは行政書士事務所として、沖縄の進化、発展と向き合い、次の沖縄を造る仲間であり続けます</p>
      </section>
      <section className="mx-5 mb-5 p-5">
        <h2 className="border-bottom border-dark d-inline-block pb-1 px-1 mb-3">会社概要</h2>

        <h3 className="mt-3 fs-4">社名</h3>
        <p>RISEは行政書士の仕事を通じて、沖縄の進化、発展へ貢献していきたいと考えます。</p>

        <h3 className="mt-5 fs-4">代表名</h3>
        <p>私たちの仕事の先には、建物や道路、橋などを造る建設、公共工事の仕事があります。それらは社会の基盤となり、未来の沖縄を築いていくために欠かせないものとなります。<br />
        RISEにはお客様と行政との橋渡しとなり、お客様の事業を円滑にする務めがあります。それだけでなく、事業のその先、未来の沖縄をお客様と共に造っていく責任もあると感じています。</p>

        <h3 className="mt-5 fs-4">所在地</h3>
        <h4>那覇本社</h4>
        <p className="mb-0">〒901-0021</p>
        <p className="mb-0">沖縄県那覇市泉崎1-8-8　泉崎マンション302</p>
        <p className="mb-5"><iframe title="naha-location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d894.8814083842706!2d127.67780848810618!3d26.212105202152035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e5699e8bd9f173%3A0x2a9fe813ee57e2c8!2z77yy77yp77yz77yl6KGM5pS_5pu45aOr5LqL5YuZ5omA!5e0!3m2!1sja!2sjp!4v1667925298143!5m2!1sja!2sjp" width="2000" height="400" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
        <h4>宜野湾事務所</h4>
        <p className="mb-0">〒901-2212</p>
        <p className="mb-0">沖縄県宜野湾市長田1丁目19-10 玉善ビル3階</p>
        <p><iframe title="ginowan-location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3128.8117907140877!2d127.76299185476064!3d26.26405433566612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e56cde4c332c93%3A0x185d4024c6b6c618!2z44CSOTAxLTIyMTIg5rKW57iE55yM5a6c6YeO5rm-5biC6ZW355Sw77yR5LiB55uu77yR77yZ4oiS77yR77yQIOeOieWWhOODk-ODqw!5e0!3m2!1sja!2sjp!4v1667925548302!5m2!1sja!2sjp" width="2000" height="400" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>

        <h3 className="mt-5 fs-4">電話番号</h3>
        <p>098-917-5874</p>

        <h3 className="mt-5 fs-4">FAX</h3>
        <p>098-917-5875</p>

        <h3 className="mt-5 fs-4">メールアドレス</h3>
        <p>gsl.uehara@rising.okinawa</p>

        <h3 className="mt-5 fs-4">営業時間</h3>
        <p>平日10：00　〜　18：00</p>

        <h3 className="mt-5 fs-4">業務内容</h3>
        <p>建設業許可申請、経営事項審査申請、競争入札参加資格審査申請、宅地建物取引業許可申請、産業廃棄物処理業申請（収集運搬業）、みなし電気工事業者登録申請、農地転用3条・４条・５条申請
        法人設立業務、酒類業販売免許、その他業関係</p>
      </section>
    </CategoriesLayout>
  )
}
