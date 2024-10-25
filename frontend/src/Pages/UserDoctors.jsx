import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import styles from './UserDoctors.module.css';

const UserDoctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/user/doctors"
        );
        setDoctors(data.doctors);
      } catch (error) {
        toast.error("Failed to fetch doctors");
      }
    };
    fetchDoctors();
  }, []);

  return (
    <section className={styles.doctors}>
      <h1 className={styles.title}>Our Doctors</h1>
      <div className={styles.banner}>
        {doctors && doctors.length > 0 ? (
          doctors.map((element) => {
            return (
              <div className={styles.card} key={element._id}>
                <img
                  src={element.docAvatar && element.docAvatar.url}
                  alt="Doctor Avatar"
                  className={styles.doctorAvatar} 
                />
                <h4 className={styles.doctorName}>{`${element.firstName} ${element.lastName}`}</h4>
                <div className={styles.details}>
                  <p>
                    Department: <span>{element.doctorDepartment}</span>
                  </p>
                  <p>
                    Phone: <span>{element.phone}</span>
                  </p>
                  <p>
                    Gender: <span>{element.gender}</span>
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <h1>No Doctors Available at the Moment</h1>
        )}
      </div>
    </section>
  );
};

export default UserDoctors;