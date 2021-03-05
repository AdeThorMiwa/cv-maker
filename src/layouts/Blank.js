import { Layout, Row, Col } from "antd";

const Main = ({ children }) => {
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Layout.Header className="header">
                <Row>
                    <Col lg={{ offset: 4 }}>
                        <h1>Builder</h1>
                    </Col>
                </Row>
            </Layout.Header>
            <Layout.Content className="blank-content">
                {children}
            </Layout.Content>
            <Layout.Footer className="footer text-primary text-center text-small">
                © 2021, Buildr Limited. All rights reserved.
            </Layout.Footer>
        </Layout>
    );
}

export default Main;