import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config'

export default function ViewCourses() {
  const [courses, setCourses] = useState([]);

  const fetchCourses = async () => {
    try {
      const response = await axios.get(`${config.url}/viewcourses`);
      setCourses(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Courses</h1>
      
      <table border={1} align="center" style={{ width: 'auto', height: 'auto' }}>
        <thead>
          <tr>
            <th>Course Title</th>
            <th>Course Code</th>
            <th>Department</th>
            <th>Academic Year</th>
            <th>Semester</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(courses) && courses.length > 0 ? (
            courses.map((course, index) => (
              <tr key={index}>
                <td>{course.coursetitle}</td>
                <td>{course.coursecode}</td>
                <td>{course.department}</td>
                <td>{course.academicyear}</td>
                <td>{course.semester}</td>
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