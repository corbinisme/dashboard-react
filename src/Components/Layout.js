import { Outlet, Link } from "react-router-dom";
import Header from "../Components/Header";


// Not touching Column components. Will modify them later

function Layout(props) {


    return (
    <>
        <Header themeChange={props.themeChange} theme={props.theme} />
        <div className="wrapper mt-4 container">
        
            <Outlet />
      
        </div>
    </>
    );

}

export default Layout;