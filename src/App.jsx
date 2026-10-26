import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Components
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';

// Pages
import Home from "./Pages/Home";
import Student from "./Pages/Student";
import Course from "./Pages/Course";
import StudentProfile from "./Pages/StudentProfile";

import StudentForm from "./Component/StudentForm";
import ContactForm from "./Component/ContactUsForm";
import './App.css';
import Reports from "./Pages/Reports";
import Profile from "./Pages/Profile";
import books from './assets/books.jpg'

import CourseCard from "./Component/CourseCard";
function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <div className="container my-4">
          <CourseCard
            name="Web Development"
            code="CS-101"
            instructor="Sir Ali"
          />
        </div>
        <div className="flex-grow-1">


          <Routes>



            <Route path="/" element={<Home />} />
            <Route path="/students" element={<Student />} />
            <Route path="/courses" element={<Course />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/students/:id" element={<StudentProfile />} />

            <Route path="/StudentForm" element={<StudentForm />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;