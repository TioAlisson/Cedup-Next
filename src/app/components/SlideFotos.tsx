'use client';
import { Navigation, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import data from "@/data/dataGaleriaFotos.json";
import CardFotos from './CardFotos';

export default function Customers() {
    return (
        <div className="grid grid-cols-12 xl:gap-10 pt-20 items-center">
            <div className='galeria-prev-button rotate-180 col-span-5 lg:order-1 lg:col-span-1 mb-6 lg:mb-0'>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 16C2 18.7689 2.82109 21.4757 4.35943 23.778C5.89777 26.0803 8.08427 27.8747 10.6424 28.9343C13.2006 29.9939 16.0155 30.2712 18.7313 29.731C21.447 29.1908 23.9416 27.8574 25.8995 25.8995C27.8574 23.9416 29.1908 21.447 29.731 18.7313C30.2712 16.0155 29.9939 13.2006 28.9343 10.6424C27.8747 8.08427 26.0803 5.89777 23.778 4.35943C21.4757 2.82109 18.7689 2 16 2C12.287 2 8.72601 3.475 6.1005 6.1005C3.475 8.72601 2 12.287 2 16ZM8 15H20.15L14.57 9.393L16 8L24 16L16 24L14.57 22.573L20.15 17H8V15Z" fill="#fff"></path>
                </svg>
            </div>

            <div className='order-3 lg:order-2 col-span-12 lg:col-span-10'>
                <Swiper
                    modules={[Navigation, Scrollbar, A11y, Autoplay]}
                    spaceBetween={30}
                    pagination={{ clickable: true }}
                    slidesPerView={3}
                    scrollbar={{ draggable: true }}
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    navigation={{
                        nextEl: '.galeria-next-button',
                        prevEl: '.galeria-prev-button',
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1, 
                            centeredSlides: true,
                            spaceBetween: 20
                        },
                        640: {
                            slidesPerView: 2, 
                        },
                        1024: {
                            slidesPerView: 3, 
                        },
                    }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {data.galeriaFotos.map((item, index) => (
                        <SwiperSlide key={index}>
                            <CardFotos
                                image={item.image}
                                alt={item.alt || item.title}
                                title={item.title}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className='galeria-next-button order-2 lg:order-3 col-span-5 col-start-8 lg:col-span-1 mb-6 lg:mb-0'>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 16C2 18.7689 2.82109 21.4757 4.35943 23.778C5.89777 26.0803 8.08427 27.8747 10.6424 28.9343C13.2006 29.9939 16.0155 30.2712 18.7313 29.731C21.447 29.1908 23.9416 27.8574 25.8995 25.8995C27.8574 23.9416 29.1908 21.447 29.731 18.7313C30.2712 16.0155 29.9939 13.2006 28.9343 10.6424C27.8747 8.08427 26.0803 5.89777 23.778 4.35943C21.4757 2.82109 18.7689 2 16 2C12.287 2 8.72601 3.475 6.1005 6.1005C3.475 8.72601 2 12.287 2 16ZM8 15H20.15L14.57 9.393L16 8L24 16L16 24L14.57 22.573L20.15 17H8V15Z" fill="#fff"></path>
                </svg>
            </div>
        </div>
    );
}
