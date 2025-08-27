import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SectionLink from './Utils/SectionLink'
const sectionLinks = [
  {
    id: 'help',
    title: 'Centro de ayuda',
    links: [
      { name: 'Ayuda', href: '/#' },
      { name: '¿Cómo comprar?', href: '/#' },
      { name: 'Mapa del sitio', href: '/#' },
      { name: 'Preguntas frecuentes', href: '/#' },
      { name: '¿Cuánto vale?', href: '/#' },
      { name: 'Trabaja con nosotros', href: '/#' }
    ]
  },
  {
    id: 'about',
    title: 'Conócenos',
    links: [
      { name: 'Blog', href: '/#' },
      { name: '¿Quiénes somos?', href: '/#' },
      { name: 'Garantía', href: '/#' },
      { name: 'Comentarios y sugerencias', href: '/#' }
    ]
  },
  {
    id: 'services',
    title: 'Servicios',
    links: [
      { name: 'Publicar', href: '/#' },
      { name: 'Evalúo online', href: '/#' },
      { name: 'Comprar', href: '/#' }
    ]
  }
]
export default function Footer () {
  const [selectedToggle, setSelectedToggle] = useState(null)
  return (
    <footer className='py-6 px-4 lg:py-20'>
      <div className='container'>
        {/* Section of Logo */}
        <figure className='mb-6'>
          <Image src='/assets/logos/logo-inmoestate.svg' alt='Inmoestate Logo' width={200} height={50} />
        </figure>
        {/* Section of Links mobile and desktop */}
        <div className='hidden lg:grid lg:grid-cols-4 lg:gap-8'>
          {
            sectionLinks.map((section) => (
              <SectionLink key={section.id} section={section} />
            ))
          }
          <div>
            <p className='text-neutral-800 font-semibold text-lg leading-8 mb-2'>Contactanos</p>
            <div className='flex gap-2 items-center'>
              {/* Icons for social media */}
              <Link href='https://www.instragram.com' target='_blank' rel='noopener noreferrer' aria-label='Instagram'>
                <Image src='/assets/icons/icon-instagram.svg' alt='Instagram Icon' width={24} height={24} />
              </Link>
              <Link href='https://www.facebook.com' target='_blank' rel='noopener noreferrer' aria-label='Facebook'>
                <Image src='/assets/icons/icon-facebook.svg' alt='Instagram Icon' width={24} height={24} />
              </Link>
              <Link href='https://www.whatsapp.com' target='_blank' rel='noopener noreferrer' aria-label='Whatsapp'>
                <Image src='/assets/icons/icon-whatsapp.svg' alt='Instagram Icon' width={24} height={24} />
              </Link>
              <Link href='https://www.twitter.com' target='_blank' rel='noopener noreferrer' aria-label='Twitter'>
                <Image src='/assets/icons/icon-twitter.svg' alt='Instagram Icon' width={24} height={24} />
              </Link>
            </div>
            <Link href='mailto:contacto@propiedades.com' className='text-sm'>contacto@propiedades.com</Link>
          </div>
        </div>
        <div className='flex flex-col gap-6 lg:hidden'>
          {
            sectionLinks.map((section, index) => (
              <div key={index} className='w-full'>
                <button
                  className='lg:hidden text-gray-700 flex justify-between w-full py-2'
                  onClick={() => setSelectedToggle(selectedToggle === section.title ? null : section.title)}
                >
                  <span className='text-neutral-800 font-semibold text-lg leading-6'>{section.title}</span>
                  <Image
                    src='/assets/icons/icon-chevron-down.svg'
                    alt='Arrow Down Icon'
                    width={24}
                    height={24}
                    className={`transition-transform ${selectedToggle === section.title ? 'rotate-180' : ''}`}
                  />
                </button>
                {
                  selectedToggle === section.title && (
                    <ul className='flex flex-col gap-2'>
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <Link href={link.href} className='text-[#353535] leading-5 text-base'>{link.name}</Link>
                        </li>
                      ))}
                    </ul>
                  )
                }
              </div>
            ))
          }
          <div>
            <p className='text-neutral-800 font-semibold text-lg leading-6 mb-4'>Conctactanos</p>
            <div className='flex gap-2 items-center'>
              {/* Icons for social media */}
              <Link href='https://www.instagram.com/jonitech96' target='_blank' rel='noopener noreferrer' aria-label='Instagram'>
                <Image src='/assets/icons/icon-instagram.svg' alt='Instagram Icon' width={24} height={24} />
              </Link>
              <Link href='#' target='_blank' rel='noopener noreferrer' aria-label='WhatsApp'>
                <Image src='/assets/icons/icon-whatsapp.svg' alt='WhatsApp Icon' width={24} height={24} />
              </Link>
              <Link href='https://www.facebook.com/jonitech96' target='_blank' rel='noopener noreferrer' aria-label='Facebook'>
                <Image src='/assets/icons/icon-facebook.svg' alt='Facebook Icon' width={24} height={24} />
              </Link>
              <Link href='#' target='_blank' rel='noopener noreferrer' aria-label='Twitter'>
                <Image src='/assets/icons/icon-twitter.svg' alt='Twitter Icon' width={24} height={24} />
              </Link>
            </div>
            <Link href='mailto:contacto@propiedades.com' className='text-sm'>contacto@propiedades.com</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
