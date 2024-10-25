import React from "react";
import { Link } from "react-router-dom";
import "../styles/Blogs.css";

const Blogs = () => {
  const blogPosts = [
    { id: 1, title: "The Importance of Regular Checkups", summary: "Why regular health checkups are crucial." },
    { id: 2, title: "Top 10 Health Tips for Busy Professionals", summary: "Simple tips to stay healthy while managing a busy life." },
    { id: 3, title: "How to Choose the Right Doctor", summary: "A guide to finding the right medical professional for your needs." },
    { id: 4, title: "Understanding Mental Health", summary: "Why mental health is just as important as physical health." },
    { id: 5, title: "Healthy Eating for a Stronger Body", summary: "Nutrition tips for maintaining a strong and healthy body." },
    { id: 6, title: "How to Manage Stress Effectively", summary: "Techniques to reduce stress and improve well-being." },
  ];

  return (
    <div className="blogs-container">
      <h1>Latest Blogs</h1>
      <div className="blog-grid">
        {blogPosts.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.summary}</p>
            <Link to={`/blog/${blog.id}`} className="read-more">Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
