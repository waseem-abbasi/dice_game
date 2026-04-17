import { useState } from "react"
import { Button } from "react-bootstrap"
const RoleDice = ({currentDice,roleDice}) => {
    
    
    return (
        <>
            <div className="d-flex flex-column justify-content-center align-items-center ">

                <img src= {`images/dice_${currentDice}.png`}alt="dice 1" height={150}  onClick={roleDice}/>

                <p className="">Click on Dice To Roll</p>


            </div>
        </>
    )
}
export default RoleDice