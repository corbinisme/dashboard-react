import React, { useState, useEffect } from 'react';
function Header(props) {

    const themeChange = props.themeChange;
    const theme = props.theme;
    const [menuOpen, setMenuOpen] = useState(false);


    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }
    return(
        <header className="header">

            <nav className="nav fixed-top" id="mainNav">
                <div className="container-fluid">


                <div className="d-flex justify-content-space-between">
                <a className="navbar-brand js-scroll-trigger" href="#page-top">
                        <img src="img/goat2.png" />
                        <span>Corbin<em>rose</em></span>
                    </a>
                    
        

                   
                    
                    <div className="d-flex headercontainer">
                        <div class={`desktopmenu ${menuOpen?'shown':''}`}>
                                <a className="nav-link pageToggle happy" data-page="good" href="/">
                                    Good News 
                                </a>
                          
                                <a className="nav-link pageToggle educational active" data-page="learn" href="/educational">
                                     Educational 
                                </a>   
                        </div>
                   
                  
                    <a className="btn btn-secondary themeToggle" 
                        onClick={() => themeChange(theme)}
                        href="#">
                        {theme == "dark" ? "Light" : "Dark"}
                    </a>

                    <a className='btn btn-secondary menutoggle ms-3' onClick={toggleMenu}>
                        <i className="fas fa-bars"></i> &equiv;
                   </a>
                    </div>
                   
                    
               </div>
               </div>
            </nav>
        </header>
    )

}

export default Header;