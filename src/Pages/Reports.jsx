import { Link } from "react-router-dom"
import StudentForm from "../Component/StudentForm"
function Reports()
{
    return(
        <>
        <div className="jumbotron">
  <h1 className="display-4">Hello, world!</h1>
  <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr className="my-4"></hr> 
  <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
  <Link className="btn btn-primary btn-lg" href="StudentForm" role="button">Student registration</Link>
</div>
        </>
    )
}
export default Reports