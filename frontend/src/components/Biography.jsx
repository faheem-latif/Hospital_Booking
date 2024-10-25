import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
        <section>
          <h3>About Our Hospital</h3>
          <p>
            Welcome to our hospital, where compassionate care meets innovative
            healthcare solutions. We are dedicated to providing top-notch medical
            services to our community, ensuring that every patient receives the
            best possible care.
          </p>
        </section>
        <section>
          <h3>Our Medical Team</h3>
          <p>
            Our team of experienced doctors and medical professionals are here to
            serve you. With expertise in various medical fields, our doctors are
            committed to diagnosing and treating patients with the highest level
            of care and professionalism.
          </p>
        </section>
        <section>
          <h3>Book an Appointment</h3>
          <p>
            Booking an appointment with our specialists is easy and convenient.
            Our online booking system allows you to choose the doctor, date, and
            time that works best for you. We are here to make your healthcare
            journey as smooth as possible.
          </p>
        </section>          
        </div>
      </div>
    </>
  );
};

export default Biography;
