

import "../App.css"
import "../style/container.css";
import "../style/content.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Navigation from "../components/navigation";
import CarouselComponent from "../components/carousel";
import InfoCard from "../components/infoCard";
import InfoCard2 from "../components/infoCard2";

import Form from "react-bootstrap/Form";
import { renderToStaticMarkup } from "react-dom/server";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Review from "./Review.js";
import { Link } from 'react-router-dom';
function FavApp(){


return(
    <>
<span className="_background0">
        <div
          className="info"
          style={{ display: "flex", justifyContent: "space-around",
         }}
        >
          <div
            style={{
              marginTop: 150,
              width: "50%",
              textAlign: "center",
              left: -320,
            }}
            className="text-type-1"
          >
            تطبيقة تخلّي صغيرك يقرا من غير ضغط و هو مرتاح و اتحبّو في القراية
          </div>
        </div>
        <Row>
          <img
            src="Groupe 21733.png"
            style={{ height: 250, width: 300, marginTop: -300 }}
          ></img>
        </Row>
        <Row>
          <InfoCard
        
            mainImage="feature-1.png"
            direction="right"
            number="1"
            title="طريقة تعلم جديدة"
            subtitle="
            تطبيق كلاس كويز يوفّر رسومات ملوّنة و واضحة و تمارين تفاعليّة كحلّ لقلّة التّركيز و عدم القدرة على تذكّر الدّروس"
          />
        </Row>
        <Row>
          <InfoCard
            mainImage="feature-2.png"
            direction="left"
            number="2"
            title="استعمال مؤطّر للأجهزة الالكترونيّة"
            subtitle="تطبيق كلاس كويز يجعلُك تشعر بالاطمئنان عند استعمال طفلك للأجهزة الالكترونية للتّعلّم مع تطبيقنا بدلاً من الاستعمال المُفرط و المُضرّ"
          />
        </Row>
        <Row>
          <InfoCard
            mainImage="feature-3.png"
            direction="right"
            number="3"
            title="تسلية و تعلّم في نفس الوقت"
            subtitle="تطبيق كلاس كويز يوفّر المُتعة و الحماس كحلّ لعدم التّحفيز الذي يُعاني منه الأطفال أثناء التّعلّم"
          />
        </Row>
        <Row>
          <InfoCard
            mainImage="feature-4.png"
            direction="left"
            number="4"
            title="المراقبة الأبويّة"
            subtitle="تطبيق كلاس كويز يوفّر خاصّية متابعة الأولياء لأداء الأطفال كوسيلة للمعرفة الدّقيقة لنقاط الضّعف لغرض التّحسّن"
          />
        </Row>
        <Row>
          <InfoCard
            mainImage="feature-5.png"
            direction="right"
            number="5"
            title="تطبيقة تعليمية مطابقة لبرنامج الوزارة"
            subtitle="طبيق كلاس كويز يوفّر تمارين مطابقة تماما للبرنامج التّعليمي التّونسي الذي يُخوّل الأطفال لمزيد التّعلّم في المنزل"
            confirmedsign="confirmed-sign.png"
            minister="minister.png"
          />
        </Row>
        </span></>
        )}
    export default FavApp