import { Button, message } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { PageTitle, RenderTemplate } from "./../components";
import HtmlToCanvas from "html2canvas";
import axios from "axios";
import useMedia from "../hooks/useMedia";
import { useState } from "react";

const Preview = () => {
    const [loading, setLoading] = useState(false);
    const saveAsPdf = async () => {
        setLoading(true);
        const template = document.querySelector("#template-box");
        try {
            const canvas = await HtmlToCanvas(template);
            const dataUrl = canvas.toDataURL('image/png');
            const res = await axios.post("/template/toPdf", JSON.stringify({ blob: dataUrl }), { headers: { "Content-Type": "application/json" } })
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
                <RenderTemplate />
            </div>
        </div>
    )
};

export default Preview;