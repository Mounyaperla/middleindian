import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import '../App.css';

function LoginPage() {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleMoreClick = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    // You can add your login validation logic here (e.g., API call)

    // Navigate to the HomePage after successful login
    navigate('/homepage'); // Replace '/home' with the actual path of your HomePage
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="image-container">
          <img
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTqoRi0oK2Ijvh9Nh84J_urwlN1BhPXMwxOCTpJ1W_qbNI3R11e"
            alt="house"
            className="house-image"
          />
        </div>
        <div className="form-container">
          <h2>LOGIN</h2>
          <form onSubmit={handleSubmit}> {/* Attach handleSubmit to the form */}
            <div className="input-container">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" required />
            </div>
            <div className="input-container">
              <label>Password</label>
              <input type="password" placeholder="Enter your password" required />
            </div>
            <button type="submit">Sign In</button> {/* Sign In button */}
          </form>

          {/* Add margin for space between form and "More..." link */}
          <a href="#" onClick={handleMoreClick} className="More">
            More...
          </a>
        </div>
      </div>

      {/* Dialog Box */}
      {isDialogOpen && (
        <div className="dialog-overlay">
          <div className="dialog-box">
            <h3>Choose an Option</h3>

            {/* Navigation to Forgot Password */}
            <Link to="/forgot-password">
              <button onClick={closeDialog}>Reset Password</button>
            </Link>

            {/* Navigation to Sign Up */}
            <Link to="/signup">
              <button onClick={closeDialog}>Sign Up</button>
            </Link>

            {/* Close Dialog */}
            <button onClick={closeDialog} className="close-dialog">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginPage;
