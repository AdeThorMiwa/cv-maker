import { Row, Col, Button } from "antd";
import WithControlsLayout from "./WithControls";
import useMedia from "../hooks/useMedia";
import { RenderTemplate } from "../components";
import AppContext from "../context/App";
import { useContextSelector } from 'use-context-selector';
import { useHistory } from "react-router-dom";

const WithPreview = ({ children, ...rest }) => {
    const { md } = useMedia();
    const appState = useContextSelector(AppContext, ctx => ctx.appState);
    const history = useHistory()

    return (
        <WithControlsLayout isPreview {...rest}>
            <Row gutter={32}>
                <Col lg={{ span: 16 }}>
                    {children}
                </Col>
                {!md && (
                    <Col lg={{ span: 8 }}>
                        <div className="d-flex-col-center">
                            <RenderTemplate size="sm" appState={appState} />
                            <Button className="mt" onClick={() => history.push("/preview")}>Preview</Button>
                        </div>
                    </Col>
                )}
            </Row>
        </WithControlsLayout>
    );
}

export default WithPreview;
