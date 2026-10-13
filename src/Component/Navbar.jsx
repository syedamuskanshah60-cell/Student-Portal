
function Navbar() {
  return (
    <>
      <nav className=" navbar navbar-expand-lg portal-navbar bg-info fg-contrast-info ">


        <div className="container-fluid px-4">


          <a className="navbar-brand fw-bold fs-3 text-success" href="#">Student Portal </a>

          <ul className="nav nav-pills">
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">Dashboard</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">Students</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">Courses</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">Reports</a>
            </li>

          </ul>
           
         

          <button className="form-control combobox-toggle" type="button"
            data-bs-toggle="combobox"
            data-bs-name="option"
            data-bs-placeholder="Search" style={{ width: 150, }}>
            <span class="combobox-value">Search  <i className="bi bi-search"></i></span>
            <svg class="combobox-caret" width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.46967 5.46967C0.762563 5.17678 1.23744 5.17678 1.53033 5.46967L5 8.93934L8.46967 5.46967C8.76256 5.17678 9.23744 5.17678 9.53033 5.46967C9.82322 5.76256 9.82322 6.23744 9.53033 6.53033L5.53033 10.5303C5.23744 10.8232 4.76256 10.8232 4.46967 10.5303L0.46967 6.53033C0.176777 6.23744 0.176777 5.76256 0.46967 5.46967Z" fill="currentcolor" /></svg>
          </button>
           <button type="button" className="btn btn-success ">
           
            Search</button>
             <a className="navbar-brand text-dark gap-3 " href="#" >
           Setting
            <i className="bi bi-gear-fill me-2 gap-3"> </i> </a>
 
        </div>
      </nav>
    </>
  )
}
export default Navbar