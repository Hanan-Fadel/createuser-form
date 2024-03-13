import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Wrapper = styled.div`
  margin-top: 1rem;
  background-color: lightgreen;
  width: 100%;
  font-size: 1.25rem;
  display: block;
`;
const baseUrl = `https://fullstack-test-navy.vercel.app/api/users/create`;
export default function Login({ userData }) {
  const { full_name, email, password } = userData;

  const [description, setDescription] = useState("");

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const res = await axios({
      method: "post",
      url: baseUrl,
      headers: {},
      data: {
        full_name: full_name,
        email: email,
        password: password,
      },
    });

    //console.log("status====", res.request.status);
    setDescription(res.data.description);
  };

  return (
    <div>
      {description && (
        <Wrapper>
          <div>{description}</div>
        </Wrapper>
      )}
    </div>
  );
}
