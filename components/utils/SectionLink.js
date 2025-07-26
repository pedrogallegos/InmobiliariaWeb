import Link from 'next/link'
import React from 'react'

export default function SectionLink ({ section }) {
  return (
    <div className={section.id}>
      <p className='text-neutral-800 font-semibold text-lg leading-6'>{section.title}</p>
      <ul>
        {section.links.map(link => (
          <li key={link.name}>
            <Link href={link.href} className='text-neutral-[#353535] leading-5 text-base hover:text-orange-500 hover:underline'>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
