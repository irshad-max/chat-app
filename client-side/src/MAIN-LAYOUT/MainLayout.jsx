import { Outlet } from "react-router-dom";
import SideBar_page from "../SIDEBAR_CONTENT/Sidebar"
function MainLayout() {
    return (
        <div className="app-layout">

            <SideBar_page />

            <main className="main-content">
                <Outlet />
            </main>

        </div>
    );
}
export default MainLayout;