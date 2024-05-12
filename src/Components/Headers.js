import React, { useEffect, useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Headers = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        let response = await axios.get("http://localhost:8080/login/success", {
          withCredentials: true, // Include credentials (cookies) in the request
        });
        console.log(response.data);
        setUserData(response.data);
        console.log("Avatar URL:", userData.avatar);
      } catch (error) {
        console.log("Error fetching user data:", error);
      }
    };

    getUserData();
  }, []);

  useEffect(() => {
    console.log("User Data Updated:", userData);
  }, [userData]);

  const logout = async () => {
    try {
      await axios.get("http://localhost:8080/logout", {
        withCredentials: true,
      });
      setUserData(null); // Clear user data after logout
      window.location.href = "/login";
    } catch (error) {
      console.log("Error logging out:", error);
    }
  };

  return (
    <header>
      <nav>
        <div className="left">
          <h1>{userData?.fullName}</h1>
        </div>
        <div className="right">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            {userData ? (
              <>
                <li style={{ color: "black", fontWeight: "bold" }}>
                  {userData.fullName}
                </li>
                <li>
                  <NavLink to="/dashboard">Dashboard</NavLink>
                </li>
                <li onClick={logout}>Logout</li>
                <li>
                  <img
                    src={userData?.avatar}
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                    }}
                    alt=""
                  />
                </li>
              </>
            ) : (
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Headers;
