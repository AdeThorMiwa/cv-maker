import { Row, Col, Form, Input, DatePicker, Checkbox } from "antd";
import Editor from 'ckeditor4-react';
import { useContextSelector } from 'use-context-selector';
import AppContext from "../context/App";
import { useEffect, useState } from "react";
import { ADD_EXPERIENCE, EDIT_EXPERIENCE } from "../context/Types";
import { parseArrayToListMarkup } from "../utils/form";
import moment from "moment";
import editorConfig from "../constants/editor-basic.config";
import PageTitle from "../components/PageTitle";

const formItemLayout = {
    labelCol: { span: 24 },
    wrapperCol: {
        span: 24
    },
};

const Experience = ({ match }) => {
    const isEdit = match.params.id;
    const [form] = Form.useForm();
    const dispatch = useContextSelector(AppContext, ctx => ctx.dispatch);
    const [disabled, setDisabled] = useState(true);
    const currentEdit = useContextSelector(AppContext, ctx => ctx.appState.experience[isEdit]);

    const InitialValues = isEdit ? {
        ...currentEdit,
        startDate: currentEdit.startDate ? moment(currentEdit.startDate, "YYYY/MM/DD") : undefined,
        endDate: currentEdit.endDate ? moment(currentEdit.endDate, "YYYY/MM/DD") : undefined,

    } : {
            current: disabled,
            description: ["I Managed a team of ___ through ___ project."]
        }
    InitialValues.description = parseArrayToListMarkup(InitialValues.description);

    useEffect(() => {
        return () => {
            const values = form.getFieldsValue(true);
            if (values.title && values.title.trim().length && values.employer && values.employer.trim().length) {
                if (isEdit) {
                    return dispatch({
                        type: EDIT_EXPERIENCE,
                        payload: {
                            values,
                            index: isEdit
                        }
                    })
                }

                dispatch({
                    type: ADD_EXPERIENCE,
                    payload: values
                });
            }
        }
    }, [form, isEdit, dispatch]);

    const handleEditorChange = (e) => {
        form.setFieldsValue({ ...form.getFieldsValue(true), description: e.editor.getData() })
    }

    return (
        <>
            <PageTitle
                title="Tell us about your most recent job"
                subtitle="We’ll put your work history in the right order." />
            <Form
                {...formItemLayout}
                form={form}
                name="experience"
                size="large"
                requiredMark={false}
                initialValues={InitialValues}
                scrollToFirstError
                layout="vertical"
            >
                <Row gutter={16}>
                    <Col lg={{ span: 12 }} md={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 24 }}>
                        <Form.Item
                            name="title"
                            label="Job Title"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input job title!",
                                },
                            ]}
                            hasFeedback
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col lg={{ span: 12 }} md={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 24 }}>
                        <Form.Item
                            name="employer"
                            label="Employer"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your employer!",
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
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col lg={{ span: 12 }} md={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 24 }}>
                        <Form.Item
                            name="state"
                            label="State"
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span="24">
                        <Form.Item
                            name="description"
                            label="Work Description"
                        >
                            <Editor
                                data={InitialValues.description}
                                onChange={handleEditorChange}
                                config={editorConfig}
                            />
                        </Form.Item>
                    </Col>
                    <Col lg={{ span: 12 }} md={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 24 }}>
                        <Form.Item
                            name="startDate"
                            label="Start Date"
                            rules={[
                                {
                                    required: true,
                                    message: "Please select a start date!",
                                },
                            ]}
                            hasFeedback
                        >
                            <DatePicker placeholder="Select" style={{ width: "100%" }} />
                        </Form.Item>
                    </Col>
                    <Col lg={{ span: 12 }} md={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 24 }}>
                        <Form.Item
                            name="endDate"
                            label="End Date"
                            rules={[
                                {
                                    required: true,
                                    message: "Please select a end date!",
                                },
                            ]}
                            hasFeedback

                        >
                            <DatePicker disabled={InitialValues.current} placeholder="Select" style={{ width: "100%" }} />
                        </Form.Item>
                    </Col>
                    <Col lg={{ span: 12, offset: 12 }}>
                        <Form.Item
                            name="current"
                            valuePropName="checked"
                        ><Checkbox onChange={e => setDisabled(e.target.checked)}>I currently work here</Checkbox></Form.Item>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default Experience;