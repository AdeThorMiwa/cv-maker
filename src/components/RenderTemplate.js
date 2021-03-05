import { compileToParsableHTML } from "./../utils/template";
import Parser from "react-html-parser";

const RenderTemplate = ({ appState, size = "lg" }) => {
    let style = {};
    if (size === "sm") {
        style.zoom = 0.45;
        style.width = "650px";
        style.maxWith = "100%";
    }

    return (
        <div id="template-box-container" style={style}>
            { Parser(compileToParsableHTML(appState.selectedTemplate, appState))}
        </div>
    )
};

export default RenderTemplate;