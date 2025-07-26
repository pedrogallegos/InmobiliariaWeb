import React from 'react'
import Layout from '../components/Layout'

export default function nosotros () {
  return (
    <Layout title='About us' description='Learn more about us'>
      <div className='container mx-auto p-4'>
        <h1 className='text-3xl font-bold mb-4'>About Us</h1>
        <p className='mb-4'>We are a team of dedicated professionals committed to delivering the best service possible. Our mission is to provide quality products and exceptional customer service.</p>
        <p>Our team has years of experience in the industry, and we pride ourselves on our ability to adapt to the ever-changing market needs. We believe in continuous improvement and innovation.</p>
      </div>
    </Layout>
  )
}
