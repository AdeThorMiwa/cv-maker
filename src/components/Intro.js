import { Typography } from "antd"
import useMedia from "../hooks/useMedia";

const Intro = ({ headerTitle, subtitle = "Here’s what you need to know:", description = [] }) => {
    const { md, lg } = useMedia();
    const pad = {};
    if (md) {
        pad.padding = 16;
    } else if (lg) {
        pad.padding = 32
    }

    return (
        <div className="page-center" style={pad}>
            <Typography.Title level={1} className="text-primary" style={md ? { fontSize: 26 } : {}}>{headerTitle}</Typography.Title>
            <Typography.Title level={4}>{subtitle}</Typography.Title>
            <Typography.Text>
                {description[0]}<br />
                {description[1]}
            </Typography.Text>
        </div>
    )
}

export default Intro;