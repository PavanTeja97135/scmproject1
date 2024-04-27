import React, { useState } from 'react';
import './style.css';

export default function Home() {
  const [flippedAdmin, setFlippedAdmin] = useState(false);
  const [flippedFaculty, setFlippedFaculty] = useState(false);
  const [flippedStudent, setFlippedStudent] = useState(false);

  const handleFlip = (section) => {
    switch (section) {
      case 'admin':
        setFlippedAdmin(!flippedAdmin);
        break;
      case 'faculty':
        setFlippedFaculty(!flippedFaculty);
        break;
      case 'student':
        setFlippedStudent(!flippedStudent);
        break;
      default:
        break;
    }
  };

  return (
    <div className="home-container">
      <div className={`admin-section card ${flippedAdmin ? 'flip' : ''}`} onClick={() => handleFlip('admin')}>
        <div className="card-inner">
          <div className="card-front">
            <h3 >Admin</h3>
          </div>
          <div className="card-back">
            <h3>Admin</h3>
            <ul>
              <li>Admin Login</li>
              <li>Change Password</li>
              <li>Add Faculty</li>
              <li>View Faculty</li>
              <li>Delete Faculty</li>
              <li>Add Student</li>
              <li>View Students</li>
              <li>Delete Student</li>
              <li>Add Course</li>
              <li>View Course</li>
              <li>Delete Course</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`faculty-section card ${flippedFaculty ? 'flip' : ''}`} onClick={() => handleFlip('faculty')}>
        <div className="card-inner">
          <div className="card-front">
            <h3>Faculty</h3>
          </div>
          <div className="card-back">
            <h3>Faculty</h3>
            <ul>
              <li>Faculty Login</li>
              <li>My Courses</li>
              <li>Post Attendance</li>
              <li>Post Assignments</li>
              <li>View Student Grades</li>
              <li>Update Grades</li>
              <li>Change Password</li>
              <li>View Profile</li>
              <li>Update Profile</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`student-section card ${flippedStudent ? 'flip' : ''}`} onClick={() => handleFlip('student')}>
        <div className="card-inner">
          <div className="card-front">
            <h3>Student</h3>
          </div>
          <div className="card-back">
            <h3>Student</h3>
            <ul>
              <li>Student Login</li>
              <li>View Assignments</li>
              <li>View Attendance</li>
              <li>View Profile</li>
              <li>Update Profile</li>
              <li>Course Register</li>
              <li>View Results</li>
              <li>Change Password</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
