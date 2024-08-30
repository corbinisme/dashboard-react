
function Header(props) {

    const themeChange = props.themeChange;
    const theme = props.theme;
    return(
        <header className="header">

            <nav className="nav fixed-top" id="mainNav">
                <div className="container-fluid">


                <div class="d-flex justify-content-space-between">
                <a className="navbar-brand js-scroll-trigger" href="#page-top">
                        <img src="img/goat2.png" />
                        <span>Corbin<em>rose</em></span>
                    </a>
                    
        

         
                  
                    <a className="btn btn-secondary themeToggle" 
                        onClick={() => themeChange(theme)}
                        href="#">
                        <svg className="svg-inline--fa fa-moon fa-w-16" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="moon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"></path></svg>
                    </a>
                    
               </div>
               </div>
            </nav>
        </header>
    )

}

export default Header;