import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import './style.css';
import Contact from './Contact';
import AdminLogin from './../admin/AdminLogin';
import FacultyLogin from './../faculty/FacultyLogin';
import StudentLogin from './../student/StudentLogin';
import PageNotFound from './notfound.png';

export default function MainNavBar({ onAdminLogin,onFacultyLogin,onStudentLogin }) {
  return (
    <div  style={{backgroundColor: 'black', backgroundImage: `url('https://i.pinimg.com/originals/95/fc/9d/95fc9d6faecd2ecc13b1179ae07b3755.jpg')`, backgroundSize: 'cover', minHeight: '100vh' }}>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <img
                src="https://cdn1.iconfinder.com/data/icons/online-education-indigo-vol-2/256/Home_Education-512.png"
                alt="Home"
                style={{ width: '30px', height: '30px' }} // Adjust size here
              />
            </Link>
          </li>
          <li>
            <Link to="/about">
              <img
                src="https://www.kindpng.com/picc/m/136-1367818_education-icon-icon-logo-education-png-transparent-png.png"
                alt="About"
                style={{ width: '30px', height: '30px' }} // Adjust size here
              />
            </Link>
          </li>
          <li className="dropdown">
            <Link>
              <img
                src="https://image.pngaaa.com/919/4051919-middle.png"
                alt="Login"
                style={{ width: '30px', height: '30px' }} // Adjust size here
              />
            </Link>
            <div className="dropdown-content">
              <Link to="/facultylogin">Faculty Login</Link>
              <Link to="/studentlogin">Student Login</Link>
              <Link to="/adminlogin">Admin Login</Link>
            </div>
          </li>
          <li>
            <Link to="/contact">
              <img
                src="https://th.bing.com/th/id/R.1895e5e7badae7ec1576af4cc0851304?rik=r166GeThrJImcA&riu=http%3a%2f%2ficon-library.com%2fimages%2ficon-contact-us%2ficon-contact-us-22.jpg&ehk=WwrEY16cMDC2OnRegODvLnSpaFVEZPhki8x3nQ8IVG8%3d&risl=&pid=ImgRaw&r=0"
                alt="Contact"
                style={{ width: '30px', height: '30px' }} // Adjust size here
              />
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path="/about" element={<About/>} exact />
        <Route path="/facultylogin" element={<FacultyLogin onFacultyLogin={onFacultyLogin}/>} exact />
        <Route path="/adminlogin" element={<AdminLogin onAdminLogin={onAdminLogin}/>} exact />
        <Route path="/studentlogin" element={<StudentLogin onStudentLogin={onStudentLogin}/>} exact />
        <Route path="/contact" element={<Contact/>} exact />
        <Route path="*" element={<PageNotFound/>} exact />
      </Routes>
    </div>
  );
}
