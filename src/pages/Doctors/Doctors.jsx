import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import '../../assets/doctor-list.css';

const doctorData = [
  {
    name: "Dr. John Doe",
    specialty: "Cardiologist",
    image: "/images/cardiologist1.jpg",
  },
  {
    name: "Dr. Alex Turner",
    specialty: "Cardiologist",
    image: "/images/cardiologist2.jpg",
  },
  {
    name: "Dr. Sarah Smith",
    specialty: "Neurologist",
    image: "/images/neurologist1.jpg",
  },
  {
    name: "Dr. Sophia Brown",
    specialty: "Neurologist",
    image: "/images/neurologist2.jpg",
  },
  {
    name: "Dr. David Lee",
    specialty: "Orthopedic",
    image: "/images/orthopedic1.jpg",
  },
  {
    name: "Dr. Jessica Adams",
    specialty: "Orthopedic",
    image: "/images/orthopedic2.jpg",
  },
  {
    name: "Dr. Emily White",
    specialty: "Dentist",
    image: "/images/dentist1.jpg",
  },
  {
    name: "Dr. Mark Wilson",
    specialty: "Dentist",
    image: "/images/dentist2.jpg",
  },
  {
    name: "Dr. Anna Roberts",
    specialty: "Dermatologist",
    image: "/images/dermat1.jpg",
  },
  {
    name: "Dr. Brian Clark",
    specialty: "Dermatologist",
    image: "/images/dermat2.jpg",
  },
  {
    name: "Dr. Olivia Green",
    specialty: "Pediatrician",
    image: "/images/pediatrician1.jpg",
  },
  {
    name: "Dr. Ryan Cooper",
    specialty: "Pediatrician",
    image: "/images/pediatrician2.jpg",
  },
];

function Doctors() {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDoctors = doctorData.filter((doctor) => {
    const matchesSpecialty = filter === "all" || doctor.specialty.toLowerCase() === filter;
    const matchesName = doctor.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSpecialty && matchesName;
  });

  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '0px' }}>
        <section className="doctor-list-section">
          <div className="container">
            <h1>Find a Doctor</h1>

            {/* Filter & Search */}
            <div className="filter-container">
              <div className="search-container">
                <input
                  type="text"
                  id="doctor-search"
                  placeholder="Search doctor by name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <select
                id="doctor-filter"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="all">All</option>
                <option value="cardiologist">Cardiologist</option>
                <option value="neurologist">Neurologist</option>
                <option value="orthopedic">Orthopedic</option>
                <option value="dentist">Dentist</option>
                <option value="dermatologist">Dermatologist</option>
                <option value="pediatrician">Pediatrician</option>
              </select>
            </div>

            {/* Doctor Cards */}
            <div className="container">
              <div className="doctor-list">
                {filteredDoctors.map((doctor, index) => (
                  <div className={`doctor-card ${doctor.specialty.toLowerCase()}`} key={index}>
                    <img src={doctor.image} alt={doctor.name} />
                    <h3>{doctor.name}</h3>
                    <p>{doctor.specialty}</p>
                    <a
                      href={`/appointment?name=${encodeURIComponent(doctor.name)}&specialty=${doctor.specialty}&image=${doctor.image}`}
                      className="book-btn"
                    >
                      Book Appointment
                    </a>
                  </div>
                  ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Doctors;
