import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      {/* Light/White clean navbar styling */}
      <nav className=" back-ground navbar navbar-expand-lg  border-bottom py-3">
        <div className="container-fluid px-4 d-flex align-items-center justify-content-between">
          
          {/* Left Side: Brand Logo + Nav Links */}
          <div className="d-flex align-items-center gap-4">
            {/* 1. Brand Logo */}
            <Link className="navbar-brand fw-bold text-dark fs-4 m-0 me-2" to="/">
              StudentPortal
            </Link>

            {/* 2. Nav Links */}
            <ul className="nav d-flex align-items-center gap-3 m-0 p-0">
              <li className="nav-item">
                <Link className="nav-link text-secondary fw-normal px-1 py-0" to="/">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-secondary fw-normal px-1 py-0" to="/students">
                  Students
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-secondary fw-normal px-1 py-0" to="/courses">
                  Courses
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-secondary fw-normal px-1 py-0" to="/StudentForm">
                  Reports
                </Link>
                
              </li>
               <li className="nav-item">

              <Link className="nav-link text-secondary fw-normal px-1 py-0" to="/Profile">Profile</Link>

            </li>
            </ul>
          </div>

          {/* Right Side: Settings + Search Bar + Blue Search Button */}
          <div className="d-flex align-items-center gap-3">
            
            {/* Settings Dropdown Link */}
            <Link className="nav-link text-secondary fw-normal d-flex align-items-center gap-1" to="#">
              Settings <span className="small">▼</span>
            </Link>

            {/* Search Input Box */}
            <div className="position-relative">
              <input 
                type="text" 
                className="form-control form-control-sm pe-4 rounded-2" 
                placeholder="Search" 
                style={{ width: '180px', borderColor: '#dee2e6' }}
              />
              <i className="bi bi-search position-absolute end-0 top-50 translate-middle-y me-2 text-muted small"></i>
            </div>

            {/* Blue Search Button */}
            <button 
              type="button" 
              className="btn btn-primary btn-sm px-3 rounded-2 fw-normal"
            >
              Search
            </button>

          </div>

        </div>
      </nav>
    </>
  );
}

export default Navbar;