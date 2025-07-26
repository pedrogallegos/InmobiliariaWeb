import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const activities = [
  {
    icon: 'assets/icons/icon-bussines.svg',
    title: 'Visita a empresas costeras'
  },
  {
    icon: 'assets/icons/icon-moon.svg',
    title: 'Noche de estrellas'
  },
  {
    icon: 'assets/icons/icon-coffe.svg',
    title: 'El sazón de Yucatán'
  },
  {
    icon: 'assets/icons/icon-bussines.svg',
    title: 'Acampar en grupo'
  },
  {
    icon: 'assets/icons/icon-pet.svg',
    title: 'Experiencia animal'
  },
  {
    icon: 'assets/icons/icon-cenotes.svg',
    title: 'Cenotes'
  },
  {
    icon: 'assets/icons/icon-gym.svg',
    title: 'Gimnasio olimpico'
  },
  {
    icon: 'assets/icons/icon-ellipsis.svg',
    title: 'Y más'
  }
]

export default function ActivitiesSection () {
  return (
    <section className='py-6 px-4 bg-[#FAFAFA] lg:flex'>
      <div className='flex flex-col gap-6 w-full xl:w-1/3 lg:pr-6'>
        <h2 className='text-neutral-700 text-2xl font-semibold'>Actividades en Quintana Roo</h2>
        <div className='flex overflow-hidden overflow-x-auto gap-4 xl:hidden'>
          {
          activities.map((activity, index) => (
            <div key={index} className='bg-white rounded-xl border border-[#E8E8E8]'>
              <div className='w-[200px] h-[193px] flex flex-col justify-center items-center text-center p-5'>
                <Image src={activity.icon} alt={activity.title} width={40} height={40} className='mx-auto' />
                <h3>{activity.title}</h3>
              </div>
            </div>
          ))
        }
        </div>
        <p>Explora estas actividades imperdibles que te llevarán a conocer la magia de la región.¿Listo para vivir una experiencia inolvidable? 🐠☀️</p>
        <Link href='#' className='btn-secondary'>
          Contactar
        </Link>
      </div>
      <div className='hidden lg:block lg:w-2/3'>
        <div className='grid grid-cols-4 gap-4'>
          {
          activities.map((activity, index) => (
            <div key={index} className='bg-white p-5 rounded-xl border border-[#E8E8E8]'>
              <img src={activity.icon} alt={activity.title} />
              <h3>{activity.title}</h3>
            </div>
          ))
        }
        </div>
      </div>
    </section>
  )
}
