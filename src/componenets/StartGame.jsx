import { Container, Row, Col, Button } from "react-bootstrap"


const StartGame = ({toggle}) => {
    return (
        <>
            <Container>
                <Row className="min-vh-100 d-flex justify-content-center align-items-center">
                    <Col className="border" md={6}>
                        <div className="d-flex align-items-stretch">
                            <img src="./images/dice.png" alt="" className="img-fluid" />
                        </div>
                    </Col>
                    <Col className="border" md={6}>
                        <h1 style={{ fontSize: "100px" }}>DICE GAME</h1>
                        <div className="text-end me-4">
                            <Button variant="dark" onClick={toggle}>start</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
           
        </>
    )
}
export default StartGame