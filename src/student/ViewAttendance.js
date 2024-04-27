import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config'

export default function ViewAttendance() {
  const [attendance, setAttendance] = useState([]);

  const fetchAttendance = async () => {
    try {
      const response = await axios.get(`${config.url}/viewattendance`);
      setAttendance(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchAttendance();
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Attendance</h1>

      <table border={1} align="center" style={{ width: 'auto', height: 'auto' }}>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Student Name</th>
            <th>Course Code</th>
            <th>Course Name</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(attendance) && attendance.length > 0 ? (
            attendance.map((record, index) => (
              <tr key={index}>
                <td>{attendance.studentid}</td>
                <td>{attendance.studentname}</td>
                <td>{attendance.coursecode}</td>
                <td>{attendance.coursename}</td>
                <td>{attendance.percentage}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" align='center'>Data Not Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}