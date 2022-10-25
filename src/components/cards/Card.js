import React from 'react'
import { EventCards, 
         ImageHolder, 
         CardContentHolder, 
         EventHeader, 
         EventDetails, 
         EventOrganizer, 
         DateAndTime } from './CardStyled'
import Image from '../../images/people.jpg'

const Card = () => {
  return (
    <EventCards>
    <ImageHolder>
      <img src={Image} alt='' />
    </ImageHolder>
    <CardContentHolder>
      <EventHeader>HOD Cup</EventHeader>
      <EventOrganizer>Skyline Properties</EventOrganizer>
      <DateAndTime>15 May 2020 9:30 am</DateAndTime>
      <EventDetails>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
        Velit officia consequat duis enim velit mollit. 
        Exercitation veniam consequat sunt nostrud amet.
      </EventDetails>
    
    </CardContentHolder>
      
  </EventCards>  
  )
}

export default Card