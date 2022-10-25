import React from 'react'
import Card from '../../components/cards/Card'
import Footer from '../../components/footer/Footer'
import { CardHolder } from '../../globalStyles'
import { ContentSectionHeader } from '../landingPage/HomeStyled'
import Navbar from '../../components/navbar/Navbar'

const EventCategories = () => {
  return (
    <div>
        <Navbar/>
        <ContentSectionHeader>Event Categories</ContentSectionHeader>
        <CardHolder style={{display:'inline-flex', flexWrap:'wrap', margin:'1%', rowGap:'1% 1%'}}>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          
        </CardHolder>
        <Footer/>
    </div>
  )
}

export default EventCategories