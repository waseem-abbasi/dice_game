import { useState } from "react"
import { Button } from "react-bootstrap"
const RoleDice = ({currentDice,roleDice}) => {
    
    
    return (
        <>
            <div className="d-flex flex-column justify-content-center align-items-center mt-5">

                <img src= {`images/dice_${currentDice}.png`}alt="dice 1" height={150}  onClick={roleDice}/>

                <p className="mt-3">Click on Dice To Roll</p>

              

            </div>
        </>
    )
}
export default RoleDice