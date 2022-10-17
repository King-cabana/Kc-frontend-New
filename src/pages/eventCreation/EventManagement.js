import React from 'react'
import Logo from "../../Images/logo.png"
import {App,RightSide,LogoHolder,Image,EventManagementHolder,CreateEvent, EventProposal,LeftSide, CreateEventHolder,EventHolder,ResearchCategoryHolder,VerticalLine,PictureHolder,EventFormHolder,EventNameHolder,AttendanceHolder,SponsorHolder,EventFolder,EventSource,EventListHolder,EventSourceHolder,EventCounts,EventDateHolder,EventTimeHolder,EventDescription,EventSponsorHolder,ContactHolder,SecondaryInfoHolder,InfoHolder,ListHolder,OfficeHolder,DepartmentOfficeHolder,DepartmentHolder,Office,EmailPhoneHolder,EmailHolder,PhoneHolder,ButtonHolder,NextBtn,PrevBtn,HorizontalTags,HelpTag,SettingTag,Reportmgt} from "./EventManagement.styled"
import {MdOutlineAssignmentInd} from "react-icons/md"
import {TbCalendarTime} from "react-icons/tb"
import {BsSpeedometer2} from "react-icons/bs"
import {VscBellDot} from "react-icons/vsc"
import {RiArrowDropDownLine} from "react-icons/ri"
import {MdHelpOutline} from "react-icons/md"
import {FiSettings} from "react-icons/fi"
import {WiTime4} from "react-icons/wi"
import {BsCalendar2Date} from "react-icons/bs"
// import {BiCategory} from "react-icons/bi"
import {MdDriveFileRenameOutline} from "react-icons/md"
// import {MdOutlineAssignmentTurnedIn} from "react-icons/md"
import {VscLocation} from "react-icons/vsc"

