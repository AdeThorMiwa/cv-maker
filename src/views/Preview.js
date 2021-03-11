import { Button, message } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { PageTitle, RenderTemplate } from "./../components";
import useMedia from "../hooks/useMedia";
import { useState } from "react";
import AppContext from "../context/App";
import { useContextSelector } from 'use-context-selector';
import { compileToParsableHTML } from "./../utils/template";
import agent from "./../utils/agent";

const Preview = () => {
    const [loading, setLoading] = useState(false);
    const appState = useContextSelector(AppContext, ctx => ctx.appState);

    const saveAsPdf = async () => {
        setLoading(true);
        try {
            const res = await agent.post(
                "/template/v1/toPdf",
                JSON.stringify({ html: compileToParsableHTML(appState.selectedTemplate, { ...appState, stripDefault: true }) })
            )

            window.downloadFile(res.data.downloadLink);
            message.info("Download will begin in a bit...")
        } catch (e) {
            message.error(e.message);
        }
        setLoading(false)
    }

    const { sm } = useMedia();

    return (
        <div>
            <div className="d-flex" style={{ justifyContent: "space-between" }}>
                <PageTitle title="Below is a preview of your CV" />
                <Button loading={loading} type="primary" onClick={saveAsPdf} icon={sm && <DownloadOutlined />} danger> {sm ? "" : "Download as PDF"} </Button>
            </div>
            <div className="mt">
                <RenderTemplate appState={appState} />
            </div>
        </div>
    )
};

export default Preview;