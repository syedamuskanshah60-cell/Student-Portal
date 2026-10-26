import { useState } from "react";

function StudentList() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="container my-4">
      <table className="table table-striped table-hover align-middle shadow-sm rounded">
        {/*  <table-dark> ko replace karke standard <thead> tag lagaya hai */}
        <thead className="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col" className="text-center">Action</th>
          </tr>
        </thead>

        <tbody>
          {/* Row 1 */}
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td className="text-center">
              <button
                type="button"
                className="btn btn-primary btn-sm px-3 me-2"
                onClick={() => setShowDetails(!showDetails)}
              >
                {showDetails ? "Hide Details" : "Show Details"}
              </button>
              <button type="button" className="btn btn-outline-secondary btn-sm px-3">
                Details
              </button>

              {showDetails && (
                <div className="mt-2 p-2 bg-light border rounded text-start">
                  <p className="mb-1 text-muted small"><strong>Email:</strong> student@szabist.pk</p>
                  <p className="mb-0 text-muted small"><strong>Phone:</strong> 03102328516</p>
                </div>
              )}
            </td>
          </tr>

          {/* Row 2 */}
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td className="text-center">
              <button type="button" className="btn btn-primary btn-sm px-3 me-2">View</button>
              <button type="button" className="btn btn-danger btn-sm px-3">Delete</button>
            </td>
          </tr>

          {/* Row 3 */}
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td className="text-center">
              <button type="button" className="btn btn-primary btn-sm px-3 me-2">View</button>
              <button type="button" className="btn btn-danger btn-sm px-3">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;