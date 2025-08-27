import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const activities = [
  {
    icon: '/assets/icons/icon-business.svg',
    title: 'Visita a empresas costeras'
  },
  {
    icon: '/assets/icons/icon-moon.svg',
    title: 'Noche de estrellas'
  },
  {
    icon: '/assets/icons/icon-coffe.svg',
    title: 'El sazón de Yucatán'
  },
  {
    icon: '/assets/icons/icon-users.svg',
    title: 'Acampar en grupo'
  },
  {
    icon: '/assets/icons/icon-pet.svg',
    title: 'Experiencia animal'
  },
  {
    icon: '/assets/icons/icon-cenotes.svg',
    title: 'cenotes y ríos subterráneos'
  },
  {
    icon: '/assets/icons/icon-gym.svg',
    title: 'Gimnasio Olimpico'
  },
  {
    icon: '/assets/icons/icon-ellipsis.svg',
    title: 'Y más'
  }

]

export default function ActivitiesSection () {
  return (
    <section className='py-6 px-4 lg:py-10 xl:py-20 bg-[#FAFAFA]'>
      <div className='container lg:flex lg:flex-row lg:justify-between'>
        <div className='flex flex-col gap-6 w-full xl:w-1/3 lg:pr-6 lg:items-start lg:justify-center'>
          <h2 className='text-neutral-700 text-2xl lg:text-3xl font-semibold'>Actividades en <br className='hidden xl:block' /> Quintana Roo</h2>
          <div className='flex overflow-hidden overflow-x-auto gap-4 xl:hidden'>
            {
            activities.map((activity, index) => (
              <div key={index} className='bg-white rounded-xl border border-[#E8E8E8]'>
                <div className='w-[200px] flex flex-col justify-center items-center text-center p-5'>
                  <Image src={activity.icon} alt={activity.title} width={40} height={40} className='mx-auto' />
                  <h3>{activity.title}</h3>
                </div>
              </div>
            ))
          }
          </div>
          <p className='xl:mb-6'>Explora estas actividades imperdibles que te llevarán a conocer la magia de la región. ¿Listo para vivir una experiencia inolvidable? 🐠☀️</p>
          <Link href='#' className='btn-secondary'>
            Contactar
          </Link>
        </div>
        <div className='hidden xl:flex xl:w-2/3 xl:justify-end'>
          <div className='grid grid-cols-4 gap-4 xl:gap-6'>
            {
              activities.map((activity, index) => (
                <div key={index} className='bg-white p-5 rounded-xl border border-[#E8E8E8] xl:w-[200px] xl:h-[193px] flex items-center justify-center'>
                  <div className='flex flex-col items-center text-center gap-2'>
                    <img src={activity.icon} alt={activity.title} />
                    <h3>{activity.title}</h3>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}
