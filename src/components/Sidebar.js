import { Menu, Drawer } from "antd";
import { useHistory } from "react-router-dom";
import useMedia from "../hooks/useMedia";
import { MenuItems } from "./../constants/sidebar";
import AppContext from "../context/App";
import { useContextSelector } from 'use-context-selector';
import { CLOSE_SIDEBAR } from "../context/Types";

const MenuComponent = ({ history }) => {
    return (
        <Menu
            mode="inline"
            defaultSelectedKeys={['7']}
            style={{ position: "sticky", top: 50 }}
        >
            {MenuItems.map((item, i) => <Menu.Item onClick={() => history.push(`/${item.toLowerCase()}`)} key={++i}>{item}</Menu.Item>)}
        </Menu>
    )
}
const Sidebar = () => {
    const history = useHistory();
    const { sm } = useMedia();
    const visible = useContextSelector(AppContext, ctx => ctx.appState.sidebarOpen);
    const dispatch = useContextSelector(AppContext, ctx => ctx.dispatch);

    const onClose = () => {
        dispatch({
            type: CLOSE_SIDEBAR
        })
    }

    if (sm) return (
        <Drawer
            title="Menu"
            placement="left"
            closable={false}
            onClose={onClose}
            visible={visible}
            key="sidebar"
        >
            <MenuComponent />
        </Drawer>
    )

    return (
        <MenuComponent history={history} />
    );
};

export default Sidebar;