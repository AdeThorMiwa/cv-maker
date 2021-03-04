import { Row, Col, Form, Input, Button, Typography, Space } from "antd";
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { useContextSelector } from 'use-context-selector';
import AppContext from "../context/App";
import { UPDATE_PERSONAL } from "../context/Types";
import { useEffect } from "react";
import { handleFormChange } from "../utils/form";

const formItemLayout = {
    labelCol: { span: 24 },
    wrapperCol: {
        span: 24
    },
};

const Personal = () => {
    const [form] = Form.useForm();
    const personal = useContextSelector(AppContext, ctx => ctx.appState.personal);
    const dispatch = useContextSelector(AppContext, ctx => ctx.dispatch);
    const onChange = handleFormChange(dispatch);


    useEffect(() => {
        return () => {
            dispatch({
                type: UPDATE_PERSONAL,
                payload: form.getFieldsValue(true)
            });
        }
    }, [form, dispatch])

    return (
        <>
            <Typography.Title level={2} className="text-primary">Fill out these personal details</Typography.Title>
            <Typography.Title level={4}>We suggest including an email and phone number.</Typography.Title>
            <Form
                {...formItemLayout}
                form={form}
                name="personal"
                initialValues={{ ...personal }}
                size="large"
                requiredMark={false}
                scrollToFirstError
                layout="vertical"
                onChange={onChange}
            >
                <Space direction="vertical" size={32}>
                    <Row gutter={16}>
                        <Col lg={{ span: 12 }} md={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 24 }}>
                            <Form.Item
                                name="firstName"
                                label="First Name"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your firstname!",
                                    },
                                ]}
                                hasFeedback
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col lg={{ span: 12 }} md={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 24 }}>
                            <Form.Item
                                name="lastName"
                                label="Last Name"
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span="24">
                            <Form.Item
                                name="profession"
                                label="Profession"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your profession!",
                                    },
                                ]}
                                hasFeedback
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col lg={{ span: 12 }} md={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 24 }}>
                            <Form.Item
                                name="city"
                                label="City"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your city!",
                                    },
                                ]}
                                hasFeedback
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col lg={{ span: 12 }} md={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 24 }}>
                            <Row gutter={16}>
                                <Col lg={{ span: 12 }} md={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 12 }}>
                                    <Form.Item
                                        name="stateOrProvince"
                                        label="State/Province"
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col lg={{ span: 12 }} md={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 12 }}>
                                    <Form.Item
                                        name="zipCode"
                                        label="Zip Code"
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={{ span: 12 }} md={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 24 }}>
                            <Form.Item
                                name="phone"
                                label="Phone"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your phone!",
                                    },
                                ]}
                                hasFeedback
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col lg={{ span: 12 }} md={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 24 }}>
                            <Form.Item
                                name="email"
                                label="Email Address"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your email!",
                                    },
                                ]}
                                hasFeedback
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span="24">
                            <Form.List name="socialLinks">
                                {(fields, { add, remove }) => (
                                    <Row>
                                        <Col span="24">
                                            {fields.map((field, i) => (
                                                <Row key={i} gutter={16}>
                                                    <Col lg={{ span: 12 }} md={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 12 }}>
                                                        <Form.Item
                                                            {...field}
                                                            name={[field.name, 'website']}
                                                            fieldKey={[field.fieldKey, 'link']}
                                                            rules={[{ required: true, message: 'Missing Social website' }]}
                                                        >
                                                            <Input placeholder="Social Website" />
                                                        </Form.Item>
                                                    </Col>
                                                    <Col lg={{ span: 12 }} md={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 12 }}>
                                                        <Form.Item
                                                            {...field}
                                                            name={[field.name, 'link']}
                                                            fieldKey={[field.fieldKey, 'link']}
                                                            rules={[{ required: true, message: "Missing Website's link" }]}
                                                        >
                                                            <Input placeholder="Social Link" />
                                                        </Form.Item>
                                                        <MinusCircleOutlined className="remove-social" onClick={() => remove(field.name)} />
                                                    </Col>
                                                </Row>
                                            ))}
                                        </Col>
                                        <Form.Item>
                                            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                                Add Social Links
                                            </Button>
                                        </Form.Item>
                                    </Row>
                                )}
                            </Form.List>
                        </Col>
                    </Row>
                </Space>
            </Form>
        </>
    )
}

export default Personal;