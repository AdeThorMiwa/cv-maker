import { Row, Typography, Col, Button, Modal } from "antd";
import CreateSvg from "./../assets/images/cv.svg";
import { useContextSelector } from 'use-context-selector';
import AppContext from "../context/App";
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { useEffect } from "react";

const showConfirm = (history, dispatch) => {
    Modal.confirm({
        title: 'We found an unfinished CV on your system!',
        icon: <ExclamationCircleOutlined />,
        okText: "Continue With Unfinished CV",
        cancelText: "Create New CV",
        onOk() {
            history.push("/preview")
        },
        onCancel() {
            dispatch({
                type: "DONE"
            })
            history.push("/select-template")
        },
    });
}


const Landing = ({ history }) => {
    const hasSelectTemplate = useContextSelector(AppContext, ctx => ctx.appState.selectedTemplate);
    const dispatch = useContextSelector(AppContext, ctx => ctx.dispatch);

    useEffect(() => {
        if (hasSelectTemplate) showConfirm(history, dispatch)
    }, [hasSelectTemplate, history, dispatch])

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