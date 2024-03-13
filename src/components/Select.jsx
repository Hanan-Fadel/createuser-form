import styled from "styled-components";
import { YearPicker, MonthPicker, DayPicker } from "react-dropdown-date";

const Wrapper = styled.div`
  display: flex;
  margin: auto;
`;
export default function Select({
  updateBirthDate,
  birthdate,
  handleDay,
  handleMonth,
  handleYear,
}) {
  return (
    <Wrapper>
      <DayPicker defaultValue="Day" onChange={handleDay} />

      <MonthPicker defaultValue="Month" onChange={handleMonth} />

      <YearPicker defaultValue="Year" onChange={handleYear} />

      {/* <span>
        
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">{year}</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={year}
              onChange={onChange}
            />
          </FormControl>
          */}
      {/* </span>
    </> */}
    </Wrapper>
  );
}
