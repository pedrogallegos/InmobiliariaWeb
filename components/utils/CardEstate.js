import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CardEstate ({ estate }) {
  return (
    <article className='md:max-w-[236px] lg:max-w-[338px] bg-white rounded-xl'>
      <figure className='relative'>
        <Link href={`/propiedades/${estate.id}`} className='relative z-10'>
          <img src={estate.image} alt={`Property ${estate.id}`} className='h-[236px] lg:h-[340px] object-cover rounded-xl' />
        </Link>
        <span className='absolute top-2 left-2 bg-white text-xs text-gray-800 px-2 py-1 rounded-full z-50'>
          Nueva propiedad
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
        <h3 className=' text-neutral-800 leading-4 mb-1'>{estate.title}</h3>
        <div className='flex gap-1 text-neutral-700 mb-1'>
          <span>
            <strong>$4,390,400</strong><sup>00 MXN</sup>
          </span>
          <span>$4,600,000</span>
        </div>
        <div className='flex items-center gap-2'>
          <div className='flex items-center gap-2 flex-wrap'>
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
                alt='Baños'
                width={20}
                height={20}
              />
              <span className='text-sm text-neutral-600'>{estate.size}</span>
            </div>
            <div className='flex items-center gap-1'>
              <Image
                src='/assets/icons/icon-bath.svg'
                alt='Área'
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
