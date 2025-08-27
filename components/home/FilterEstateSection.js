import { Swiper, SwiperSlide } from 'swiper/react'

import Image from 'next/image'
import CardEstate from '../Utils/CardEstate'

const buttonsFilters = [
  {
    name: 'Frente al mar',
    href: '/frente-al-mar',
    icon: '/assets/icons/icon-beach.svg'
  },
  {
    name: 'Con Jardín',
    href: '/con-jardin',
    icon: '/assets/icons/icon-beach.svg'
  },
  {
    name: 'Con Piscina',
    href: '/con-piscina',
    icon: '/assets/icons/icon-beach.svg'
  },
  {
    name: 'Eco-Friendly',
    href: '/eco-friendly',
    icon: '/assets/icons/icon-beach.svg'
  },
  {
    name: 'Haciendas',
    href: '/haciendas',
    icon: '/assets/icons/icon-beach.svg'
  },
  {
    name: 'Albercas Privadas',
    href: '/albercas-privadas',
    icon: '/assets/icons/icon-beach.svg'
  },
  {
    name: 'Apartamentos',
    href: '/apartamentos',
    icon: '/assets/icons/icon-beach.svg'
  }
]

export const estates = [
  {
    id: 1,
    title: 'Casa Moderna en Guadalajara',
    price: 500000,
    image: '/assets/estates/casa-moderana-guadalajara-1.png',
    bedrooms: 3,
    bathrooms: 2,
    size: '150 m²',
    garden: 2
  },
  {
    id: 2,
    title: 'Villa de Lujo en Cancún',
    price: 1200000,
    image: '/assets/estates/casa-moderana-guadalajara-1.png',
    bedrooms: 4,
    bathrooms: 3,
    size: '250 m²',
    garden: 1
  },
  {
    id: 3,
    title: 'Apartamento en Playa del Carmen',
    price: 800000,
    image: '/assets/estates/casa-moderana-guadalajara-1.png',
    bedrooms: 2,
    bathrooms: 2,
    size: '100 m²',
    garden: 2
  },
  {
    id: 4,
    title: 'Casa de Campo en Valle de Bravo',
    price: 900000,
    image: '/assets/estates/casa-moderana-guadalajara-1.png',
    bedrooms: 3,
    bathrooms: 2,
    size: '200 m²',
    garden: 2
  },
  {
    id: 5,
    title: 'Penthouse en Tulum',
    price: 1500000,
    image: '/assets/estates/casa-moderana-guadalajara-1.png',
    bedrooms: 3,
    bathrooms: 3,
    size: '180 m²',
    garden: 2
  },
  {
    id: 6,
    title: 'Casa de Playa en Puerto Vallarta',
    price: 1100000,
    image: '/assets/estates/casa-moderana-guadalajara-1.png',
    bedrooms: 4,
    bathrooms: 3,
    size: '220 m²',
    garden: 2
  }
]

export default function FilterEstates ({ isHome = false, title = 'Nuevas propiedades en venta' }) {
  return (
    <section className='container py-6 pl-4'>
      {
        isHome && (
          <div>
            <div className='flex overflow-hidden overflow-x-scroll'>
              <ul className='flex gap-4 items-center py-4'>
                {buttonsFilters.map((filter) => (
                  <li key={filter.name} className='flex-shrink-0'>
                    <button type='button' className='inline-block lg:flex lg:w-full px-4 py-2 rounded-full text-nowrap border border-gray-500 text-neutral-900 font-medium'>
                      <Image src={filter.icon} alt={filter.name} className='hidden lg:inline-block mr-2' width={24} height={24} />
                      <span>{filter.name}</span>
                    </button>
                  </li>
                ))}
                <li>
                  <button type='button' className='inline-block lg:flex lg:w-full px-4 py-2 rounded-full text-nowrap border border-gray-500 text-neutral-900 font-medium'>
                    Más filtros
                    <Image src='/assets/icons/icon-filters.svg' alt='Filtros' className='inline-block ml-2' width={24} height={24} />
                  </button>
                </li>
              </ul>
            </div>
            <div className='flex justify-end py-2 px-4' />
          </div>
        )
      }
      <div className='py-4'>
        <h2 className='text-2xl font-semibold text-gray-800 mb-5'>
          {title}
        </h2>
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
    </section>
  )
}
