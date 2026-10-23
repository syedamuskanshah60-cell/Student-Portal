function Course() {
  const coursesList = [
    { id: 101, title: "Web Development", code: "CS-301", instructor: "Dr. Ali" },
    { id: 102, title: "Data Structures", code: "CS-201", instructor: "Prof. Sarah" },
    { id: 103, title: "Database Systems", code: "CS-302", instructor: "Engr. Usman" },
  ];

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Available Courses</h2>
      <div className="row">
        {coursesList.map((course) => (
          <div className="col-md-4 mb-3" key={course.id}>
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{course.code}</h6>
                <p className="card-text">Instructor: {course.instructor}</p>
                <button className="btn btn-primary btn-sm">Enroll Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Course;