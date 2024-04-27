import React from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import './faculty.css';


import FacultyHome from './FacultyHome';
import MyCourses from './MyCourses';
import PostAttendance from './PostAttendance'; 
import PostAssignments from './PostAssignments';
import ViewStudentGrades from './ViewStudentGrades';
import UpdateGrades from './UpdateGrades'; 
import ViewProfile from './ViewProfile';
import UpdateProfile from './UpdateProfile';
import ChangeFacultyPWD from './ChangeFacultyPWD';
import ViewAssignment from './ViewAssignments';

export default function FacultyNavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isFacultyLoggedIn');
    localStorage.removeItem('faculty');
    navigate('/facultylogin');
    window.location.reload();
  };

  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/facultyhome"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCf4lREb3S2e81IIHpMPU7Wk1R4HDvWhbIqld2TT8_Gg&s" alt="Home" style={{ width: '24px', height: '24px' }} /></Link></li>
          <li><Link to="/mycourses"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlFBh7hRbNiNs4qTQzftIFmcks6Rn_ojKd6La3mq9d7Q&s" alt="My Courses" style={{ width: '24px', height: '24px' }} /></Link></li>
          <li><Link to="/changefacultypwd"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-oled1sdKzsXy12YUSkimgtvM4KsfPnc3DdDm_8gcHQ&s" alt="Change Password" style={{ width: '24px', height: '24px' }} /></Link></li>
          <li className="dropdown">
            <Link to="/postassignments"><img src="https://cdn2.vectorstock.com/i/1000x1000/15/81/mail-assignment-icon-isometric-style-vector-35371581.jpg" alt="Post Assignments" style={{ width: '24px', height: '24px' }} /></Link>
          <div className="dropdown-content">
          <Link to="/postassignments">Post Assignments</Link>
              <Link to="/viewassignments">View Assignments</Link>
          </div>
          </li>
          <li className="dropdown">
            <Link to="/postattendance"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ52BYMGkISxUZBm9oD7gCq4SEKxe8T6p4fHA&s" alt="Attendance" style={{ width: '24px', height: '24px' }} /></Link>
            <div className="dropdown-content">
              <Link to="/postattendance">Post Attendance</Link>
            </div>
          </li>
          <li className="dropdown">
            <Link to="/viewstudentgrades"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpgshW0cuSTbG5lSr_iRq-fjdgesB_TiB9EBixDzFvLQ&s" alt="Grades" style={{ width: '24px', height: '24px' }} /></Link>
            <div className="dropdown-content">
              <Link to="/viewstudentgrades">View Student Grades</Link>
              <Link to="/updategrades">Update Grades</Link>
            </div>
          </li>
          <li className="dropdown">
            <Link to="/viewprofile"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtnaVorUfIFui6bIRA-z22Q4qQYoGAJG_QAsqNFnOlkQ&s" alt="Profile" style={{ width: '24px', height: '24px' }} /></Link>
            <div className="dropdown-content">
              <Link to="/viewprofile">View Profile</Link>
              <Link to="/updateprofile">Update Profile</Link>
            </div>
          </li>
          <li><button className="logoutButton" onClick={handleLogout}>Logout</button></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/facultyhome" element={<FacultyHome />} exact />
        <Route path="/mycourses" element={<MyCourses />} exact />
        <Route path="/postattendance" element={<PostAttendance />} exact />
        <Route path="/postassignments" element={<PostAssignments/>} exact />
        <Route path="/changefacultypwd" element={<ChangeFacultyPWD/>} exact />  
        <Route path="/viewstudentgrades" element={<ViewStudentGrades/>} exact />
        <Route path="/updategrades" element={<UpdateGrades/>} exact />
        <Route path="/viewprofile" element={<ViewProfile/>} exact />
        <Route path="/updateprofile" element={<UpdateProfile/>} exact/>
        <Route path='/viewassignments' element={<ViewAssignment/>} exact/>
      </Routes>
    </div>
  );
}
