import { Outlet } from "react-router-dom";

function BlankLayout() {
    return <Outlet />; // Only renders the nested route content
}

export default BlankLayout;
