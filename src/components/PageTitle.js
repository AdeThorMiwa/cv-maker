import { Typography } from "antd";
import useMedia from "../hooks/useMedia";

const PageTitle = ({ title, subtitle }) => {
    const { sm, md } = useMedia();

    const font = {};
    if (sm) {
        font.fontSize = 18
    } else if (md) {
        font.fontSize = 24
    }

    return (
        <>
            <Typography.Title level={2} className="text-primary" style={font}>{title}</Typography.Title>
            {subtitle && <Typography.Title level={4}>{subtitle}</Typography.Title>}
        </>
    )
}

export default PageTitle;