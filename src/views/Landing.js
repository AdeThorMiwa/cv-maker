import { Row, Typography, Col, Button } from "antd";
import CreateSvg from "./../assets/images/cv.svg";

const Landing = ({ history }) => {
    return (
        <div className="landing-wrapper">
            <div className="right__side" />
            <div className="container">
                <Row gutter={64}>
                    <Col span="12">
                        <Typography.Title className="jumbo">Just three <span className="text-primary">simple</span> steps.</Typography.Title>
                        <ul className="list">
                            <li><span> Select a template from our library of <br /> professional designs</span></li>
                            <li><span> Build your resume with our  <br /> industry-specific bullet points</span></li>
                            <li><span> Download your resume, print it out <br />  and get it ready to send!</span></li>
                        </ul>
                    </Col>
                    <Col span="12">
                        <img alt="..." className="illustration" src={CreateSvg} />
                        <Button block type="primary" onClick={() => history.push("/select-template")} danger>Create My CV</Button>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Landing;