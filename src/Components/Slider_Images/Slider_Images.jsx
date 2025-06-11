import { Navigation, Autoplay,Scrollbar } from 'swiper/modules'; import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import 'swiper/css/scrollbar';
import "./index.css";
// ======================================================= //
export default function Slider_Images() {
    return <section className='slider-images-sec mb-5'>
        <Swiper
            modules={[Navigation, Autoplay,Scrollbar]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            grabCursor={true}
            speed={250}
            scrollbar={{ draggable: false }}
            autoplay={{
                delay: 1000,
                disableOnInteraction: false
            }}
            navigation={{
                prevEl: ".left-btn-slider-images",
                nextEl: ".right-btn-slider-images",
            }}
        >
            <SwiperSlide><img className='w-100 h-100' src="photo-1.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img className='w-100 h-100' src="photo-2.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img className='w-100 h-100' src="photo-3.jpg" alt="" /></SwiperSlide>
        </Swiper>

        <button className='left-btn-slider-images'>
            <i className="fa-solid fa-angle-left fs-3 my-text-primary"></i>
        </button>

        <button className='right-btn-slider-images'>
            <i className="fa-solid fa-angle-right fs-3 my-text-primary"></i>
        </button>
    </section>
}
