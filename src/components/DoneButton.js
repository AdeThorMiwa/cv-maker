import { Button, Popconfirm } from "antd";
import { useContextSelector } from 'use-context-selector';
import AppContext from "../context/App";

const DoneButton = () => {
    const dispatch = useContextSelector(AppContext, ctx => ctx.dispatch);
    const confirm = () => {
        dispatch({ type: "DONE" });
        window.location.href = "/"
    }

    return (
        <Popconfirm placement="top" title="CV Data would be cleared from our storage after this action?" onConfirm={confirm} okText="Continue" cancelText="Cancel">
            <Button
                className="big-button"
                type="danger">
                DONE
            </Button>
        </Popconfirm>
    )
}

export default DoneButton;