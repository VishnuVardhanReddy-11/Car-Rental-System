import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("api/users", {
        username,
        email,
        password
      });

      if (response.status===201){
        console.log("User Registration Successful");
      }else {
        console.error("Unexpected status code:", response.status);
      }
    } catch (error){
      console.error(error);
    }
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)",
  };

  const cardStyle = {
    textAlign: "center",
    maxWidth: "400px",
    padding: "20px",
    borderRadius: "16px",
    border: "2px solid rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(10px)",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  };

  const titleStyle = {
    marginBottom: "20px",
    fontSize: "24px",
    color: "#fff",
    fontWeight: "bold",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    color: "#000",
    fontSize: "16px",
    marginBottom: "16px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    transition: "box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out",
  };

  const buttonStyle = {
    width: "100%",
    backgroundColor: "#28a745",
    color: "#fff",
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s ease-in-out",
  };

  const linkStyle = {
    fontSize: "16px",
    color: "#fff",
    marginTop: "20px",
    textDecoration: "none",
    transition: "color 0.3s ease-in-out",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle} onMouseEnter={() => {}}>
        <h2 style={titleStyle}>Register</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "20px" }}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={inputStyle}
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
            />
          </div>
          <button type="submit" style={buttonStyle}>
            Register
          </button>
        </form>
        <p style={linkStyle}>
          Already have an account?{" "}
          <Link to="/SignIn" style={{ color: "#fff", textDecoration: "underline" }}>
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
