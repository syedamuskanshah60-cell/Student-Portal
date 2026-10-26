import StudentCard from "../Component/StudentsCard";
import profile_1 from '../assets/profile_1.png'
function Student() {
  return (
    <div className="container mt-4">
      <h2>Student Directory</h2>
      <div className="d-flex flex-wrap gap-3 mt-3">
        <StudentCard name="Muskan Shah" id="101" program="BSSE" semester="5TH" image={profile_1} />
        <StudentCard name="Eman Abbasi" id="102" program="BSSE" semester="5TH" />
        <StudentCard name="Mehk" id="103" program="BSSE" semester="5TH" />
        <StudentCard name="Haram Ghouri" id="104" program="BSSE" semester="5TH" />
        <StudentCard name="Mishal Fatima" id="105" program="BSSE" semester="5TH" />
      </div>
    </div>
  );
}

export default Student;