export default function EventManagement(){
  return (
    <>
    
      <App>
      <RightSide>
      <LogoHolder>
                <Image>
                 <img style={{cursor:'pointer'}} src= {Logo} alt= "cabana"/>
                </Image> 
               
                <h1>Main Menu</h1>
                <EventManagementHolder>
                  <TbCalendarTime style={{margin: 'auto', top: 'auto', marginRight: '5%', color: '#C4C4C4'}}/>
                  <p>Event Management</p>
                </EventManagementHolder>
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
                 <MdHelpOutline style={{marginLeft:'5%', marginTop:'2%'}}/>
                 <p>Help</p>
                </HelpTag>
                <SettingTag>
                  <FiSettings style={{marginLeft:'5%', marginTop:'2%'}}/>
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
             <img src='image.png' alt=""/>
             <p>Create Event</p>
            </EventHolder>
            <ResearchCategoryHolder>
               <h1>Market Research of Community </h1>
               <h2>Categories</h2>
            </ResearchCategoryHolder>
            <VerticalLine>

            </VerticalLine>

            <EventNameHolder>
                <h1>Event Budget</h1>
                <div>
                 <h2>Upload</h2>
                 {/* <MdDriveFileRenameOutline style={{color: '#C4C4C4',alignItems: 'center',paddingTop:'2.5%',paddingLeft:'1.5%'}}/>  */}
                 <input name="name" type="id" placeholder="Type here..."/> 
                 
                </div>
                <p>Upload as PDF, CSV, not more than 1mb</p>

            </EventNameHolder> 

            
            <EventFormHolder>
              <EventFolder>
                <AttendanceHolder>
                 <p>Extimated attendance</p>
                  <div>
                   <MdDriveFileRenameOutline style={{color: '#C4C4C4',width:'2vw',margin:'auto', top:'auto',}}/> 
                   <input name="name" type="id" placeholder="Type here..."/> 
                  </div>
                </AttendanceHolder>
              
                <SponsorHolder>
                 <p>List of Sponsors</p>
                  <div>
                   <MdDriveFileRenameOutline style={{color: '#C4C4C4',width:'2vw',margin:'auto', top:'auto',}}/> 
                   <input name="name" type="id" placeholder="Type here..."/> 
                  </div>
                </SponsorHolder>
              </EventFolder>
              <h1>Timeline</h1>
              <EventSource>
                <EventListHolder>
                  <p>List of Sponsors</p>
                  <div>
                   <MdDriveFileRenameOutline style={{color: '#C4C4C4',width:'2vw',margin:'auto', top:'auto',}}/> 
                   <input name="name" type="id" placeholder="Type here..."/> 
                  </div>
                </EventListHolder>
                <EventSourceHolder>
                  <p>Event Location</p>
                  <div>
                   <VscLocation style={{color: '#C4C4C4',width:'2vw',margin:'auto', top:'auto',}}/> 
                   <input name="name" type="id" placeholder="Type here..."/> 
                  </div>
                </EventSourceHolder>
              </EventSource> 
              <EventCounts>
                <EventDateHolder>
                  <p>Event Date</p>
                  <div>
                   <BsCalendar2Date style={{color: '#C4C4C4',width:'2vw',margin:'auto', top:'auto',}}/> 
                   <input name="name" type="id" placeholder="Type here..."/> 
                  </div>
                </EventDateHolder>
                <EventTimeHolder>
                  <p>Event Time</p>
                  <div>
                   <WiTime4 style={{color: '#C4C4C4',width:'2vw',margin:'auto', top:'auto',}}/> 
                   <input name="name" type="id" placeholder="Type here..."/> 
                  </div>
                </EventTimeHolder>
              </EventCounts>
            </EventFormHolder>
            
           
              
            <EventDescription>
              <h1>Potential Impact for Sponsors</h1>
              <p>Potential Impact for sponsors</p>
              <textarea name="name" type="id" placeholder="Type here..."/> 
            </EventDescription>

            <EventSponsorHolder>
              <h1>Comprehensive List of Benefits</h1>
              <p>List of Benefits</p>
              <textarea name="name" type="id" placeholder="Type here..."/> 
            </EventSponsorHolder>
            
            <ContactHolder>
              <h1>Contact Information</h1>
              <p>Key Contact</p>
              <div>
               <MdDriveFileRenameOutline style={{color: '#C4C4C4',width:'2vw',margin:'auto', top:'auto',}}/> 
               <input name="name" type="id" placeholder="Type here..."/> 
              </div>
            </ContactHolder>

            
            
            <SecondaryInfoHolder>
              <h1>Secondary Information</h1>
              <InfoHolder>
                <ListHolder>
                  <p>Name of Staff Adviser</p>
                  <div>
                   <MdDriveFileRenameOutline style={{color: '#C4C4C4',width:'2vw',margin:'auto', top:'auto',}}/> 
                   <input name="name" type="id" placeholder="Type here..."/> 
                  </div>
                </ListHolder>
                <OfficeHolder>
                  <p>Office Held</p>
                  <div>
                   <MdDriveFileRenameOutline style={{color: '#C4C4C4',width:'2vw',margin:'auto', top:'auto',}}/> 
                   <input name="name" type="id" placeholder="Type here..."/> 
                  </div>
                </OfficeHolder>
              </InfoHolder>
              <DepartmentOfficeHolder>
                <DepartmentHolder>
                  <p>Name of Staff Adviser</p>
                  <div>
                   <MdDriveFileRenameOutline style={{color: '#C4C4C4',width:'2vw',margin:'auto', top:'auto',}}/> 
                   <input name="name" type="id" placeholder="Type here..."/> 
                  </div>
                </DepartmentHolder>
                <Office>
                  <p>Name of Staff Adviser</p>
                  <div>
                   <MdDriveFileRenameOutline style={{color: '#C4C4C4',width:'2vw',margin:'auto', top:'auto',}}/> 
                   <input name="name" type="id" placeholder="Type here..."/> 
                  </div>
                </Office>
              </DepartmentOfficeHolder>
              <EmailPhoneHolder>
                <EmailHolder>
                  <p>Name of Staff Adviser</p>
                  <div>
                   <MdDriveFileRenameOutline style={{color: '#C4C4C4',width:'2vw',margin:'auto', top:'auto',}}/> 
                   <input name="name" type="id" placeholder="Type here..."/> 
                  </div>
                </EmailHolder>
                <PhoneHolder>
                  <p>Name of Staff Adviser</p>
                  <div>
                   <MdDriveFileRenameOutline style={{color: '#C4C4C4',width:'2vw',margin:'auto', top:'auto',}}/> 
                   <input name="name" type="id" placeholder="Type here..."/> 
                  </div>
                </PhoneHolder>
              </EmailPhoneHolder>
            </SecondaryInfoHolder>
            <ButtonHolder>
             <PrevBtn>Back</PrevBtn> 
             <NextBtn>Next</NextBtn>
            </ButtonHolder>
        </LeftSide>
      </App>
    </>
  )
}

