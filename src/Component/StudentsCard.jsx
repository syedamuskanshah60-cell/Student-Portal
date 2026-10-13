import { use, useState } from "react"

function StudentCard({ name, program, semester, image }) {
    const [view, setview] = useState(0);
    const [showDetails, setShowDetails] = useState(false);
    const [viewdDlete, setShowDelet] =  useState(false);

    function handleView() {
        setview(view + 1)
    }

    return (
        <>
            <div className="Student_card " style={{width: 280}} >
      
                <div className="card shadow-lg p-3 bg-body rounded student-card h-90  ">
                    <div className="card-body " >
                      <img src={image} className="card-img" alt="PROFILE PIC" style={{width:60, height: 60}} />
                        <h5 className="card-title mb-1" >{name}</h5>
                        <p className="card-text mb-1">Program: {program}</p>
                        <p className="card-text mb-1"> semester: {semester}</p>
                        <p className="card-text mb-2">Profile Views: {view}</p>
                         <div className="d-flex flex-wrap gap-2">

                        
                        <button className="btn btn-info btn-sm fw-bold px-4 rounded-pill " onClick={handleView}> View Profile</button>
                        <button className="btn btn-info btn-sm fw-bold px-3 rounded-pill " onClick={() => setShowDetails(!showDetails)}> {showDetails ? "Hide details" : "Show details"}</button>
                        <button className="btn btn-info btn-sm fw-bold px-3 rounded-pill " onClick={() => setShowDelet(!viewdDlete)}> delete</button>
                         </div>
                           {
                            viewdDlete && (
                             <p> delete successfull</p>
                            )
                           }
                        {
                            showDetails && (
                                <div>
                                    <p>Email:  student@szabist.pk</p>
                                    <p>Phone: 03102328516</p>
                                </div>
                            )
                        }
                     
                    </div>
                </div>
            </div>
        </>
    )
}

export default StudentCard