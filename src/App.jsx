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

function App() {
  return (
    <BrowserRouter>
      <div className="body-background">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Student />} />
          <Route path="/courses" element={<Course />} />

          <Route path="/students/:id" element={<StudentProfile />} />
        </Routes>
       <StudentForm/>
<ContactForm/>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;