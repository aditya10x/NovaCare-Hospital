import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/appointment-styles.css';

function Appointment() {
  const [doctorName, setDoctorName] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [image, setImage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const navigate = useNavigate(); // ✅ react-router navigation

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setDoctorName(params.get('name') || 'Dr. John Doe');
    setSpecialty(params.get('specialty') || 'Specialist');
    setImage(params.get('image') || '/images/default-doctor.jpg');
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const appointmentData = {
      name,
      email,
      date,
      time,
      doctor: doctorName,
      specialty
    };

    try {
      const res = await fetch('http://localhost:5000/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(appointmentData),
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitted(true);
        setTimeout(() => {
          navigate('/'); // ✅ proper client-side redirect
        }, 2000);
      } else {
        alert('❌ Failed to book appointment: ' + data.error);
      }
    } catch (err) {
      alert('❌ Server error: ' + err.message);
    }
  };

  return (
    <div className="appointment-container">
      <div className="appointment-box">
        <h2>Book Your Appointment</h2>

        <div className="doctor-details">
          <img src={image} alt={doctorName} />
          <div className="doctor-info">
            <h3>{doctorName}</h3>
            <p>{specialty}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} id="appointment-form">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="date">Select Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="time">Select Time</label>
              <input
                type="time"
                id="time"
                name="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              />
            </div>
          </div>

          <button type="submit" className="book-btn">Confirm Appointment</button>
        </form>

        {submitted && (
          <p id="confirmation-message" className="confirmation-message">
            ✅ Appointment booked successfully!
          </p>
        )}
      </div>
    </div>
  );
}

export default Appointment;
