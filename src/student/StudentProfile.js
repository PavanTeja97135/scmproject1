import React, { useEffect, useState } from 'react';


export default function StudentProfile() {
    const [studentData, setStudentData] = useState(null);
  
    useEffect(() => {
      const storedStudentData = localStorage.getItem('student');
      if (storedStudentData) {
        const parsedStudentData = JSON.parse(storedStudentData);
        setStudentData(parsedStudentData);
      }
    }, []);
  return (
    studentData ? (
      <div className='profile-card'>
         <p><strong>Student ID:</strong> {studentData.studentid}</p>
        <p><strong>Student Name:</strong> {studentData.studentname}</p>
        <p><strong>Gender:</strong> {studentData.gender}</p>
        <p><strong>Date of Birth:</strong> {studentData.dateofbirth}</p>
        <p><strong>program:</strong> {studentData.program}</p>
        <p><strong>department:</strong> {studentData.department}</p>
        <p><strong>Semester:</strong> {studentData.semester}</p>
        <p><strong>Email:</strong> {studentData.email}</p>
        <p><strong>Year:</strong> {studentData.year}</p>
        <p><strong>Contact:</strong> {studentData.contact}</p>
      </div>
    ) : (
      <p>No Job Seeker Data Found</p>
    )
  );
}