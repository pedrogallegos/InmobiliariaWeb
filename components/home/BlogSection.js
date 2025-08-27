import Link from 'next/link'
import React from 'react'

export default function Blog () {
  return (
    <section className='py-6 px-4 bg-[#FAFAFA]'>
      <div className='container'>
        <div className='flex items-center justify-between mb-6'>
          <h2 className='title-section'>Blog</h2>
          <Link href='#' className='text-blue-950 font-semibold text-sm'>
            Ver más
          </Link>
        </div>
        <div className='bg-[#E1EBF7] p-4 lg:p-0 rounded-xl lg:flex lg:items-center overflow-hidden'>
          <figure className='hidden lg:block lg:w-1/2 mb-6 lg:mb-0'>
            <img src='/assets/home/imagen-cancun.png' alt='Blog Image' className='lg:h-[520px]' />
          </figure>
          <div className=' lg:w-1/2 lg:pl-6'>
            <div className='flex flex-col gap-5 lg:max-w-[550px] mx-auto'>
              <h3 className='text-neutral-900 text-xl font-semibold leading-10 lg:text-5xl'>La mejor zona este 2025</h3>
              <p className='text-gray-600 lg:text-lg'>Invertir en Quintana Roo este 2025 es aprovechar un mercado inmobiliario en pleno crecimiento, respaldado por su atractivo turístico global y proyectos clave como el Tren Maya.</p>
              <p className='text-gray-600 lg:text-lg'>Asegura un retorno competitivo mientras disfrutas de playas de ensueño y una calidad de vida incomparable. ¡Es el momento de ser parte del futuro del Caribe!</p>
              <Link href='/#' className='btn-secondary'>Leer más</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
