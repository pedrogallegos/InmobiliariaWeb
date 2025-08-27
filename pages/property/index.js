import Layout from '@/components/Layout'
import React from 'react'

export default function EstateList () {
  return (
    <Layout title='Lista de Propiedades'>
      <div className='container mx-auto p-4'>
        <h1 className='text-2xl font-bold mb-4'>Lista de Propiedades</h1>
        <p>Aquí se mostrarán las propiedades disponibles.</p>
      </div>
    </Layout>
  )
}
