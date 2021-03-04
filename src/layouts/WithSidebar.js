import { Row, Col } from "antd";
import WithControlsLayout from "./WithControls";
import { Sidebar } from "./../components"

const WithSidebar = ({ children, ...rest }) => {
    return (
        <WithControlsLayout {...rest}>
            <Row gutter="32">
                <Col lg={{ span: 6 }} md={{ span: 6 }}>
                    <Sidebar />
                </Col>
                <Col lg={{ span: 18 }} md={{ span: 18 }} sm={{ span: 24 }} xs={{ span: 24 }}>
                    {children}
                </Col>
            </Row>
        </WithControlsLayout>
    );
};

export default WithSidebar;