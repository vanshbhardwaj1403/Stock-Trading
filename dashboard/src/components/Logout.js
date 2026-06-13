
import React from "react";
import { useAuth } from "../hooks/useAuth";

function Logout() {
  const { logout, user } = useAuth();

  return (
    <div>
      {user ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button>Login</button>
      )}
    </div>
  );
}

export default Logout;
