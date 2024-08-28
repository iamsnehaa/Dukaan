import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/Popular/Popular.jsx';
import Offers from '../components/offers/Offers.jsx';
import NewCollections from '../components/newCollections/NewCollections.jsx';
import { NewsLetter } from '../components/NewsLetter/NewsLetter';
export const Shop = () => {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Offers/>
        <NewCollections/>
        <NewsLetter/>
    </div>
  )
}

