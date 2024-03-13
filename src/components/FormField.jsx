// import Box from "@mui/joy/Box";
// import Button from "@mui/joy/Button";
// import ListDivider from "@mui/joy/ListDivider";
import Input from "@mui/joy/Input";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
// import styled from "styled-components";
//import FormHelperText from "@mui/joy/FormHelperText";

// Styled component named StyledInput
// const StyledInput = styled.button`
//   input,
//   label {
//     display: block;
//   }
// `;

export default function FormField({ type, label, onChange, name }) {
  return (
    <>
      <FormControl>
        <FormLabel>{label}</FormLabel>
        <Input onChange={onChange} name={name} placeholder={label} />
      </FormControl>

      {/* <label>{label}</label>
      <Input type={type} /> */}
    </>
  );
}
