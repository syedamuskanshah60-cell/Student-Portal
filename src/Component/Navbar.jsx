import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg portal-navbar bg-info fg-contrast-info">
        <div className="container-fluid px-4">
          
          {/* Brand Logo / Title Link to Home */}
          <Link className="navbar-brand fw-bold fs-3 text-success" to="/">
            Student Portal
          </Link>

          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/students">Students</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/courses">Courses</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/profile">Profile</Link>
            </li>
          </ul>

          <button 
            className="form-control combobox-toggle" 
            type="button"
            data-bs-toggle="combobox"
            data-bs-name="option"
            data-bs-placeholder="Search" 
            style={{ width: 150 }}
          >
            <span className="combobox-value">
              Search <i className="bi bi-search"></i>
            </span>
            <svg className="combobox-caret" width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.46967 5.46967C0.762563 5.17678 1.23744 5.17678 1.53033 5.46967L5 8.93934L8.46967 5.46967C8.76256 5.17678 9.23744 5.17678 9.53033 5.46967C9.82322 5.76256 9.82322 6.23744 9.53033 6.53033L5.53033 10.5303C5.23744 10.8232 4.76256 10.8232 4.46967 10.5303L0.46967 6.53033C0.176777 6.23744 0.176777 5.76256 0.46967 5.46967Z" fill="currentcolor" />
            </svg>
          </button>

          <button type="button" className="btn btn-success ms-2">
            Search
          </button>
          
          <Link className="navbar-brand text-dark gap-3 ms-3" to="#">
            Setting <i className="bi bi-gear-fill me-2 gap-3"></i> 
          </Link>

        </div>
      </nav>
    </>
  );
}

export default Navbar;