'use client';
import { Navigation, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import CardEquipeGestora from "./CardEquipeGestora";
import Teste from "@/public/img/img-equipe-gestora.jpg";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Customers() {
    return (
        <div className=''>
            <div className="pt-14 flex justify-between items-center xl:gap-10">
                <div className='equipe-prev-button hidden sm:flex'>
                    <svg width="29" height="54" viewBox="0 0 29 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24.6026 0.0325928L28.4297 4.49912L8.20073 26.8317L28.4297 49.1644L24.6026 53.6309L-0.000192642 26.8317L24.6026 0.0325928Z" fill="#343233" />
                    </svg>
                </div>
                <Swiper
                    modules={[Navigation, Scrollbar, A11y, Autoplay]}
                    spaceBetween={30}
                    pagination={{ clickable: true }}
                    slidesPerView={4}
                    scrollbar={{ draggable: true }}
                    loop={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    navigation={{
                        nextEl: '.equipe-next-button',
                        prevEl: '.equipe-prev-button',
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1.5, 
                            centeredSlides: true,
                            spaceBetween: 20
                        },
                        400: {
                            slidesPerView: 2, 
                        },
                        768: {
                            slidesPerView: 3, 
                        },
                        1300: {
                            slidesPerView: 4, 
                        },
                    }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide>
                        <CardEquipeGestora
                            image={Teste}
                            alt="teste"
                            name="Alisson"
                            description="Programador"
                        />

                    </SwiperSlide>
                    <SwiperSlide>
                        <CardEquipeGestora
                            image={Teste}
                            alt="teste"
                            name="Alisson"
                            description="Programador"
                        />

                    </SwiperSlide>
                    <SwiperSlide>
                        <CardEquipeGestora
                            image={Teste}
                            alt="teste"
                            name="Alisson"
                            description="Programador"
                        />

                    </SwiperSlide>
                    <SwiperSlide>
                        <CardEquipeGestora
                            image={Teste}
                            alt="teste"
                            name="Alisson"
                            description="Programador"
                        />

                    </SwiperSlide>
                    <SwiperSlide>
                        <CardEquipeGestora
                            image={Teste}
                            alt="teste"
                            name="Alisson"
                            description="Programador"
                        />

                    </SwiperSlide>
                </Swiper>
                <div className='equipe-next-button rotate-180'>
                    <svg width="29" height="54" viewBox="0 0 29 54" fill="none" xmlns="http://www.w3.org/2000/svg" className='hidden sm:flex'>
                        <path d="M24.6026 0.0325928L28.4297 4.49912L8.20073 26.8317L28.4297 49.1644L24.6026 53.6309L-0.000192642 26.8317L24.6026 0.0325928Z" fill="#343233" />
                    </svg>
                </div>
            </div>
        </div>
    );
}
