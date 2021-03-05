import { Row, Col, Button } from "antd";
import { useHistory } from "react-router-dom";
import MainLayout from "./Main";

const WithControl = ({ children, leftAction = null, right, rightText = "NEXT", rightAction = null, isPreview = false, ...rest }) => {
    const history = useHistory();

    const hasRight = !!right;
    let Right;
    if (hasRight) {
        Right = right;
    }

    let leftAttrib;
    let rightAttrib;
    if (isPreview) {
        leftAttrib = { lg: { span: 16 } };
        rightAttrib = { lg: { span: 8 } };
    } else {
        leftAttrib = { flex: "auto" };
        rightAttrib = {};
    }

    return (
        <MainLayout {...rest}>
            {children}
            <Row style={{ marginTop: 32 }} gutter={32}>
                <Col {...leftAttrib}>
                    <Button
                        className="big-button"
                        onClick={() => leftAction ? leftAction() : history.goBack()}
                        type="primary" ghost>
                        BACK
                    </Button>
                </Col>
                {hasRight ? <Right /> : (
                    <Col {...rightAttrib}>
                        <Button
                            className="big-button"
                            type="danger"
                            onClick={() => rightAction ? rightAction() : console.log("No Next Action...")}>
                            {rightText}
                        </Button>
                    </Col>
                )}
            </Row>
        </MainLayout>
    );
}

export default WithControl;
