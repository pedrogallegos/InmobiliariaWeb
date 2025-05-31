import Head from 'next/head'
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children, title, description }) {
    return (
        <>
        <Head>
            <title>{title || 'Default Title'}</title>
            <meta name= "description" content={description || 'Default description'} />
        </Head>
        <Navbar />
            {children}
        <Footer />
        </>
    )
}