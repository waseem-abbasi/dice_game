import React, { useState } from 'react'
import TotalScore from './TotalScore'
import PlayGame from './PlayGame'
import RoleDice from './RoleDice'
import { Button, Row, Col, Container } from 'react-bootstrap'
import Rules from './Rules'
const GamePlay = () => {

    const [selectValue, setSelectValue] = useState("")
    const [currentDice, setCurrentDice] = useState(3)
    const [score, setScore] = useState(0)
    const [error, setError] = useState("")
    const[rulesShow,setRulesShow] = useState(false)

    //genrate random number
    const genrateRandom = (min, max) => {
        console.log(Math.floor(Math.random() * (max - min) + min))
        return Math.floor(Math.random() * (max - min) + min);
    }
    const roleDice = () => {
        if (!selectValue) {
            setError("please select number first")
            return;
        }

        const randomNumber = genrateRandom(1, 7)
        console.log("random number", randomNumber)
        // setCurrentDice(randomNumber)
        setCurrentDice((prev) => randomNumber)
        console.log("current dice", currentDice)
        if (selectValue === randomNumber) {
            setScore((prev) => prev + randomNumber)

        } else {
            setScore((prev) => prev - 2)
        }
        setSelectValue(undefined)
    }

    //reset score
    const resetScore=()=>{
        setScore(0)
    }
    return (
        <main>
            <Container className='mt-1'>
                <Row >
                    <Col className='text-center pt-4' xs={3} >
                        <TotalScore score={score} />
                    </Col>
                    <Col >

                        <PlayGame selectValue={selectValue} setSelectValue={setSelectValue} error={error} setError={setError} />
                    </Col>
                </Row>

                <RoleDice currentDice={currentDice} roleDice={roleDice} />

                <div className='mx-auto  d-flex flex-column justify-content-center align-items-center '>
                    <Button className="mb-2" onClick={resetScore}>Reset Score</Button>
                    <Button variant='dark'  onClick={()=>setRulesShow((prev)=>!prev)}>{rulesShow ?"hide rules":" show rules"}</Button>
                </div>
            </Container>
                
                {rulesShow && <Rules/>}
        </main>

    )
}

export default GamePlay