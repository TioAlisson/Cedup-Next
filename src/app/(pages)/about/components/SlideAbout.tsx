'use client';
import { Navigation, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CardTimeline from './CardTimeline';

import data from "@/data/dataTimeline.json"

export default function Customers() {
    return (
        <div className="grid grid-cols-12 items-center">
            <div className='col-span-12 lg:col-span-10 lg:col-start-3'>
                <Swiper
                    modules={[Navigation, Scrollbar, A11y, Autoplay]}
                    spaceBetween={0}
                    pagination={{ clickable: true }}
                    slidesPerView={3}
                    scrollbar={{ draggable: true }}
                    loop={false}
                    centeredSlides={true}
                    centeredSlidesBounds={true}
                    slideToClickedSlide={true}
                    navigation={{
                        nextEl: '.galeria-next-button',
                        prevEl: '.galeria-prev-button',
                    }}
                    breakpoints={{
                        // Para telas pequenas (celular)
                        320: {
                            slidesPerView: 1, // Mostra 1 slide
                        },
                        768: {
                            slidesPerView: 2, // Mostra 2 slides
                        },
                        1000: {
                            slidesPerView: 3, // Mostra 3 slides
                        },
                    }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {data.timelineData.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <CardTimeline
                                image={slide.image}
                                year={slide.year}
                                title={slide.title}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
