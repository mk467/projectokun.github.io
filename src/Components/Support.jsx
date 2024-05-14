import React, { useState } from 'react'

export const Support = () => {
const [inpo,setinpo]=useState(false)
const [added,setadded]=useState("")
const [lista,setlista]=useState([
  {
    item:"MongoDB"
  },
  {
    item:"ExpressJs"
  },
  {
    item:"ReactJs"
  },
  {
    item:"NodeJs"
  },
 ])

const additem=()=>{
  if(added==""){
    alert("fill the input")
  }
  else{
    setlista([...lista,{item:added}])
    setinpo(false)
  }
}

const handle=(e)=>{
  var option=e.target.value
  if(option=="add item"){
    setinpo(true)
  }
}

const handleinput=(e)=>{
  setadded(e.target.value)
}

return (
  <center>
  <div className='inpo'>
    {
      inpo? <div>
        <input type="text" className='inpoinput' onChange={handleinput}/>
        <button className='inpobutton' onClick={additem}>↓</button>
      </div>:
       <select className='inposelect' onChange={handle}>
       {
         lista.map((list,index)=>{
           return <option value={list.item}>{list.item}</option>
         })
       }
      <option value="add item" className="add-option">add item</option>
     </select>
    }  
    
  </div>
  </center>
)
}
