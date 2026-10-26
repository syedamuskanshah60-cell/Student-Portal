import { useState } from "react";
import { Link } from 'react-router-dom';

function StudentCard({ id, name, program, semester, image }) {
  const [view, setView] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const [viewDelete, setViewDelete] = useState(false);

  function handleView() {
    setView(view + 1);
  }

  return (
    <>
  
      <div className="Student_card   g-4" style={{ width: 280 }}>
        <div className="card shadow-lg border-0  rounded-3 overflow-hidden h-100">
          <div className="card-body">
            <div className="bg-secondary bg-opacity-25 d-flex align-items-center justify-content-center " style={{height: 140}}>
            <img 
              src={image} 
              className="card-img" 
              alt="PROFILE PIC" 
              style={{ width: 60, height: 60 }} 
            />
            </div>
            <div className="card-body text-start">
            <h5 className="card-title mb-1">{name}</h5>
            <p className="card-text mb-1">ID: {id}</p>
            <p className="card-text mb-1">Program: {program}</p>
            <p className="card-text mb-1">Semester: {semester}</p>
            <p className="card-text mb-2">Profile Views: {view}</p>

            <div className="d-flex flex-wrap gap-2">
              {/* Dynamic Link to Student Profile Page */}
              <Link 
                to={`/students/${id}`} 
                className="btn btn-info btn-sm fw-bold px-3 rounded-pill text-decoration-none"
                onClick={handleView}
              >
                View Profile
              </Link>

              <button 
                className="btn btn-info btn-sm fw-bold px-3 rounded-pill" 
                onClick={() => setShowDetails(!showDetails)}
              >
                {showDetails ? "Hide details" : "Show details"}
              </button>

              <button 
                className="btn btn-info btn-sm fw-bold px-3 rounded-pill" 
                onClick={() => setViewDelete(!viewDelete)}
              >
                Delete
              </button>
              </div>
            </div>

            {viewDelete && (
              <p className="text-danger mt-2 mb-0">Delete successful</p>
            )}

            {showDetails && (
              <div className="mt-2">
                <p className="mb-0">Email: student@szabist.pk</p>
                <p className="mb-0">Phone: 03102328516</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentCard;