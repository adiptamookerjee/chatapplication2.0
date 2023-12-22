import React from 'react'
import './Search.css'

function Search() {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type="text" placeholder='Find a user'/>
      </div>
      <div className='userChat'>
        <img src={"dp.png"} alt=""/>
        <div className='userChatInfo'>
          <span className='name'>Sahil</span>
        </div>
      </div>
    </div>
  )
}

export default Search