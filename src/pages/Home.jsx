import AOS from 'aos'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react'
import { useSelector } from "react-redux";
import { Pagination, Autoplay, EffectFade } from 'swiper/modules'
import 'aos/dist/aos.css';
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

import GalleryBox from '../components/GalleryBox';
import PolicyCard from '../components/PolicyCard';
import ArrivalCard from '../components/ArrivalCard';
import GalleryBox_2 from '../components/GalleryBox_2';
import OurProductBox from '../components/OurProductBox';
import TestiminoalBox from '../components/TestiminoalBox';
import FlahCard from '../components/FlahCard';
import LatestNews from '../components/LatestNews';
import GramGallery from '../components/GramGallery';
import Footer from '../components/Footer';
import { useEffect } from 'react';

const Home = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const data = useSelector((state) => state.Home.Home)
  const {
    galleryImage,
    policy,
    arrival,
    gallery_2,
    product,
    flashDeals,
    news,
    gram,
    testimonials } = data;


  return (
    <>
      {/* ****************************** Banner Start ***************************** */}
      <div className="banner pb-5" data-aos="fade-in">
        {/* <img src={banner} alt="Banner" className='img-fluid' /> */}
        <div className="contents">
          <h1 className='text-white'>Modern Living Room</h1>
          <p className='text-white fs-5 text-capitalize'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          <button className='bg-transparent border-light py-3 px-5 text-white rounded-1'>Learn More</button>
        </div>
      </div>
      {/* ****************************** Banner End ***************************** */}

      {/* ****************************** Gallery Start ***************************** */}
      <div className="gallery py-5 my-5" data-aos="fade-up">
        <div className="container">
          <div className="img-group d-flex">
            {
              galleryImage.map((img, index) => (
                <GalleryBox key={index} img={img.img} title_1={img.title_1} title_2={img.title_2} />
              ))
            }
          </div>
        </div>
      </div>
      {/* ****************************** Gallery End ***************************** */}

      {/* ****************************** Policy Start ***************************** */}
      <div className="policy py-5 mt-5" data-aos="fade-up" data-aos-delay="200">
        <div className="container">
          <div className="d-flex">
            {policy.map((card, key) => (
              < PolicyCard key={key} img={`/images/policy_${key + 1}.webp`} title={card.title} />
            ))}
          </div>
        </div>
      </div>
      {/* ****************************** Policy End ***************************** */}

      {/* ****************************** New Arrivsl Start ***************************** */}
      <div className="arrival py-5 mt-5" data-aos="zoom-in">
        <div className="container">
          <h2 className='text-center display-5 fw-normal mb-5'>New Arrival</h2>
          <div className="cardGroup d-flex">
            <div className="main-card col-4 px-2">
              <img src="/images/arrival_1.webp" alt="image" className='img-fluid' />
            </div>
            <div className="sideCards col-8 d-flex flex-wrap">
              {
                arrival.map((card, index) => (
                  <ArrivalCard key={index} img={card.img} title={card.title} />
                ))
              }
            </div>
          </div>
        </div>
      </div>
      {/* ****************************** New Arrival End ***************************** */}

      {/* ****************************** Gallery_2 Start ***************************** */}
      <div className="gallery_2 py-5 mt-5" data-aos="fade-left">
        <div className="container">
          <div className="gallery_2Box d-flex">
            {gallery_2.map((box, index) => (
              <GalleryBox_2 key={index} img={box.img} title={box.title} />
            ))}
          </div>
        </div>
      </div>
      {/* ****************************** Gallery_2 End ***************************** */}


      {/* ****************************** Our Products Start ***************************** */}
      <div className="ourProducts py-5 mt-5" data-aos="fade-right">
        <div className="container">
          <h2 className='text-center display-5 fw-normal mb-5'>Our Products</h2>
          <nav className='d-flex justify-content-center'>
            <Link className='text-decoration-none px-4 opacity-75 py-2 p-nav'>HOT</Link>
            <Link className='text-decoration-none px-4 opacity-75 py-2 p-nav'>ARRIVALS</Link>
            <Link className='text-decoration-none px-4 opacity-75 py-2 p-nav'>TRENDING</Link>
            <Link className='text-decoration-none px-4 opacity-75 py-2 p-nav'>SALE OFF</Link>
          </nav>
          <div className="product-cards d-flex flex-row flex-wrap">
            <div className="rightCards d-flex flex-wrap col-4 justify-content-evenly">
              {product.map((card, index) => (
                <OurProductBox key={index} img={card.img} title={card.title} />
              ))}
            </div>
            <div className="centerCard col-4" data-aos="zoom-in">
              <OurProductBox img={'/images/product_5.jpg'} title={'Uiamond Halo Stud Cum'} Cwidth={'100%'} />
              <button className='bg-transparent py-2 px-5 position-absolute start-50 translate-middle-x'>View All</button>
            </div>
            <div className="LeftCards d-flex flex-wrap col-4 justify-content-evenly">
              {product.map((card, index) => (
                <OurProductBox key={index} img={card.img} title={card.title} />
              ))}
            </div>
          </div>
        </div>
      </div >
      {/* ****************************** Our Products End ***************************** */}

      {/* ****************************** Testimonial Start ***************************** */}
      <div className="testimonial py-5 mt-5" data-aos="fade-up">
        <div className="container">
          <h2 className="text-center display-5 fw-normal mb-5">Testimonials</h2>
          <Swiper
            modules={[Pagination, Autoplay, EffectFade]}
            spaceBetween={20}
            slidesPerView={3}
            autoplay={{ delay: 3000 }}
            loop={true}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            speed={2000}
            fadeEffect={{ crossFade: true }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestiminoalBox
                  text={testimonial.text}
                  author={testimonial.author}
                  img={testimonial.img}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* ****************************** Testimonial End ***************************** */}

      {/* ****************************** Flash Deals Start ***************************** */}
      <div className="flashDeals py-5 mt-5" data-aos='zoom-out'>
        <div className="container">
          <h2 className="text-center display-5 fw-normal mb-5">Flash Deals</h2>
          <Swiper
            modules={[Pagination, Autoplay, EffectFade]}
            spaceBetween={10}  // Adjust spacing between slides
            slidesPerView={4}  // Set 4 slides per view
            autoplay={{ delay: 2000, reverseDirection: true }}
            loop={true}
            breakpoints={{
              0: { slidesPerView: 1 },   // 1 slide for small screens
              768: { slidesPerView: 2 }, // 2 slides for tablets
              1024: { slidesPerView: 3 }, // 3 slides for desktops
              1440: { slidesPerView: 4 }, // 4 slides for larger screens
            }}
            speed={2000}
            fadeEffect={{ crossFade: true }}
          >
            {flashDeals.map((flash, index) => (
              <SwiperSlide key={index}>
                <FlahCard title={flash.title} img={flash.img} />
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </div>
      {/* ****************************** Flash Deals End ***************************** */}

      {/* ****************************** Latest News Start ***************************** */}
      <div className="latestNews py-5 mt-5">
        <div className="container">
          <h2 className="text-center display-5 fw-normal mb-5">Latest News</h2>
          <Swiper
            modules={[Pagination, Autoplay, EffectFade]}
            spaceBetween={10}  // Adjust spacing between slides
            slidesPerView={1}  // Set 4 slides per view
            autoplay={{ delay: 2000 }}
            loop={true}

            speed={2000}
            fadeEffect={{ crossFade: true }}
          >
            {news.map((news, index) => (
              <SwiperSlide key={index}>
                <LatestNews title={news.title} img={news.img} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* ****************************** Latest News End ***************************** */}

      {/* ****************************** Deal Start ***************************** */}
      <div className="deal py-5 mt-5">
        <div className="container">
          <div className="bg py-5 rounded-2">
            <div className="row px-5 align-items-center">
              <div className="col-6">
                <div className="img">
                  <img src="/images/deal_.webp" alt="deal" className='img-fluid' />
                </div>
              </div>
              <div className="col-6">
                <div className="content">
                  <h2 className=' display-4 fw-normal'>Deal Of The Day</h2>
                  <p className='opacity-75'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in</p>
                  <div className="timer row">
                    <div className="box col-2 text-center mx-2 bg-light py-2 fs-3 fw-normal">00 <h5 className='fw-normal'>Days</h5></div>
                    <div className="box col-2 text-center mx-2 bg-light py-2 fs-3 fw-normal">00 <h5 className='fw-normal'>Hours</h5></div>
                    <div className="box col-2 text-center mx-2 bg-light py-2 fs-3 fw-normal">00 <h5 className='fw-normal'>Minutes</h5></div>
                    <div className="box col-2 text-center mx-2 bg-light py-2 fs-3 fw-normal">00 <h5 className='fw-normal'>Seconds</h5></div>
                  </div>
                  <button className='bg-transparent mt-5 py-2 px-4'>Shop Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ****************************** Deal End ***************************** */}

      {/* ****************************** Gallery Start ***************************** */}
      <div className="gramGallery py-5 mt-5">
        <div className="container">
          <h2 className="text-center display-5 fw-normal mb-5">Gram Gallery</h2>
          <div className="row">
            {gram.map((gram, index) => (
              <div className="col-2" key={index}>
                <GramGallery img={gram.img} />
              </div>
            ))
            }
          </div>
        </div>
      </div>
      {/* ****************************** Gallery End ***************************** */}

      {/* ****************************** Footer Start ***************************** */}
      <Footer />
      {/* ****************************** Footer End ***************************** */}
    </>
  )
}

export default Home
