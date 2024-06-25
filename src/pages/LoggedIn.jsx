import React from "react";
import { auth } from "../firebase";

function LoggedIn() {
  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div>
      <h1>LoggedIn</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default LoggedIn;
