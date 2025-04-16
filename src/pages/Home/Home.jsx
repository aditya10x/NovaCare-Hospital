import React from 'react';
import '../../assets/homestyles.css';

function Home() {
  return (
    <div style={{ paddingTop: '100px' }}>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Your Health, Our Priority</h1>
          <p>Find the best doctors, book hassle-free appointments, and stay healthy with NovaCare.</p>
          <a href="/doctors" className="btn">Find a Doctor</a>
        </div>
      </section>

      {/* Award Section */}
      <section className="award-section">
        <img src="/images/home1.png" alt="Awarded Best Hospital" className="award-image" />
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="container">
          <h2>How It Works</h2>
          <div className="steps">
            <div className="step">
              <h3>1. Search for a Doctor</h3>
              <p>Browse specialists based on your needs.</p>
            </div>
            <div className="step">
              <h3>2. Book an Appointment</h3>
              <p>Choose a convenient time and confirm your booking.</p>
            </div>
            <div className="step">
              <h3>3. Meet Your Doctor</h3>
              <p>Consult online or visit the clinic for expert care.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <div className="container">
          <h2>Why Choose Us?</h2>
          <div className="features">
            <div className="feature">
              <h3>Top-Rated Doctors</h3>
              <p>We have highly qualified and experienced doctors.</p>
            </div>
            <div className="feature">
              <h3>Easy Appointments</h3>
              <p>Book in just a few clicks without any hassle.</p>
            </div>
            <div className="feature">
              <h3>24/7 Support</h3>
              <p>We are here to assist you anytime, anywhere.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Owner Image Section */}
      <section className="owner-section">
        <img src="/images/home2.webp" alt="Owner" />
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <h2>What Our Patients Say</h2>
          <div className="testimonial-container">
            <div className="testimonial">
              <p>"NovaCare made it so easy to book my appointment. The doctor was amazing!"</p>
              <h4>- Alex Johnson</h4>
            </div>
            <div className="testimonial">
              <p>"Highly recommend! Quick and hassle-free booking with top doctors."</p>
              <h4>- Sarah Williams</h4>
            </div>
            <div className="testimonial">
              <p>"I had a smooth experience. The doctor was very professional and helpful."</p>
              <h4>- John Doe</h4>
            </div>
            <div className="testimonial">
              <p>"Best hospital experience! The booking process was seamless."</p>
              <h4>- Emily White</h4>
            </div>
            <div className="testimonial">
              <p>"The doctors at NovaCare are truly caring and knowledgeable. Booking was effortless!"</p>
              <h4>- Michael Brown</h4>
            </div>
            <div className="testimonial">
              <p>"Exceptional service and a user-friendly platform. I found the perfect doctor in minutes!"</p>
              <h4>- Sophia Lee</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta">
        <div className="container">
          <h2>Start Your Health Journey Today</h2>
          <a href="/doctors" className="btn">Find a Doctor</a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 NovaCare. All Rights Reserved.</p>
      </footer>

      {/* WhatsApp Floating Button */}
      <a href="https://wa.me/0918469304029" className="whatsapp-float" target="_blank" rel="noreferrer">
        <img src="/images/whatsapp-icon.png" alt="Chat with us" />
      </a>
    </div>
  );
}

export default Home;
