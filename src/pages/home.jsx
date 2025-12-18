import React from 'react'
import Hero from "../component/Hero"
import HeroLast from "../component/HeroLast"
import Bunner from "../component/Bunner"
import ImageGallery from "../component/ImageGallery"
import Textimonial from "../component/Textimonial"
import According from "../component/According"
import Contact from "../component/Contact"
import LastPrium from "../component/LastPrium"
import Product from "../component/Product"

export default function Home() {
  return (
    <>
      <Hero />
      <HeroLast />
      <Product />
      <Bunner />
      <ImageGallery />
      <Textimonial />
      <According />
      <Contact />
      <LastPrium />
    </>
  )
}
