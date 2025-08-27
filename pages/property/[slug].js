import Layout from '@/components/Layout'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Navigation, Pagination } from 'swiper/modules'
import FilterEstates from '@/components/home/FilterEstateSection'
import ModalDefault from '@/components/Utils/ModalDefault'

const imagesUrl = [
  '/assets/estates/terrenos-tulum-1.png',
  '/assets/estates/terrenos-tulum-2.png',
  '/assets/estates/terrenos-tulum-3.png',
  '/assets/estates/terrenos-tulum-4.png',
  '/assets/estates/terrenos-tulum-5.png'
]

const amenities = [
  {
    icon: '/assets/icons/icon-business.svg',
    text: '3 espacios equipados para hacer home office.'
  },
  {
    icon: '/assets/icons/icon-pool.svg',
    text: 'Alberca'
  },
  {
    icon: '/assets/icons/icon-garden.svg',
    text: 'Jardín'
  },
  {
    icon: '/assets/icons/icon-gym.svg',
    text: 'Gimnasio'
  }
]

export default function DetailEstate () {
  // Utilizar un estado para el toggle de ver más (descripcion)
  const [showMore, setShowMore] = useState(false)
  // Utilizar un estado para el toggle de ver más (amenidades)
  const [showMoreAmenities, setShowMoreAmenities] = useState(false)

  // Estado para mostrar el modal
  const [showModal, setShowModal] = useState(false)

  // Funcion para manejar el toggle de ver más
  const handleToggle = () => {
    setShowMore(!showMore)
  }

  // Funcion para manejar el toggle de ver más (amenidades)
  const handleToggleAmenities = () => {
    setShowMoreAmenities(!showMoreAmenities)
  }

  // Funcion para abrir el modal
  const handleOpenModal = () => setShowModal(true)

  // Función para cerrar el modal
  const handleCloseModal = () => setShowModal(false)

  const router = useRouter()
  const { slug } = router.query
  return (
    <Layout title='Detalle de la propiedad'>
      <main className='container'>
        <header>
          <nav className='hidden md:flex justify-between items-center bg-white p-4 rounded-lg mb-4'>
            <ul className='flex gap-4 text-sm text-gray-600'>
              <li><Link href='/'>Inicio</Link></li>
              <li><Link href='/propiedades'>Propiedades</Link></li>
              <li><Link href='/propiedades/nueva'>Nueva Propiedad</Link></li>
            </ul>
          </nav>
          <div className='relative w-full hidden lg:block'>
            <div className='grid md:grid-cols-6 md:grid-rows-2 gap-4 w-full shrink-0'>
              <figure className='col-span-2 row-span-2 rounded-md border border-gray-500 overflow-hidden'>
                <img src='/assets/estates/terrenos-tulum-1.png' alt='Detalle de la propiedad' className='w-full h-full object-cover' />
              </figure>
              <figure className='col-span-2 rounded-md border border-gray-500 overflow-hidden'>
                <img src='/assets/estates/terrenos-tulum-2.png' alt='Detalle de la propiedad' className='w-full h-full object-cover' />
              </figure>
              <figure className='col-span-2 rounded-md border border-gray-500 overflow-hidden'>
                <img src='/assets/estates/terrenos-tulum-3.png' alt='Detalle de la propiedad' className='w-full h-full object-cover' />
              </figure>
              <figure className='col-span-2 rounded-md border border-gray-500 overflow-hidden'>
                <img src='/assets/estates/terrenos-tulum-4.png' alt='Detalle de la propiedad' className='w-full h-full object-cover' />
              </figure>
              <figure className='col-span-2 rounded-md border border-gray-500 overflow-hidden'>
                <img src='/assets/estates/terrenos-tulum-5.png' alt='Detalle de la propiedad' className='w-full h-full object-cover' />
              </figure>
            </div>
            <button className='absolute bottom-4 right-4 z-50 bg-gray-200 text-xs text-gray-800 font-semibold p-1 rounded-md flex items-center gap-2' onClick={() => alert('Todas las fotos')}>
              <Image src='/assets/icons/icon-lightning-bolt.svg' alt='Ver más fotos' width={16} height={16} />
              Ver más fotos
            </button>
          </div>
          {/* // TODO: Componentizar el slides de imagenes */}
          <div className='lg:hidden'>
            <SliderImage images={imagesUrl} />
          </div>
        </header>
        <section className='flex flex-col md:flex-row gap-4 mt-4'>
          <article className='rounded-xl bg-white flex flex-col lg:w-3/4 py-4 px-6 gap-4'>
            <div className='flex flex-col gap-2'>
              <div className='flex items-center justify-between'>
                <span className='text-sm text-gray-500'>Almaera</span>
                <button>
                  <Image src='/assets/icons/icon-heart-outline.svg' alt='Favorito' width={24} height={24} />
                </button>
              </div>
              <h1 className='text-gray-900 text-lg font-semibold lg:text-xl'>Fraccionamiento Residencial del Mayab, Mérida</h1>
              <div>
                <p>
                  <span className='text-base text-gray-500 tracking-wide leading-9'>Venta desde</span> <strong className='text-lg text-green-500 leading-9'>$2,650,000<sup>MXN</sup></strong>
                </p>
                <span className='bg-green-50 flex items-center p-1 rounded-md text-green-600 font-semibold w-fit'>
                  <svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' fill='none'>
                    <path d='M5.5 7.5H3L6.5 0.5V4.5H9L5.5 11.5V7.5Z' fill='#23A047' />
                  </svg>
                  En contrucción - Entrega verano 2025
                </span>
              </div>
            </div>
            <hr />
            <div className='flex flex-col items-start gap-2'>
              <h2 className='text-base text-gray-900 font-semibold leading-9 tracking-wide'>Descripción</h2>
              {/* // TODO: Implementar toggle para ver más */}
              <p className={`text-[#353535] ${showMore ? '' : 'line-clamp-3'}`}>
                Almaera es un exclusivo desarrollo residencial ubicado en una de las mejores zonas de Mérida, Yucatán, ofreciendo la combinación perfecta entre lujo, confort y conveniencia. A tan solo 5 minutos de las mejores plazas comerciales, hospitales de primer nivel y los restaurantes más selectos, y a 20 minutos de las hermosas playas cercanas, vivir aquí te permite disfrutar de lo mejor de la ciudad sin sacrificar la tranquilidad. La primera torre, actualmente en venta, cuenta con 23 departamentos de cuatro tipologías únicas: Éter, Cénit, Aura y Serena, cada uno con un diseño moderno y funcional que se adapta a tus necesidades y estilo de vida.Almaera te ofrece más de 15 amenidades exclusivas, diseñadas para que disfrutes al máximo: desde áreas recreativas y deportivas, hasta espacios verdes y zonas de convivencia. Además, tendrás la comodidad de contar con estacionamiento privado, lo que garantiza tu tranquilidad y seguridad. Este desarrollo de tres torres redefine el estilo de vida urbano, rodeado de lujo y con una ubicación inmejorable, brindándote un hogar donde puedes vivir la vida que siempre soñaste.
              </p>
              <button onClick={handleToggle} className='font-medium text-blue-950'>{showMore ? 'Ver menos' : 'Ver más'}</button>
            </div>
            <hr />
            <div>
              <h2 className='text-base text-gray-900 font-semibold leading-9 tracking-wide'>Amenidades</h2>
              {
                amenities.length === 0 && <p className='text-gray-500'>No hay amenidades disponibles.</p>
              }
              <ul className='text-[#353535] flex flex-col gap-2'>
                {
                  amenities.slice(0, showMoreAmenities ? amenities.length : 4).map((amenity, index) => (
                    <li key={index} className='flex items-center gap-2'>
                      <Image src={amenity.icon} alt={amenity.text} width={24} height={24} />
                      <span>{amenity.text}</span>
                    </li>
                  ))
                }
              </ul>
              {
                amenities.length > 4 && (
                  <button onClick={handleToggleAmenities} className='font-medium text-blue-950 mt-2'>
                    {showMoreAmenities ? 'Ver menos' : 'Ver más'}
                  </button>
                )
              }
            </div>
            <hr />
            <div>
              <h2 className='text-lg font-semibold tracking-wide leading-9 text-[#353535]'>Ubicación del desarrollo y zona</h2>
              <address className='flex items-center gap-2 mb-4'>
                <Image src='/assets/icons/icon-map.svg' alt='Ubicación' width={24} height={24} />
                <span className='text-sm tracking-wide not-italic leading-5'>79 entre 30 y 32, Residencial del Mayab, Mérida, Yuc., Fraccionamiento Residencial del Mayab, Mérida</span>
              </address>
              <div className='h-[200px] md:h-[382px] w-full mb-4'>
                <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14883.686163346869!2d-86.83987706113469!3d21.155520454702252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c2bf6e2ba1b27%3A0x708dbfb7c54ef89c!2sPlaza%20Hollywood!5e0!3m2!1ses!2smx!4v1753760738954!5m2!1ses!2smx' width='100%' height='100%' style={{ border: 0 }} allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade' />
              </div>
            </div>
            <hr />
            <div>
              <h2 className='text-lg font-semibold tracking-wide leading-9 text-[#353535]'>Guia 360*</h2>
              <div className='h-[200px] md:h-[382px] w-full mb-4'>
                <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14883.686163346869!2d-86.83987706113469!3d21.155520454702252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c2bf6e2ba1b27%3A0x708dbfb7c54ef89c!2sPlaza%20Hollywood!5e0!3m2!1ses!2smx!4v1753760738954!5m2!1ses!2smx' width='100%' height='100%' style={{ border: 0 }} allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade' />
              </div>
            </div>
          </article>
          <aside className='hidden lg:block rounded-xl bg-white p-4 lg:w-1/4 h-fit sticky top-5'>
            <form className='flex flex-col gap-4 '>
              <p className='text-lg text-[#353535] font-semibold leading-9'>Contactarme con el anunciante</p>
              <div className='flex flex-col gap-3'>
                <div>
                  <input type='text' id='fullname' name='fullname' required className='border border-gray-300 p-2 rounded-md w-full bg-white' placeholder='Nombre completo' />
                </div>
                <div>
                  <input type='tel' id='phone' name='phone' required className='border border-gray-300 p-2 rounded-md w-full bg-white' placeholder='Número telefónico' />
                  <small className='text-xs text-gray-500'>Nos servirá para brindarte un mejor servicio.</small>
                </div>
                <div>
                  <input type='email' id='email' name='email' required className='border border-gray-300 p-2 rounded-md w-full bg-white' placeholder='Correo electrónico' />
                  <small className='text-xs text-gray-500'>Recibirás promociones y correos sobre el estatus de tus pedidos.</small>
                </div>
                <div>
                  <textarea id='message' name='message' rows='4' required className='border border-gray-300 p-2 rounded-md w-full bg-white' placeholder='Mensaje' value='Hola, estoy interesado en esta propiedad, favor de enviarme información adicional o ponerse en contacto conmigo. ' />
                  <small className='text-xs text-gray-500'>Hasta 200 caracteres.</small>
                </div>
                <button className='bg-blue-950 text-white px-4 py-2 rounded-full w-full'>Contáctar</button>
              </div>
            </form>
          </aside>
        </section>
        <section>
          <FilterEstates title='Otras propiedades frente al mar' />
        </section>
        <div className='fixed bottom-0 left-0 right-0 bg-white py-3 px-4 z-50 lg:hidden'>
          <button className='bg-blue-950 text-white px-4 py-2 rounded-full w-full py-2 px-10' onClick={handleOpenModal}>Contactar</button>
        </div>
        {
          showModal && (
            <ModalDefault isOpen={showModal} onClick={handleCloseModal} onClose={handleCloseModal} />
          )
        }
      </main>
    </Layout>
  )
}

function SliderImage ({ images }) {
  return (
    <Swiper
      spaceBetween={16}
      slidesPerView={1}
      loop
      navigation
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} alt={`Detalle de la propiedad ${index + 1}`} className='h-[375px] w-full object-cover' />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
