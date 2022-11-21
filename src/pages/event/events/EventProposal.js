import React from 'react'
import {App,RightSide,LogoHolder,Image,EventManagementHolder,CreateEvent,EventProposalHolder,Reportmgt,HorizontalTags,HelpTag,SettingTag,LeftSide,CreateEventHolder,EventHolder,PictureHolder,PhotoHolder,Photo,EventDescription,PhoneContactHolder,PhoneContact1,PhoneContact2,BudgetLinkHolder,BudgetHolder,PresentBudgetHolder,PreviousBudgetHolder} from "./EventProposal.styled"
import {MdOutlineAssignmentInd} from "react-icons/md"
import Logo from "../../Images/logo.png"
import Caret from "../../Images/double caret.svg"
import Camera from "../../Images/camera.png"
import {TbCalendarTime} from "react-icons/tb"
import {BsSpeedometer2} from "react-icons/bs"
import {MdHelpOutline} from "react-icons/md"
import {FiSettings} from "react-icons/fi"
import {VscBellDot} from "react-icons/vsc"
import {RiArrowDropDownLine} from "react-icons/ri"



export default function EventProposal () {
  return (
    <div>
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
                <EventProposalHolder>
                   <MdOutlineAssignmentInd style={{margin: 'auto', top: 'auto', marginRight: '5%', color: 'black'}}/>
                   <p>Event Proposal</p>
                </EventProposalHolder>
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
              <p>Event Proposal</p>
              <VscBellDot style={{marginTop:'2%',marginLeft:'76%', borderRadius:'60%',border: '1px solid #D9D9D9',color:'#484848'}}/>
              <PictureHolder>

              </PictureHolder>
              <RiArrowDropDownLine style = {{marginTop: '2%', marginRight: '2%', color: 'rgba(0, 0, 0, 0.3)'}}/>
        
            </CreateEventHolder>
            <EventHolder>
             <h1>Event Management</h1>
             <img style={{width:'15px',height:'13px',marginTop:'1.5%'}} src={Caret} alt="caret"/>
             <p>Create Event</p>
             <img style={{width:'15px',height:'13px',marginTop:'1.5%'}} src={Caret} alt="caret"/>
             <p>Categories</p>
             <img style={{width:'15px',height:'13px',marginTop:'1.5%'}} src={Caret} alt="caret"/>
             <p>Previews</p>
             <img style={{width:'15px',height:'13px',marginTop:'1.5%'}} src={Caret} alt="caret"/>
             <p>Event Proposal</p>
            </EventHolder>
           <PhotoHolder>
                <h1>User Image</h1>
                <Photo>
                 <img src= {Camera} alt= "camera"/>
                </Photo>
           </PhotoHolder>
           <EventDescription>
             <h1>Description of the event (not more than 150 words)</h1>
             <p>What the event is?</p>
             <textarea name="name" type="id" minLength={0} maxLength={900} placeholder="Type here..."/> 
             <p>Why the event?</p>
             <textarea name="name" type="id" minLength={0} maxLength={900}  placeholder="Type here..."/> 
             <p>How the event hopes to achieve it?</p>
             <textarea name="name" type="id" minLength={0} maxLength={900}  placeholder="Type here..."/> 
            </EventDescription>
            <PhoneContactHolder> 
                <PhoneContact1>
                   <p>Phone Contact 1</p>
                   <input name="name" type="id" placeholder="Type here..."/>
                </PhoneContact1>
                <PhoneContact2>
                  <p>Phone Contact 2</p>
                  <input name="name" type="id" placeholder="Type here..."/>
                </PhoneContact2>
            </PhoneContactHolder>
           
            <BudgetLinkHolder>
                <h1>Link to Event Budget</h1>
                <BudgetHolder>
                    <PresentBudgetHolder>
                     <p>Link to event budget</p>
                     <input name="name" type="id" placeholder="Type here..."/>
                    </PresentBudgetHolder>
                    <PreviousBudgetHolder>
                       <p>Link to previous event budget</p>
                       <input name="name" type="id" placeholder="Type here..."/>
                    </PreviousBudgetHolder>
                </BudgetHolder>
            </BudgetLinkHolder>
        </LeftSide>
      </App>
    </div>
  )
}


