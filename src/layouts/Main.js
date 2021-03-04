import { Layout, Row, Col, Steps } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import useMedia from "../hooks/useMedia";
import { Link, Redirect } from "react-router-dom";
import AppContext from "../context/App";
import { useContextSelector } from 'use-context-selector';
import { OPEN_SIDEBAR } from "../context/Types";

const steps = [
    "Personal",
    "Experience",
    "Education",
    "Skill",
    "Summary",
    "Finalize"
]

const Main = ({ children, current, hasSidebar = false }) => {
    const { md, width } = useMedia();
    const breakpoint = width < 770;
    const hasSelectTemplate = useContextSelector(AppContext, ctx => ctx.appState.selectedTemplate);
    const dispatch = useContextSelector(AppContext, ctx => ctx.dispatch);

    if (!hasSelectTemplate) return <Redirect to="/select-template" />

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Layout.Header className="header">
                <Row>
                    <Col span={breakpoint ? 24 : 2} lg={{ offset: 2 }} xl={{ offset: 4 }} sm={{ offset: 0 }} md={{ offset: 0 }} style={{ position: "relative" }}>
                        {breakpoint && hasSidebar && <MenuOutlined style={{ position: "absolute", top: 25 }} onClick={() => dispatch({ type: OPEN_SIDEBAR })} />}
                        <Link to="/"><h1 style={{ textAlign: breakpoint ? "center" : "left" }}>Builder</h1></Link>
                    </Col>
                    {!breakpoint && (
                        <Col flex="auto" md={{ flex: "auto", offset: 1 }} lg={{ span: 18, offset: 1 }} xl={{ offset: 4, span: 16 }}>
                            <div className="steps-wrapper">
                                <Steps size="small" current={current}>
                                    {steps.map(step => <Steps.Step key={step} title={<span style={{ fontSize: md ? 12 : 14 }}>{step}</span>} />)}
                                </Steps>
                            </div>
                        </Col>
                    )}
                    <Col lg={{ span: 2 }} md={{ span: 0 }} />
                </Row>
            </Layout.Header>
            <Layout.Content className="content" style={width < 600 ? { padding: 24 } : {}}>
                <Row>
                    <Col xxl={{ span: 16 }} xl={{ span: 18 }} lg={{ span: 20 }} md={{ span: 24 }} style={{ margin: "auto" }}>
                        {children}
                    </Col>
                </Row>
            </Layout.Content>
            <Layout.Footer className="footer text-primary text-center text-small">
                © 2021, Builders Limited. All rights reserved.
            </Layout.Footer>
        </Layout>
    );
}

export default Main;
