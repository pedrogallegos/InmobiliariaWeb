import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Grid, Pagination } from 'swiper/modules'

const reviews = [
  {
    id: 2,
    name: 'María López',
    rating: 2,
    comment: 'Muy buena experiencia, aunque el proceso de compra fue un poco lento.',
    date: '2023-09-15'
  },
  {
    id: 3,
    name: 'Carlos García',
    rating: 5,
    comment: 'La propiedad es hermosa y el equipo de ventas fue muy profesional.',
    date: '2023-08-20'
  },
  {
    id: 4,
    name: 'Ana Martínez',
    rating: 3,
    comment: 'La ubicación es excelente, pero el servicio postventa podría mejorar.',
    date: '2023-07-30'
  },
  {
    id: 5,
    name: 'Luis Fernández',
    rating: 4,
    comment: 'Muy contento con mi nueva casa, aunque el precio fue un poco alto.',
    date: '2023-06-25'
  },
  {
    id: 6,
    name: 'Laura Sánchez',
    rating: 5,
    comment: 'Gran experiencia de compra, definitivamente recomendaría esta inmobiliaria.',
    date: '2023-05-10'
  },
  {
    id: 7,
    name: 'Pedro Gallegos',
    rating: 4,
    comment: 'El equipo fue muy atento y resolvió todas mis dudas rápidamente.',
    date: '2023-04-05'
  },
  {
    id: 8,
    name: 'Sofía Torres',
    rating: 5,
    comment: 'Excelente atención y asesoramiento durante todo el proceso de compra.',
    date: '2023-03-15'
  },
  {
    id: 9,
    name: 'Andrés Ramírez',
    rating: 3,
    comment: 'La propiedad es buena, pero el proceso de cierre fue complicado.',
    date: '2023-02-28'
  },
  {
    id: 10,
    name: 'Clara Jiménez',
    rating: 5,
    comment: 'Muy feliz con mi nueva casa, el equipo fue muy profesional y amable.',
    date: '2023-01-20'
  }
]
export default function Reviews () {
  return (
    <section className='container py-4 px-4 bg-[#FAFAFA]'>
      <div>
        <h2 className='title-section'>Reseñas recientes</h2>
        {/* Carousel de propiedades destacadas */}
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
                        <div className='p-4 bg-white rounded-xl border border-[#EFEFEF] flex gap-2 items-start'>
                          <div className='bg-[#FFBB5D] p-5 rounded-lg text-white font-bold text-2xl'>
                            PG
                          </div>
                          <div>
                            <h3 className='text-neutral-900 text-base font-bold leading-9'>{review.name}</h3>
                            <p>
                              {
                                Array.from({ length: review.rating },
                                  (_, i) => (
                                    <span
                                      key={i}
                                      className='text-yellow-500'
                                    >
                                      ★
                                    </span>
                                  ))
                              }
                              {
                                Array.from({ length: 5 - review.rating },
                                  (_, i) => (
                                    <span
                                      key={i}
                                      className='text-gray-300'
                                    >
                                      ★
                                    </span>
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
