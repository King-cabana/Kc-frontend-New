import React from 'react'
import Logo from "../../Images/logo.png"
import Caret from "../../Images/double caret.svg"
import Camera from "../../Images/camera.png"
import {App,RightSide,LogoHolder,Image,EventManagement,CreateEvent, EventProposal,LeftSide, CreateEventHolder,EventHolder,PictureHolder,PhotoHolder,Photo,EventFormHolder,EventSource,EventCounts,EventDescription,Word,NextBtn,HorizontalTags,HelpTag,SettingTag,Reportmgt} from "./CreateEvents.styled"
import {MdOutlineAssignmentInd} from "react-icons/md"
import {TbCalendarTime} from "react-icons/tb"
import {BsSpeedometer2} from "react-icons/bs"
import {VscBellDot} from "react-icons/vsc"
import {RiArrowDropDownLine} from "react-icons/ri"
import {MdHelpOutline} from "react-icons/md"
import {FiSettings} from "react-icons/fi"
import {WiTime4} from "react-icons/wi"
import {BsCalendar2Date} from "react-icons/bs"
import {BiCategory} from "react-icons/bi"
import {MdDriveFileRenameOutline} from "react-icons/md"
import {MdOutlineAssignmentTurnedIn} from "react-icons/md"
import {VscLocation} from "react-icons/vsc"


export default function CreateEvents(){

  return (
    <>
      <App>
        
        <RightSide>
            <LogoHolder>
                <Image>
                 <img style={{cursor:'pointer'}} src= {Logo} alt= "cabana"/>
                </Image> 
               
                <h1>Main Menu</h1>
                <EventManagement>
                  <TbCalendarTime style={{margin: 'auto', top: 'auto', marginRight: '5%', color: '#C4C4C4'}}/>
                  <p>Event Management</p>
                </EventManagement>
                <CreateEvent >
                 <BsSpeedometer2 style={{margin: 'auto', top: 'auto', marginRight: '5%', color: '#C4C4C4'}}/>
                 <p>Create Event</p>
                </CreateEvent>
                <EventProposal>
                   <MdOutlineAssignmentInd style={{margin: 'auto', top: 'auto', marginRight: '5%', color: 'black'}}/>
                   <p>Event Proposal</p>
                </EventProposal>
                <Reportmgt>
                 <MdOutlineAssignmentInd style={{margin: 'auto', top: 'auto', marginRight: '5%', color: 'black'}}/>
                 <p>Report Management</p>
                </Reportmgt>
                <HorizontalTags>

                </HorizontalTags>

                <h2>Account</h2>
                <HelpTag>
                 <MdHelpOutline style={{marginLeft:'5%', marginTop:'10%'}}/>
                 <p>Help</p>
                </HelpTag>
                <SettingTag>
                  <FiSettings style={{marginLeft:'5%', marginTop:'10%'}}/>
                  <p>Settings</p>
                </SettingTag>
            </LogoHolder>

        </RightSide>
        <LeftSide>
            <CreateEventHolder>
              <p>Create Event</p>
              <VscBellDot style={{marginTop:'2%',marginLeft:'76%', borderRadius:'60%',border: '1px solid #D9D9D9',color:'#484848'}}/>
              <PictureHolder>

              </PictureHolder>
              <RiArrowDropDownLine style = {{marginTop: '2%', marginRight: '2%', color: 'rgba(0, 0, 0, 0.3)'}}/>
        
            </CreateEventHolder>
            <EventHolder>
             <h1>Event Management</h1>
             <img src={Caret} alt="caret"/>
             <p>Create Event</p>
            </EventHolder>
            <PhotoHolder>
                <h1>User Image</h1>
                <Photo>
                 <img src= {Camera} alt= "camera"/>
                </Photo>
            </PhotoHolder>
            <EventFormHolder>
              <EventSource>
              
              <p>Event Name</p>
              <div>
               <MdDriveFileRenameOutline style={{color: '#C4C4C4',width:'2vw',margin:'auto', top:'auto'}}/> 
               <input name="name" type="id" placeholder="Type here..."/>
              </div>
              <p>Event Category</p>
              <div>
               <BiCategory style={{color: '#C4C4C4',width:'2vw',margin:'auto', top:'auto'}}/>
               <input name="name" type="id" placeholder="Type here..."/>
              </div>
              <p>Event Date</p>
              <div>
               <BsCalendar2Date style={{color: '#C4C4C4',width:'2vw',margin:'auto', top:'auto'}}/>
               <input name="name" type="id" placeholder="Type here..."/>
              </div>
              </EventSource>
              <EventCounts>
              <p>Event Theme</p>
              <div>
               <MdOutlineAssignmentTurnedIn style={{color: '#C4C4C4',width:'2vw',margin:'auto', top:'auto'}}/> 
               <input name="name" type="id" placeholder="Type here..."/>
              </div>
              <p>Event Location</p>
              <div>
               <VscLocation style={{color: '#C4C4C4',width:'2vw',margin:'auto', top:'auto'}}/>
               <input name="name" type="id" placeholder="Type here..."/>
              </div>
              <p>Event Time</p>
              <div>
               <WiTime4 style={{color: '#C4C4C4',width:'2vw',margin:'auto', top:'auto'}}/>
               <input name="name" type="id" placeholder="Type here..."/>
              </div>
              </EventCounts>
            </EventFormHolder>
            <EventDescription>
              <p>Event Description</p>
              <textarea name="name" type="id" placeholder="Type here..."/> 
            </EventDescription>
            <Word>Not more than 150 words.</Word>
            <NextBtn>Next</NextBtn>

        </LeftSide>
      </App>
    </>
  )

}

