function BreadCrumb() {
  return (
    <>
    <div>
      <div className=" body-background d-flex justify-content center text-decoration-none align-items-center">


        <nav aria-label="breadcrumb" className="d-flex justify-content center text-decoration-none align-items-center">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a className="breadcrumb-link text-decoration-none px-3" href="#">Home</a>
            </li>
            <li className="breadcrumb-divider"></li>
            <li className="breadcrumb-item" aria-current="page">
              <a className="breadcrumb-link  text-decoration-none  px-3 active" href="#">Library</a>
            </li>
            <li className="breadcrumb-item">
              <a className="breadcrumb-link text-decoration-none px-3" href="#">students</a>
            </li>
            <li className="breadcrumb-divider"></li>
            <li className="breadcrumb-item" aria-current="page">
              <a className="breadcrumb-link  text-decoration-none  px-3 active" href="#">class</a>
            </li>
          </ol>
        </nav>
        
      </div>
      </div>
    </>
  )
}
export default BreadCrumb