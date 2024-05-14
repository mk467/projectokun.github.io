import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Home = () => {
    const [ids,setids]=useState([])
    const GoTo=useNavigate()
    useEffect(()=>{
        setTimeout(() => {
           // GoTo("/Support")        
        },3000);
    },[])
    const cards=[
        {
            image:"src/assets/imgs/iimg.jpg",
            title:"Post title",
            description:"Post description li mcha l 7anot w chra sndala fiha joj drahm w kla ikhan bldi f 2 dyal lil wiliwliwlwilwiwlwiwiiii",
            productid:1
        },
        {
            image:"src/assets/imgs/iimg.jpg",
            title:"Post title2",
            description:"Post description li mcha l 7anot w chra sndala fiha joj drahm w kla ikhan bldi f 2 dyal lil wiliwliwlwilwiwlwiwiiii",
            productid:2
        },
        {
            image:"src/assets/imgs/iimg.jpg",
            title:"Post title3",
            description:"Post description li mcha l 7anot w chra sndala fiha joj drahm w kla ikhan bldi f 2 dyal lil wiliwliwlwilwiwlwiwiiii",
            productid:3
        },
        {
            image:"src/assets/imgs/iimg.jpg",
            title:"Post title4",
            description:"Post description li mcha l 7anot w chra sndala fiha joj drahm w kla ikhan bldi f 2 dyal lil wiliwliwlwilwiwlwiwiiii",
           
        }
    ]
  return (
    <div className='home'>
        <div className="homeheader">
            <h1>
                Welcome to ikhan
            </h1>
        </div>
        <div className="cards">
            {cards.map((card,index)=>{
                return <div className="card" key={index} onClick={()=>{
                    setids([...ids,{id:index,name:card.title}])
                    console.log(ids);
                }}>
                <div className="image">
                    <img src={card.image} className='img'/>
                </div>
                <div className="title">
                    <h1>{card.title} </h1>
                </div>
                <div className="discription">
                    <p>{card.description}</p>
                </div>
                <div className="button">
                    <Link to={"product/"+card.productid} className="buttontext">Read more →</Link>
                </div>
            </div>
            })
            
            }
        </div>
    </div>
  )
}
