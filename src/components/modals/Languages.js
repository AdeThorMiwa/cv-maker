import { Modal } from "antd";
import Editor from 'ckeditor4-react';
import { useContextSelector } from 'use-context-selector';
import AppContext from "../../context/App";
import { handleFormChange } from "../../utils/form";

const LanguageModal = ({ visible, onOk, onCancel }) => {
    const languages = useContextSelector(AppContext, ctx => ctx.appState.others.languages);
    const dispatch = useContextSelector(AppContext, ctx => ctx.dispatch);
    const onChange = handleFormChange(dispatch);

    return (
        <Modal title="Add Language" visible={visible} onOk={onOk} onCancel={onCancel}>
            <Editor
                data={languages ? languages : "<ul><li>Replace With Your Language</li></ul>"}
                onChange={(e) => onChange({ target: { id: `others_languages`, value: e.editor.getData() } })} />
        </Modal>
    )
}

export default LanguageModal;