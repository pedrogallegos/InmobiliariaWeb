import Link from 'next/link'
import React from 'react'

export default function Blog () {
  return (
    <section className='container py-6 px-4 bg-[#FAFAFA]'>
      <h2 className='title-section'>Blog</h2>
      <div className='bg-[#E1EBF7] p-4 rounded-xl'>
        <figure className='hidden md:block mb-6'>
          <img src='/assets/blog/imagen-cancun.png' alt='Blog Image' />
        </figure>
        <div className='flex flex-col gap-5'>
          <h3 className='text-neutral-900 text-xl font-semibold leading-10'>La mejor zona de este 2025</h3>
          <p className='text-gray-600'>Invertir en Quintana Roo este 2025 es aprovechar un mercado inmobiliario en pleno crecimiento, respaldado por su atractivo turístico global y proyectos clave como el Tren Maya.</p>
          <p className='text-gray-600'>Asegura un retorno competitivo mientras disfrutas de playas de ensueño y una calidad de vida incomparable. ¡Es el momento de ser parte del futuro del Caribe!</p>
          <Link href='/#' className='btn-secondary'> Leer más</Link>
        </div>
      </div>
    </section>
  )
}
