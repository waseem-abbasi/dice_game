import React, { useState } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import RoleDice from './RoleDice'
const PlayGame = ({selectValue,setSelectValue,error,setError}) => {
    const NumberArr = [1,2,3,4,5,6]
   
    const numberSelectorHandler = (value) =>{
        setSelectValue(value)
        setError("")
    }

    console.log("selectvalue",selectValue)
  return (
    <>
        
                {/* <Col md={6}>
                    <h1>0</h1>
                    <p>Total Score</p>
                </Col> */}
                <p>{error}</p>
                <div  className='border text-end' md={6}>
                {
                    NumberArr.map((value,index)=>(
                        <span className={`border p-3 mx-1 ${selectValue === value ?"bg-dark text-light":"bg-white"}`} key={index} onClick={()=>numberSelectorHandler(value)}> {value}</span>
                    ))
                }
                    <p className='mt-3 text-end'>Select Number</p>
                </div>
         
       
    </>
  )
}

export default PlayGame