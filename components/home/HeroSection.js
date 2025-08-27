import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function HeroSection () {
  return (
    <section className='p-4 container'> {/* Contenedor para el contenido principal */}
      <div className='bg-hero saturate-150 rounded-xl h-[250px] md:h-[430px] p-4 flex items-end px-10 md:items-center'>
        <div className='max-w-[250px] md:max-w-full mx-auto md:ml-0 lg:flex lg:flex-col lg:gap-4'>
          <h1 className='text-white font-bold leading-6 text-xl md:text-4xl xl:text-5xl text-center lg:leading-[48px] md:text-start'>Propiedades exclusivas en las <br className='hidden md:block' /> mejores ubicaciones</h1>
          <p className='hidden md:block text-white text-lg'>Invertir en Quintana Roo este 2025 <br className='hidden md:block' /> es aprovechar un mercado inmobiliario!</p>
          <div className='flex gap-4 my-5 flex-col items-center justify-center md:flex-row md:justify-start'>
            <Link href='/nosotros' className='bg-white text-blue-950 px-4 py-2 rounded-full w-full md:max-w-[180px] text-center'>
              Contactar
            </Link>
            <Link href='/nosotros' className='bg-orange-500 text-white px-4 py-2 rounded-full w-full md:max-w-[180px] text-center hidden md:block'>
              Ver propiedades
            </Link>
          </div>
        </div>
        <div className='hidden lg:block'>
          <Image
            src='/assets/home/image-grid.png'
            alt='Imagen de propiedades en Quintana Roo'
            width={600}
            height={400}
            className='rounded-lg shadow-lg'
          />
        </div>
      </div>
    </section>
  )
}
