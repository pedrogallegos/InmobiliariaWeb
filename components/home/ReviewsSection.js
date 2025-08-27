import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Grid, Pagination } from 'swiper/modules'
import Link from 'next/link'

const reviews = [
  {
    id: 1,
    name: 'Juan Pérez',
    rating: 5,
    comment: 'Excelente servicio y atención al cliente.',
    date: '2023-10-01'
  },
  {
    id: 2,
    name: 'María López',
    rating: 4,
    comment: 'Muy buena experiencia, aunque el proceso fue un poco lento.',
    date: '2023-09-15'
  },
  {
    id: 3,
    name: 'Carlos García',
    rating: 5,
    comment: 'Me encantó la propiedad, todo perfecto.',
    date: '2023-08-20'
  },
  {
    id: 4,
    name: 'Ana Martínez',
    rating: 5,
    comment: 'Todo el proceso de compra fue muy sencillo y rápido.',
    date: '2023-07-10'
  },
  {
    id: 5,
    name: 'Luis Fernández',
    rating: 4,
    comment: 'Buena atención, pero el sitio web podría mejorar.',
    date: '2023-06-05'
  },
  {
    id: 6,
    name: 'Sofía Rodríguez',
    rating: 5,
    comment: 'Excelente atención y asesoramiento en la compra.',
    date: '2023-05-25'
  },
  {
    id: 7,
    name: 'Pedro Sánchez',
    rating: 4,
    comment: 'Muy buena experiencia, aunque el precio era un poco alto.',
    date: '2023-04-15'
  },
  {
    id: 8,
    name: 'Laura Gómez',
    rating: 5,
    comment: 'Todo perfecto, muy recomendable.',
    date: '2023-03-30'
  },
  {
    id: 9,
    name: 'Javier Torres',
    rating: 5,
    comment: 'Excelente atención y servicio al cliente.',
    date: '2023-02-28'
  },
  {
    id: 10,
    name: 'Isabel Ramírez',
    rating: 4,
    comment: 'Muy buena experiencia, aunque el proceso de cierre fue un poco complicado.',
    date: '2023-01-20'
  }
]

export default function Reviews () {
  return (
    <section className=' py-6 px-4 lg:py-20 bg-[#FAFAFA]'>
      <div className='container'>
        <div className='flex items-center justify-between mb-5'>
          <h2 className='title-section'>Reseñas recientes</h2>
          <Link href='#' className='text-blue-950 font-semibold text-sm'>
            Ver más
          </Link>
        </div>
        <Swiper
          slidesPerView={1}
          grid={{
            rows: 2,
            fill: 'row'
          }}
          spaceBetween={30}
          pagination={{
            clickable: true
          }}
          modules={[Grid, Pagination]}
          className='mySwiper'
          breakpoints={{
            640: {
              slidesPerView: 1
            },
            768: {
              slidesPerView: 2
            },
            1024: {
              slidesPerView: 3
            }
          }}
        >
          {
            reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <div className='p-4 bg-white rounded-xl border border-[EFEFEF] flex gap-2 items-start'>
                  <div className='bg-[#FFBB5D] p-5 rounded-lg text-white font-bold text-2xl'>
                    JT
                  </div>
                  <div>
                    <h3 className='text-neutral-900 text-base font-bold leading-9'>{review.name}</h3>
                    <p>
                      {
                        Array.from({ length: review.rating }, (_, i) => (
                          <span key={i} className='text-[#F7871B] text-xl'>★</span>
                        ))
                      }
                      {
                        Array.from({ length: 5 - review.rating }, (_, i) => (
                          <span key={i} className='text-gray-300 text-xl'>★</span>
                        ))
                      }
                    </p>
                    <p className='text-gray-500 font-medium leading-6'>{review.comment}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </section>
  )
}
