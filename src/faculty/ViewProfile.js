import React, { useEffect, useState } from 'react';
import './faculty.css'; // Assuming you have a CSS file for faculty styles


export default function FacultyProfile() {
  const [facultyData, setFacultyData] = useState(null);

  useEffect(() => {
    const storedFacultyData = JSON.parse(localStorage.getItem('faculty')); // Parse JSON directly here
    setFacultyData(storedFacultyData);
  }, []);

  return (
    <div className='profile-card'>
      {facultyData ? (
        <>
          <p><strong>Faculty Id:</strong> {facultyData.facultyid}</p>
          <p><strong>Name:</strong> {facultyData.facultyname}</p>
          <p><strong>Gender:</strong> {facultyData.gender}</p>
          <p><strong>Department:</strong> {facultyData.department}</p>
          <p><strong>Qualification:</strong> {facultyData.qualification}</p>
          <p><strong>Designation:</strong> {facultyData.designation}</p>
          <p><strong>Email:</strong> {facultyData.email}</p>
          {/* <p><strong>Password:</strong> {facultyData.password}</p> */}
          <p><strong>Contact:</strong> {facultyData.contact}</p>
        </>
      ) : (
        <p>No Faculty Data Found</p>
      )}
    </div>
  );
}