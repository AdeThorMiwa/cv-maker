import { Badge, Card, Typography, Row, Col } from "antd";
import CardActions from "./CardActions";
import useMedia from "../hooks/useMedia";

const ExperienceCard = ({ index, title, employer, city, description, startDate, endDate, current, onEdit, onDelete }) => {
    const { sm } = useMedia();

    return <Badge.Ribbon text={`Experience ${index}`} placement="start">
        <Card>
            <CardActions onDelete={onDelete} onEdit={onEdit} />
            <Row gutter="16" className="mt">
                <Col lg={{ span: 12 }} md={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 24 }}>
                    <Typography.Title style={{ textTransform: "capitalize" }} level={5}>{title}, {employer}.</Typography.Title>
                </Col>
                <Col lg={{ span: 12 }} md={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 24 }}>
                    <Typography.Title
                        level={5}
                        style={sm ? { fontStyle: "italic", fontSize: 12 } : {}}
                        className="m-0 text-normal ml">
                        {!sm && <>| &nbsp;&nbsp;</>} {city} &nbsp;&nbsp; | &nbsp;&nbsp;
                        {startDate ?
                            new Date(startDate).getFullYear()
                            : "?"
                        } - {current ?
                            "Current"
                            : endDate ?
                                new Date(endDate).getFullYear()
                                : "?"
                        }
                    </Typography.Title>
                </Col>
            </Row>
            <Row>
                {description && description.length ? description.map((desc, i) => (
                    <Col lg={{ span: 24 }} key={i}>
                        <Typography.Text style={sm ? { fontSize: 12 } : {}} level={5}> • {desc}</Typography.Text>
                    </Col>
                )) : (
                        <Col lg={{ span: 24 }}>
                            <Typography.Text level={5}> No description </Typography.Text>
                        </Col>
                    )}
            </Row>
        </Card>
    </Badge.Ribbon>
};

export default ExperienceCard;