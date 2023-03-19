import React, { useState } from 'react'
import { useParams } from 'react-router-dom'


function Discription(props) {
    const id=useParams(); 

const item=props.movie[id.id]
  return (
    <div>
        {item.desc}
      <iframe width="1100" height="600px"src={item.video}></iframe>
    </div>
  )
    
  }
export default Discription