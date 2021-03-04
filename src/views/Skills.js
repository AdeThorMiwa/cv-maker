import { Row, Col, Form, Input, Select, Button, Rate, Divider } from "antd";
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { useState, useEffect } from "react";
import { useContextSelector } from 'use-context-selector';
import AppContext from "../context/App";
import { UPDATE_SKILLS } from "../context/Types";
import { desc, customIcons, suggestions as skillsSuggestions } from "./../constants/skill";
import { PageTitle } from "../components";

const Skills = () => {
    const [suggestions, setSuggestions] = useState([...skillsSuggestions]);
    const initialSkills = useContextSelector(AppContext, ctx => ctx.appState.skills);
    const dispatch = useContextSelector(AppContext, ctx => ctx.dispatch);
    const [newItem, setNewItem] = useState("");
    const [skills, setSkills] = useState(initialSkills.length ? initialSkills : [
        {
            rating: 0,
            title: "",
        }
    ])

    const addItem = (item) => {
        if (!item.trim().length) return;
        setSuggestions(suggestions => ([...suggestions, item]))
        setNewItem("")
    }

    const handleChange = (key, value, index) => {
        setSkills(skills => skills.map((skill, idx) => idx === index ? { ...skill, [key]: value } : skill))
    }

    const add = () => {
        setSkills(skills => ([...skills, {
            rating: 0,
            title: "",
        }]))
    }

    const remove = index => {
        setSkills(([...skills.filter((s, i) => index !== i)]));
    }

    useEffect(() => {
        return () => {
            dispatch({
                type: UPDATE_SKILLS,
                payload: skills.filter(skill => skill.title.trim().length)
            })
        }
    }, [skills, dispatch]);


    return (
        <>
            <PageTitle
                title="What skills do you want to highlight?"
                subtitle="Use our expert recommendations below to get started." />

            <form style={{ marginTop: 32 }}>
                {skills.map((skill, index) => (
                    <Row gutter={16} key={index} style={{ alignItems: "center" }}>
                        <Col lg={{ span: 10 }} md={{ span: 10 }} sm={{ span: 10 }} xs={{ span: 24 }}>
                            <Rate
                                tooltips={desc}
                                onChange={(value) => handleChange("rating", value, index)}
                                value={skill.rating}
                                character={({ index }) => customIcons[index + 1]} />
                        </Col>
                        <Col lg={{ span: 14 }} md={{ span: 14 }} className="mt" sm={{ span: 14 }} xs={{ span: 24 }}>
                            <Select
                                size="large"
                                value={skill.title}
                                style={{ width: '100%' }}
                                placeholder="Skill"
                                onChange={(value) => handleChange("title", value, index)}
                                dropdownRender={menu => (
                                    <div>
                                        {menu}
                                        <Divider style={{ margin: '4px 0' }} />
                                        <div style={{ display: 'flex', flexWrap: 'nowrap', padding: 8 }}>
                                            <Input style={{ flex: 'auto' }} value={newItem} onChange={(e) => setNewItem(e.target.value)} />
                                            <a href="#!" style={{ flex: 'none', padding: '8px', display: 'block', cursor: 'pointer' }} onClick={() => addItem(newItem)}>
                                                <PlusOutlined /> Add New Skill
                                            </a>
                                        </div>
                                    </div>
                                )}
                            >
                                {suggestions.map(item => (
                                    <Select.Option key={item}>{item}</Select.Option>
                                ))}
                            </Select>
                            <MinusCircleOutlined className="remove-social" onClick={() => remove(index)} />
                        </Col>
                    </Row>
                ))}
                <Form.Item>
                    <Button type="link" onClick={() => add()} icon={<PlusOutlined />}>
                        Add one more
                    </Button>
                </Form.Item>
            </form>
        </>
    )
}

export default Skills;