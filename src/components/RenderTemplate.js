import { useState, useEffect } from "react"
import { fetchTemplateText } from "./../utils/fetcher";
import { compileToParsableHTML } from "./../utils/template";
import Parser from "react-html-parser";
import AppContext from "../context/App";
import { useContextSelector } from 'use-context-selector';
import { message } from "antd";

const RenderTemplate = ({ size = "lg" }) => {
    const appState = useContextSelector(AppContext, ctx => ctx.appState);

    const [template, setTemplate] = useState("");

    useEffect(() => {
        fetchTemplateText(appState.selectedTemplate?.template || "http://localhost:5000/templates/First.hbs", setTemplate, (msg) => message(msg));
    }, [setTemplate, appState.selectedTemplate]);

    let style = {};
    if (size === "sm") {
        style.zoom = 0.45;
        style.width = "650px";
        style.maxWith = "100%";
    }

    return (
        <div id="template-box" style={style}>
            { Parser(compileToParsableHTML(template, appState))}
        </div>
    )
};

export default RenderTemplate;