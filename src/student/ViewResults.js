import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config'

export default function ViewResults() {
  const [results, setResults] = useState([]);

  const fetchResults = async () => {
    try {
      const response = await axios.get(`${config.url}/viewresults`);
      setResults(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchResults();
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Results</h1>

      <table border={1} align="center" style={{ width: 'auto', height: 'auto' }}>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Subject</th>
            <th>Course Code</th>
            <th>Department</th>
            <th>Academic Year</th>
            <th>Semester</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(results) && results.length > 0 ? (
            results.map((results, index) => (
              <tr key={index}>
                <td>{results.studentName}</td>
                <td>{results.coursetittle}</td>
                <td>{results.coursecode}</td>
                <td>{results.deparment}</td>
                <td>{results.academicyear}</td>
                <td>{results.semester}</td>
                <td>{results.result}</td>
              </tr>
            ))
          ) : (
              <tr>
                <td colSpan="7" align='center'>Data Not Found</td>
              </tr>
            )}
        </tbody>
      </table>
    </div>
  );
}