import BackgroundSVG from "../img/imgbg.js";
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
import Footer from './Footer';
function Content() {

 
  return (
    
    <div /* style={{background:`url("data:image/svg+xml,${svgString}")`}} */>
      <Navigation />
      <div className="_background">
        <CarouselComponent />
      </div>
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
        <br />
 <div style={{backgroundColor:"linear-gradient(rgb(255, 255, 255) 0%, rgb(217, 240, 249) 25%)"}}>        <div style={{ textAlign: "center" }}>
          <div className="text-type-5">
            تتكوّن تطبيقة كلاس كويز من تنوّع كبير في المُحتوى و تمارين مُختلفة
            التي تشمُل كلّ ما يدرُسه طفلك في القسم
          </div>
        </div>
        <div>
          <img
            src="science.png"
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              maxWidth: "1200px",
            }}
          ></img>
        </div>
        {/* SELECT MENU */}
        <div className="select-menu">
          <Row className="centering">
            <Form.Select size="lg">
            <option className="d-none" value="">
            قائمة السنوات
                    </option>
                    {["أولى", " ثانية", "ثالثة", "رابعة", "خامسة"," سادسة"].map(option => (
                         <option key={option}> سنة {option}</option>
                    ))}
            </Form.Select>
            <Form.Select size="lg">
            <option className="d-none" value="">
                   الثلاثي
                    </option>
                    {["أول", " ثاني", "ثالث"].map(option => (
                         <option key={option}> الثلاثي {option}</option>
                    ))}
            </Form.Select>
          </Row>
        </div>
        {/* InfoCard 2 */}
        <div className="types">
          <InfoCard2 image="013-school bus.png" text="التنقل"></InfoCard2>
          <InfoCard2 image="016-books.png" text="التوازن"></InfoCard2>
          <InfoCard2 image="042-abacus.png" text="الأعداد و القسمة"></InfoCard2>
          <InfoCard2 image="001-knowledge.png" text="عقل الإنسان"></InfoCard2>
        </div>
        <div style={{ textAlign: "center" }}>
          <div className="text-type-5">
            <img src="2.png" /> أولياء و معلّمين و أطفال كانوا سُعداء باستعمالهم
            كلاس كويز
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-evenly",marginBottom:"10px" }}>
          <span className="info-badge">ولي</span>
          <span className="info-badge">معلم</span>
        </div>
        <div style={{display:"flex",justifyContent:"space-evenly",marginTop:"10px"}}>
          
                      <Review />
        </div>
        <div style={{ textAlign: "center" }} className="background">
          <div className="text-type-5">
            هذا التطبيق موثوق به من طرف
          </div>
          <div style= {{display:"flex",justifyContent:"space-evenly",marginTop:100}}>
            <img src="institut-francais.png"></img>
            <img src="banque-zitouna.png"></img>
            <img src="orange_foundation.png"></img>
          </div>
        </div>
        <div style={{ textAlign: "center"}} >
          <div className="text-type-8">
          إبدأ رحلتك التعليمية الأن
و إنضم لعائلة كلاس كويز
          </div>
          <div><button className="btn1" > إبدأ رحلتك</button></div>
          <div className="statistics"><img src="statistics.png" alt="Class Quiz statistics" /></div>
        </div>
        <div style={{ textAlign: "center"}} >
          <div className="text-type-9">
            <Col>
        <Row><img src="feature-5.png" style={{width:"100px"}}/> </Row> 
        <Row>
        اشترك الآن للحصول على كلّ ما هو جديد من نصائح و معلومات تُفيدك و تُفيد طفلك
        </Row></Col>
        </div>
        <div>
        <Link to="/inscription">
          <button className="btn2">إشترك</button>
          </Link></div>
          </div>
</div>
      </span>
      <Footer/>
    </div>
  )
}

export default Content;
