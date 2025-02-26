// File: src/pages/index.js
import { useState, useEffect } from 'react'
import Head from 'next/head'
import Preloader from '@/components/Preloader'
import HomePage from '@/components/HomePage'
import Script from 'next/script'

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulating content loading
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Head>
        <title>Society of Engineering Students - JKUAT</title>
        <meta name="description" content="The official website of the Society of Engineering Students at Jomo Kenyatta University of Agriculture and Technology" />
      </Head>
      
      <Script
        id="responsive-viewport"
        strategy="beforeInteractive"
      >{`
        // Fix viewport issues on mobile devices
        (function() {
          const viewport = document.querySelector('meta[name="viewport"]');
          if (viewport) {
            viewport.content = "width=device-width, initial-scale=1, maximum-scale=1";
          }
        })();
      `}</Script>
      
      {loading && <Preloader />}
      <HomePage />
    </>
  )
}