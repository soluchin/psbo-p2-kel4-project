import { useState, useEffect } from "react";

const useUser = () => {
  const [currentUser, setCurrentUser] = useState("");
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("currentUser"));
    setCurrentUser(data);
  }, []);
  return {
    currentUser,
  };
};

export default useUser;
