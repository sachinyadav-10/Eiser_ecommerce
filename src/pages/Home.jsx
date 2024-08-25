import React from 'react'
import Banner from '../components/Banner'
import FeaturedProduct from '../components/FeaturedProducts'
import Offer from '../components/Offer'
import NewProducts from '../components/NewProducts'
import InspiredProducts from '../components/InspiredProducts'

function HomeRender() {
  return (
    <>
      <Banner />
      <FeaturedProduct />
      <Offer />
      <NewProducts />
      <InspiredProducts />
    </>
  )
}

export default HomeRender