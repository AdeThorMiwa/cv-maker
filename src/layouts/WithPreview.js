import { Row, Col } from "antd";
import WithControlsLayout from "./WithControls";
import useMedia from "../hooks/useMedia";
import { RenderTemplate } from "../components";

const WithPreview = ({ children, ...rest }) => {
    const { md } = useMedia();

    return (
        <WithControlsLayout isPreview {...rest}>
            <Row gutter={32}>
                <Col lg={{ span: 16 }}>
                    {children}
                </Col>
                {!md && (
                    <Col lg={{ span: 8 }}>
                        <div>
                            <RenderTemplate size="sm" />
                        </div>
                    </Col>
                )}
            </Row>
        </WithControlsLayout>
    );
}

export default WithPreview;
