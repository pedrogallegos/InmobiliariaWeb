import CardEstate from '../utils/CardEstate'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const buttonsFilters = [
  {
    name: 'Frente al mar',
    href: 'frente-al-mar',
    icon: '/assets/icons/icon-beach.svg'
  },
  {
    name: 'Con jardin',
    href: 'con-jardin',
    icon: '/assets/icons/icon-garden.svg'
  },
  {
    name: 'Con piscina',
    href: 'con-piscina',
    icon: '/assets/icons/icon-pool.svg'
  },
  {
    name: 'Eco-friendly',
    href: 'eco-friendly',
    icon: '/assets/icons/icon-eco-friendly.svg'
  },
  {
    name: 'Haciendas',
    href: 'haciendas',
    icon: '/assets/icons/icon-house.svg'
  },
  {
    name: 'Albercas privadas',
    href: 'albercas-privadas',
    icon: '/assets/icons/icon-pool.svg'
  },
  {
    name: 'Apartamentos',
    href: 'apartamentos',
    icon: '/assets/icons/icon-apartament.svg'
  }
]

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
export default function FilterEstate () {
  return (
    <section className='container py-6 pl-4'>
      <div className='flex overflow-hidden overflow-x-scroll'>
        <ul className='flex gap-4 items-center py-4'>
          {buttonsFilters.map((filter) => (
            <li key={filter.name}>
              <Link href={filter.href} className='inline-block px-4 py-2 rounded-full text-nowrap border border-gray-700 text-neutral-900 font-medium'>
                <Image
                  src={filter.icon}
                  alt={filter.name}
                  className='hidden md:inline-block mr-2'
                  width={24}
                  height={24}
                /> {filter.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div>
          <h2 className='text-2xl font-semibold text-gray-800 mb-5'>Nuevas propiedades en venta</h2>
          {/* Carousel de propiedades destacadas */}
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
