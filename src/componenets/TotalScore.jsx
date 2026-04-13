import { Col } from "react-bootstrap"
const TotalScore = ({score}) => {
    return (
        <>
            {/* <Col md={6}> */}
            <div>
                <h1>{score}</h1>
                <p>Total Score</p>
            </div>
            {/* </Col> */}
        </>
    )
}
export default TotalScore