import React, { useState } from "react";
import "./form.css";
import FormField from "./FormField";
import { Button } from "@mui/joy";
import Select from "./Select";
import styled from "styled-components";
import Validation from "./Validation";

// const schema = zod.object().shape({
//   full_name: zod.string().required(),
// contact_number: yup.string().required(),
// email: yup.string().required(),
// birthdate: {
//   day: yup.string().required(),
//   month: yup.string().required(),
//   year: yup.string().required(),
// },
// password: yup.string().required(),
// confirm_password: yup.string().required(),

// user: yup.object().shape({
//   full_name: yup.string().required(),
//   email: yup.string().required(),
// });

// const schema = yup.object().full_name.string().required();
//   name: yup.string().required(),
//   age: yup.number().required(),
// }}
// .required();

const StyledSubmit = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
`;

export const Form = () => {
  const [submitted, setSubmitted] = useState(false);
  const [validUser, setValidUser] = useState(false);

  // const schema =
  const [user, setUser] = React.useState({
    full_name: "",
    contact_number: "",
    email: "",
    birthdate: {
      day: "",
      month: "",
      year: "",
    },
    password: "",
    confirm_password: "",
  });

  const minDate = new Date();
  const maxDate = new Date();
  minDate.setFullYear(maxDate.getFullYear() - 100);
  maxDate.setFullYear(maxDate.getFullYear() + 3);

  const handleChange = (e) => {
    // // {...user([e.target.name])}
    // // console.log("form===> ", form);
    // console.log("user===> ", user);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleDay = (val) => {
    setUser((prev) => ({
      ...prev,
      birthdate: {
        ...prev.birthdate,
        day: val,
      },
    }));
  };

  const handleMonth = (val) => {
    val = parseInt(val) + 1;

    setUser((prev) => ({
      ...prev,
      birthdate: {
        ...prev.birthdate,
        month: val,
      },
    }));
  };

  const handleYear = (val) => {
    setUser((prev) => ({
      ...prev,
      birthdate: {
        ...prev.birthdate,
        year: val,
      },
    }));

    // console.log(user);
  };

  const validateUser = () => {
    if (user.hasOwnProperty("full_name")) {
      if (user.full_name === "") {
        console.log("Full Name is required");
        return false;
      } else {
        let regex = /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/;
        if (regex.test(user.full_name)) {
          console.log("Full name cannot have special chars");
          return false;
        } else {
          console.log("Valid full name");
        }
      }
    }

    if (user.hasOwnProperty("contact_number")) {
      if (user.contact_number === "") {
        console.log("Contact Number is required");
        return false;
      } else {
        let regex = /^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/;
        if (!regex.test(user.contact_number)) {
          console.log("phone number is invlaid");
          return false;
        }
        console.log("valid contact number");
      }
    }

    if (user.hasOwnProperty("email")) {
      if (user.email === "") {
        console.log("Email is required");
        return false;
      } else {
        let regex = /^\S+@\S+\.\S+$/;
        if (!regex.test(user.email)) {
          console.log("Invalid email format");
          return false;
        }
        console.log("Email is Valid!!");
      }
    }

    if (user.hasOwnProperty("birthdate") && user.birthdate.day === "") {
      console.log("Day is required");
      return false;
    }

    if (user.hasOwnProperty("birthdate") && user.birthdate.month === "") {
      console.log("Month is required");
      return false;
    }

    if (user.hasOwnProperty("birthdate") && user.birthdate.year === "") {
      console.log("Year is required");
      return false;
    }

    if (user.hasOwnProperty("password")) {
      if (user.password === null) {
        console.log("Password is required");
        return false;
      } else {
        if (!checkPassword(user.password)) {
          console.log("Password is INVALID", user.password);
          return false;
        }
        console.log("Password is valid", user.password);
      }
    }
    if (user.hasOwnProperty("confirm_password")) {
      if (user.confirm_password === "") {
        console.log("Match Password is required");
        return false;
      } else {
        if (user.confirm_password !== user.password) {
          console.log("Password did not match: Please try again...");
          return false;
        }
        console.log("Password DOES Match");
      }
    }

    setValidUser(true);
    return true;
  };
  const handleSubmitButton = () => {
    setSubmitted(validateUser());
  };

  function checkPassword(str) {
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(str);
  }

  return (
    <form>
      <div>
        <FormField onChange={handleChange} name="full_name" label="Full Name" />
        <FormField
          onChange={handleChange}
          name="contact_number"
          label="Contact Number"
        />
        <FormField onChange={handleChange} name="email" label="Email Address" />
        {/* Birthdate */}
        <label style={{ marginLeft: "2rem", marginTop: "1rem" }}>
          Birthdate
        </label>
        <span style={{ marginLeft: "4rem", marginTop: "1rem" }}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            handleDay={handleDay}
            handleMonth={handleMonth}
            handleYear={handleYear}
          ></Select>
        </span>

        <FormField onChange={handleChange} name="password" label="Password" />
        <FormField
          onChange={handleChange}
          name="confirm_password"
          label="Confirm Password"
        />
        <StyledSubmit>
          <span>
            <Button style={{ marginLeft: "5rem" }}>Cancel</Button>
            {/* onClick={handleSubmit} */}
            <Button
              style={{ marginLeft: "0.5rem" }}
              onClick={handleSubmitButton}
            >
              Submit
            </Button>
          </span>
        </StyledSubmit>
        {!validUser ? (
          <p>Please Enter all required fields</p>
        ) : submitted ? (
          <Validation userData={user} />
        ) : (
          ""
        )}
      </div>
    </form>
  );
};
