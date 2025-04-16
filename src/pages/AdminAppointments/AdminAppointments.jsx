import React, { useEffect, useState } from 'react';
import '../../assets/AdminAppointments.css';

function AdminAppointments() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/appointments')
      .then((res) => res.json())
      .then((data) => setAppointments(data))
      .catch((err) => console.error('Error fetching appointments:', err));
  }, []);

  return (
    <div className="admin-appointments">
      <h2>All Appointments</h2>
      <div className="appointments-table">
        <table>
          <thead>
            <tr>
              <th>Patient</th>
              <th>Email</th>
              <th>Date</th>
              <th>Time</th>
              <th>Doctor</th>
              <th>Specialty</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((a, i) => (
              <tr key={i}>
                <td>{a.name}</td>
                <td>{a.email}</td>
                <td>{a.date}</td>
                <td>{a.time}</td>
                <td>{a.doctor}</td>
                <td>{a.specialty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminAppointments;
