import React, { useEffect, useState } from "react";

import Login from "./Login";

function Validation({ userData }) {
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    validateUser();
  }, []);

  const validateUser = () => {
    let isValid = true;
    const newErrors = {};

    // Validate email
    if (!userData.email) {
      newErrors.email = "Email is required";
      setIsValid(false);
    }

    // Validate password
    if (!userData.password) {
      newErrors.password = "Password is required";
      setIsValid(false);
    }

    if (Object.keys(errors).length === 0) {
      // Form is valid, you can submit or process the data here
      console.log("User data:", userData);
      setIsValid(true); // Set a submitted flag
    } else {
      // Form is not valid, display error messages
      console.log("User data:", userData);
      console.log("errors", newErrors);
      setIsValid(false); // Set a submitted flag
    }
    setErrors(newErrors);
    return isValid;
  };

  return (
    <div>
      {isValid ? (
        <div className="success-message">
          <Login userData={userData} />
        </div>
      ) : (
        <div>Validating!!!</div>
      )}
    </div>
  );
}

export default Validation;
