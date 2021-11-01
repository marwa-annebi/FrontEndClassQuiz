  import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ReviewItem from './ReviewItem';




const Review = () => {
  
    const review = [
        {
            name:"السّيدة نجوى زرقية: متفقدة عامة للمدارس الابتدائية لغة فرنسية",
            description:"تطبيقة كلاس كويز تُساعد التّلميذ على مُراجعة الدّروس بطريقة جديدة و مُسلية بفضل شخصية كويزو الذي يُرافقه و يُحفّزه طيلة الرّحلة التّعليمية. أنصحكم بتجربة التّطبيق",
            img:"najwa-zergiya.png" 
        },
        {
            name:"السيّد باسم الحامدي: معلّم",
            description:"تطبيقة تُساعد الأولياء على معرفة الصّعوبات التي يتعرّض لها أطفالهم من خلال نظام النّجوم و تقييمهم بسهولة في المنزل بفضل التّمارين التّفاعليّة التي يُوفّرها كلاس كويز",
            Img:"bacem-hamdi.png"
        },
        {
            name:"السيّدة سعاد الراشدي: مساعد بيداغوجي",
            description:"هذا التطبيق الموجه الى تلاميذ السنة السادسة في مادة الايقاظ وقع العمل عليه مع اخذ كل الاعتبارات الخاصة بالطفل و بالمادة ادعو اطفالي الى تجربته و التمتع باللعب اثناء المراجعة",
            Img:"souad-rashdi.png"
        },
        {
            name:"السّيدة خولة حرابي: أستاذة لغة عربية",
            description:"كلاس كويز هي التّطبيقة الأمثل ليستمتع الأطفال بالدّراسة و التّعلم بفضل الحماس و التّحفيز الذي تُوفّره التّمارين التّفاعلية من مؤثرات صوتية و فوز بجوائز و دروس مُطابقة للبرنامج",
            img:"khawla-harabi.png"

        },
    ]
    //Owl Carousel Settings
    const options = {
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2    
            }
        }
    };
    return (
        <section id="testimonial" className="testimonials pt-70 pb-70">
        
            <div className="container mt-5">
            
                <div className="row">
                    <div className="col-md-12">
                        <OwlCarousel id="customer-testimonoals" className="owl-carousel owl-theme" {...options}>
                            {
                              
                                    review.map(reviewDetail => {
                                        return (
                                            <ReviewItem reviewDetail={reviewDetail} key={reviewDetail._key} />

                                        )
                                    })
                            }
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Review;