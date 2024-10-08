import React from 'react';
import './Branches.css'; // Import CSS for styling

const Branches = () => {
  const branches = [
    {
      name: 'Mumbai Branch',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRNdjFqZ9H7_shDCG6ithwhVaggmX4bxM7Hw&s',
      address: '123 Marine Drive, Mumbai, India',
    },
    {
      name: 'Delhi Branch',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw3cu4Q0UdXiRTKpwOAQMz0Sejylq1ipPoiA&s',
      address: '456 Connaught Place, Delhi, India',
    },
    {
      name: 'Bangalore Branch',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeXUpXLxLPDV8xxzJtxNiju3nKE-U7QQNYMA&s',
      address: '789 MG Road, Bangalore, India',
    },
    {
      name: 'Hyderabad Branch',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmJ7I4Nz7zluNuFYxzz6tlrZATyYN7GUWlxQ&s',
      address: '101 Charminar Road, Hyderabad, India',
    },
  ];

  return (
    <div className="branches-page">
      <h1>Our Branches</h1>
      <p>We have multiple branches across major cities in India.</p>

      <div className="branches-grid">
        {branches.map((branch, index) => (
          <div key={index} className="branch-card">
            <img src={branch.image} alt={`${branch.name}`} className="branch-image" />
            <h3>{branch.name}</h3>
            <p>{branch.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Branches;
