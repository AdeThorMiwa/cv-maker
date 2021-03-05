import { useEffect, useState } from 'react';
import { Card, message } from 'antd';
import AppContext from "../context/App";
import { useContextSelector } from 'use-context-selector';
import { SET_TEMPLATE } from '../context/Types';
import { useHistory } from 'react-router-dom';
import agent from "../utils/agent";

const TemplateCard = () => {
    const [templateData, setTemplateData] = useState([]);
    const [loading, setLoading] = useState(true);
    const dispatch = useContextSelector(AppContext, ctx => ctx.dispatch);
    const history = useHistory();

    const handleMountTemplates = async () => {
        try {
            const res = await agent.get(`/template`);
            setTemplateData(res.data.templates);
        } catch (e) {
            message.error("Error fetching templates: ", e.message)
        }
        setLoading(false)
    }

    const clickable = async (url) => {
        try {
            const templateString = await agent.get(url);
            dispatch({
                type: SET_TEMPLATE,
                payload: templateString.data
            });
            history.push("/personal");
        } catch (e) {
            message.error("Error setting template: ", e.message);
        }
    }

    useEffect(() => {
        handleMountTemplates()
    }, []);

    return (
        <div className="container flex-item flex-wrap card-top-bottom-space flex-item-center mt">
            {loading && (
                <div className="flex-item">
                    <div className="spinner"></div>
                    <div>
                        <h1 style={{ marginLeft: '4px' }}>Loading.....</h1>
                    </div>
                </div>
            )}
            {templateData.map((data, index) => {
                return (
                    <div className="single-card" key={index} onClick={() => clickable(data.template)}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt={data.name} src={data.thumbnail} />}
                        >
                            <Card.Meta title={data.name} />
                        </Card>
                    </div>
                )
            })}
        </div>
    )
}

export default TemplateCard