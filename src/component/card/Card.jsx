
import React from 'react'
import CardStyle from "./card.module.css"

const Card = ({data}) => {
    
  return (
    <div>
        {data.map((item) => {
            const {id,image,name,job,text} = item;
            return(
                <div key={id} className={CardStyle.card} >
                      <img src={image} alt="" />
                      <h2>{name} </h2>
                      <h3>{job} </h3>
                       <p>{text} </p>
                </div>
      
            )
        })}
       
    </div>
  )
}

export default Card