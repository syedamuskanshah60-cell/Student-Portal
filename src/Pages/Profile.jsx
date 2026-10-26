import { Link } from 'react-router-dom';
import StudentList from '../Component/StudentList';
import MultipleCards from '../Component/MultipleCards';
import books from '../assets/books.jpg';
import profile_1 from '../assets/profile_1.png';


function Profile() {
    
    return (
        <>

            <div className='container my-5'>
                <div className="front-card card w-80 text-dark ">
                    {/* Added d-flex justify-content-between align-items-center */}
                    <div className="card-body d-flex justify-content-between align-items-center">

                        {/* Left Text Side */}
                        <div>
                            <h5 className="card-title">Welcome, students</h5>
                            <p className="card-text">Manage your students, view details and keep track record</p>
                            
                            <Link to='/Home' className="btn btn-primary"> Learn More</Link>
                        </div>


                        {/* Right Image Side */}
                        <img
                            src={books}
                            alt="books logo"
                            style={{ width: 120, height: "auto" }}

                        />


                    </div>
                </div>
            </div>

            <div className="container my-4">
               
                
                    <div className='row g-3'>

                        <div className='col-md-3'>
                            <MultipleCards data={"total students"} number={10} image={profile_1} />
                        </div>
                        <div className='col-md-3'>
                            <MultipleCards data={"total students"} number={10} image={profile_1} />
                        </div>
                        <div className='col-md-3'>
                            <MultipleCards data={"total students"} number={10} image={profile_1} />
                        </div>
                        <div className='col-md-3'>
                            <MultipleCards data={"total students"} number={10} image={profile_1} />
                        </div>

                    </div>
                
            </div>
            <div>
                <StudentList/>
            </div>

        </>
    );
}

export default Profile;