import { Badge, Card, Typography, Row, Col } from "antd";
import { underscoreToCapitalize } from "./../utils/transformers";
import CardActions from "./CardActions";
import useMedia from "../hooks/useMedia";

const EducationCard = ({ index, name, location, degree, fieldOfStudy, current, startDate, endDate, onEdit, onDelete }) => {
    const { sm } = useMedia();

    return <Badge.Ribbon text={`Degree ${index}`} placement="start">
        <Card>
            <CardActions onDelete={onDelete} onEdit={onEdit} />
            <Row gutter="16" className="mt" wrap>
                <Col>
                    <Typography.Title level={5}>{underscoreToCapitalize(degree)}, {fieldOfStudy}.</Typography.Title>
                </Col>
                <Col flex="auto">
                    <Typography.Title
                        level={5}
                        style={sm ? { fontStyle: "italic", fontSize: 12 } : {}}
                        className="m-0 text-normal ml">
                        {!sm && <>| &nbsp;&nbsp;</>}
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
                <Col span="24">
                    <Typography.Text level={5}> {name}, {location}.</Typography.Text>
                </Col>
            </Row>
        </Card>
    </Badge.Ribbon>
};

export default EducationCard;