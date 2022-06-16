import React from 'react';
import { NavLink } from 'react-router-dom';


function Nav() {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-dark" style={{position:"sticky",top:0,zIndex:9999}} >
  <div className="container-fluid">
    <a className="navbar-brand text-warning" href="#">Elaichi news</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-light">
      
        <li className="nav-item">
          <NavLink className="nav-link active text-light" aria-current="page" to="/business">  Business</NavLink>
        </li>


        <li className="nav-item">
          <NavLink className="nav-link active text-light" aria-current="page" to="/entertainment"> Entertainment</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link active text-light" aria-current="page" to="/general">General</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link active text-light" aria-current="page" to="/health">Health</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link active text-light" aria-current="page" to="/science">Science</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link active text-light" aria-current="page" to="/technology">Technology</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link active text-light" aria-current="page" to="/sport">Sport</NavLink>
        </li>



       {/* drop down */}
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Country
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item text-dark" href="#">INDIA</a></li>
            <li><a className="dropdown-item text-dark" href="#">PAKISTAN</a></li>
            <li><a className="dropdown-item text-dark" href="#">UNITED STATE</a></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Nav;

