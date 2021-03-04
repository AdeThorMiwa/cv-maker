import { Button, Row, Col, Empty } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { ExperienceCard, PageTitle } from "./../components";
import { useContextSelector } from 'use-context-selector';
import AppContext from "../context/App";
import { DELETE_EXPERIENCE } from "../context/Types";

const ExperienceSummary = ({ history }) => {
    const experience = useContextSelector(AppContext, ctx => ctx.appState.experience);
    const dispatch = useContextSelector(AppContext, ctx => ctx.dispatch);

    return (
        <>
            <PageTitle title="Work Experience summary" />
            <Row style={{ margin: "32px 0" }}>
                {experience.length ? experience.map((exp, i) => (
                    <Col span="24" style={{ marginBottom: 16 }} key={i}>
                        <ExperienceCard
                            {...exp}
                            index={i + 1}
                            onEdit={() => history.push(`/experience/${i}`)}
                            onDelete={() => dispatch({
                                type: DELETE_EXPERIENCE,
                                payload: i
                            })} />
                    </Col>
                )) : (
                        <Col span="24">
                            <Empty description={<span>No Experience yet</span>} image={Empty.PRESENTED_IMAGE_SIMPLE} />
                        </Col>
                    )
                }
            </Row>
            <Button
                type="dashed"
                className="big-button"
                block
                size="large"
                onClick={() => history.push("/experience")}
                icon={<PlusCircleOutlined />}>
                Add {experience.length ? " Another " : ""} Work Experience
            </Button>
        </>
    );
};

export default ExperienceSummary;