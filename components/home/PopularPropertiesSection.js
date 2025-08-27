import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import CardEstate from '../Utils/CardEstate'
import { estates } from './FilterEstateSection'

export default function PopularProperties () {
  return (
    <section className='container pl-4'>
      <div className='py-6 lg:py-20'>
        <h2 className='title-section mb-5'>Propiedades populares</h2>
        <div>
          {/* Carousel de propiedades */}
          <Swiper
            spaceBetween={16}
            slidesPerView={1.3}
            loop
            breakpoints={{
              768: {
                slidesPerView: 2.5,
                spaceBetween: 40
              },
              1440: {
                slidesPerView: 4,
                spaceBetween: 50
              }
            }}
          >
            {
              estates.map((estate) => (
                <SwiperSlide key={estate.id}>
                  <CardEstate estate={estate} />
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </div>
    </section>
  )
}
