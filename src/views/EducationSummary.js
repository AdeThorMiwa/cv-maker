import { Button, Row, Col, Empty } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { EducationCard, PageTitle } from "./../components";
import { useContextSelector } from 'use-context-selector';
import AppContext from "../context/App";
import { DELETE_EDUCATION } from "../context/Types";

const EducationSummary = ({ history }) => {
    const education = useContextSelector(AppContext, ctx => ctx.appState.education);
    const dispatch = useContextSelector(AppContext, ctx => ctx.dispatch);

    return (
        <>
            <PageTitle title="Education summary" />
            <Row style={{ margin: "32px 0" }}>
                {education.length ? education.map((edu, i) => (
                    <Col span="24" style={{ marginBottom: 16 }} key={i}>
                        <EducationCard
                            {...edu}
                            index={i + 1}
                            onEdit={() => history.push(`/education/${i}`)}
                            onDelete={() => dispatch({
                                type: DELETE_EDUCATION,
                                payload: i
                            })} />
                    </Col>
                )) : (
                        <Col span="24">
                            <Empty description={<span>No Education added yet</span>} image={Empty.PRESENTED_IMAGE_SIMPLE} />
                        </Col>
                    )
                }
            </Row>
            <Button
                type="dashed"
                className="big-button"
                block
                size="large"
                onClick={() => history.push("/education")}
                icon={<PlusCircleOutlined />}>
                Add {education.length ? " Another " : ""} Degree
            </Button>
        </>
    );
};

export default EducationSummary;