import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CardEstate ({ estate }) {
  return (
    <article className='md:max-w-[236px]'>
      <figure className='relative'>
        <Link href={`/property/${estate.id}`} className='relative z-10'>
          <img src={estate.imageUrl} alt={`Property ${estate.id}`} className='h-[236px] object-cover rounded-xl' />
        </Link>
        <span className='absolute top-2 left-2 bg-white text-xs text-gray-800 px-2 py-1 rounded-full z-50'>
          Nueva Propiedad
        </span>
        <button type='button' className='absolute top-2 right-2 bg-white p-1 rounded-full shadow-md hover:bg-gray-100 transition-colors z-50'>
          <Image
            src='/assets/icons/icon-heart-outline.svg'
            alt='Guardar'
            width={20}
            height={20}
          />
        </button>
      </figure>
      <div className='py-2 px-1'>
        <h3 className='text-neutral-800 leading-4 mb-1'>{estate.title}</h3>
        <div className='flex gap-1 text-natural-700 mb-1'>
          <span>
            <strong>${estate.price}</strong><sup>00 MX</sup>
          </span>
          <span><s>${estate.price - 20000}</s></span>
        </div>
        <div className='flex items-center gap-2'>
          <div className='flex-items-center gap-2 flex-wrap'>
            <div className='flex items-center gap-1 flex-1'>
              <Image
                src='/assets/icons/icon-room.svg'
                alt='Habitaciones'
                width={20}
                height={20}
              />
              <span className='text-neutral-600 text-sm'>{estate.bedrooms} Habitaciones</span>
            </div>
            <div className='flex items-center gap-1'>
              <Image
                src='/assets/icons/icon-garden.svg'
                alt='Jardin'
                width={20}
                height={20}
              />
              <span className='text-neutral-600 text-sm'>{estate.garden} Jardines</span>
            </div>
            <div className='flex items-center gap-1'>
              <Image
                src='/assets/icons/icon-bathroom.svg'
                alt='Baños'
                width={20}
                height={20}
              />
              <span className='text-neutral-600 text-sm'>{estate.bathrooms} Baños</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
