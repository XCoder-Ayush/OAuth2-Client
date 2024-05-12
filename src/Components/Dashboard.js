import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoggedIn = async () => {
      try {
        // Make a request to the server to check if the user is logged in
        const response = await axios.get(
          "http://localhost:8080/login/success",
          {
            withCredentials: true, // Include credentials (cookies) in the request
          }
        );

        // If the request is successful and the user is logged in, update state
        setIsLoggedIn(true);
      } catch (error) {
        // If there's an error or the user is not logged in, set state accordingly
        setIsLoggedIn(false);
      }
    };

    checkLoggedIn();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      {isLoggedIn ? (
        <h1>Welcome to the Dashboard!</h1>
      ) : (
        <h1>Please sign in to access the Dashboard.</h1>
      )}
    </div>
  );
};

export default Dashboard;
