import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import CardEstate from '../utils/CardEstate'

const estates = [
  {
    id: 1,
    title: 'Casa moderna',
    location: 'Cancún',
    price: 500000,
    bedrooms: 3,
    bathrooms: 2,
    size: '150 m2',
    imageUrl: '/assets/estates/casa-moderana-guadalajara-1.png',
    garden: 1
  },
  {
    id: 2,
    title: 'Villa de lujo',
    location: 'Playa del Carmen',
    price: 1200000,
    bedrooms: 4,
    bathrooms: 3,
    size: '250 m2',
    imageUrl: '/assets/estates/casa-moderana-guadalajara-1.png',
    garden: 1
  },
  {
    id: 3,
    title: 'Apartamento céntrico',
    location: 'Ciudad de México',
    price: 300000,
    bedrooms: 2,
    bathrooms: 1,
    size: '80 m2',
    imageUrl: '/assets/estates/casa-moderana-guadalajara-1.png',
    garden: 1
  },
  {
    id: 4,
    title: 'Casa de campo',
    location: 'Valle de Bravo',
    price: 450000,
    bedrooms: 3,
    bathrooms: 2,
    size: '200 m2',
    imageUrl: '/assets/estates/casa-moderana-guadalajara-1.png',
    garden: 1
  },
  {
    id: 5,
    title: 'Penthouse exclusivo',
    location: 'Ciudad de México',
    price: 2000000,
    bedrooms: 5,
    bathrooms: 4,
    size: '300 m2',
    imageUrl: '/assets/estates/casa-moderana-guadalajara-1.png'
  }
  // Puedes agregar más propiedades aquí

]

export default function PopularProperties () {
  return (
    <section className='container pl-4'>
      <div>
        <h2 className='title-section'>Propiedades populares</h2>
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
