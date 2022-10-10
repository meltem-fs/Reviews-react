
import React from 'react'
import Buton from '../buton/Buton';
import CardStyle from "./card.module.css"


import { FaChevronLeft, FaChevronRight } from "react-icons/fa";



const Card = ({data}) => {
    
  return (
    <div>
        {data.map((item) => {
            const {id,image,name,job,text} = item;
            return (
              <div key={id} className={CardStyle.card}>
                <img src={image} alt="" />
                <h2>{name} </h2>
                <h3>{job} </h3>
                <p>{text} </p>
                <span>
                  <FaChevronLeft />
                </span>
                <span>
                  <FaChevronRight />
                </span>

                <Buton />
              </div>
            );
        })}
       
    </div>
  )
}

export default Card