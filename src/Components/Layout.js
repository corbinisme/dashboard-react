import { Outlet, Link } from "react-router-dom";
import Header from "../Components/Header";

function Layout() {


    return (
    <>
        <Header />
        <div className="wrapper mt-4 container">
            <Outlet />
        </div>
    </>
    );

}

export default Layout;