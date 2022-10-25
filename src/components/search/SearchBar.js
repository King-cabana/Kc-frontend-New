import React from 'react'
import { SearchBar } from './SearchBarStyled'
import { FiSearch } from 'react-icons/fi'

const Search = () => {
  return (
    <div>
        <SearchBar>
            <FiSearch style={{width:'2vw',margin:'auto', top:'auto', color:'#C4C4C4'}}/>
            <input placeholder='Search'/> 
            <div style={{height:'inherit',backgroundColor:'#FF2957',width:'10vw', display:'flex',cursor:'pointer',
                justifyContent:'center', alignItems:'center', fontSize:'small', borderRadius:'0 8px 8px 0'}}>
            {/* <div style={{backgroundColor:'#D9D9D9', width:'1px', height:'7vh'}}/>   */}
            Search
            {/* <div style={{backgroundColor:'#D9D9D9', width:'1px', height:'7vh'}}/> */}
            {/* Date */}
            </div>
        </SearchBar>
    </div>
  )
}

export default Search