import { Suspense } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { layoutStyle } from "./styles/layout.styles";

const Layout = () => { 
    return <div className={layoutStyle}>
        <Sidebar />
        <Suspense>
            <Outlet />
        </Suspense>
    </div>
};

export default Layout;