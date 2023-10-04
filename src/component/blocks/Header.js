import React from "react";
const Header = () => {
 return(
  <>
  <nav className="navbar bg-body-tertiary custom-header navbar-expand">
    <div className="container-fluid">
      <form className="d-none d-sm-inline-block header-search">
					<div className="input-group input-group-navbar">
          <button className="btn" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search align-middle"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </button>
						<input type="text" className="form-control" placeholder="Search for anything.." aria-label="Search" />
						
					</div>
				</form>
        <ul className="navbar-nav navbar-align">
						<li className="nav-item">
							<a className="nav-link dropdown-toggle d-sm-inline-block">
                <img src="https://media.licdn.com/dms/image/D4D35AQFbVeDObSGqQA/profile-framedphoto-shrink_200_200/0/1685255361438?e=1697029200&v=beta&t=G85wJcu4Z2YCZ77QQ3V3bbrTMa_kg5lDkKQsyuado0Y" className="avatar img-fluid rounded-circle me-1" alt="Chris Wood" /> <span className="text-dark">Test User</span>
              </a>
							
						</li>
					</ul>
    </div>
  </nav>
  </>
 )
}

export default Header;