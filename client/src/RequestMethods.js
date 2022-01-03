import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZDBhYzkwZjk2YWFmNDE2NmQwMGYyMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTIwMjgyMSwiZXhwIjoxNjQxNDYyMDIxfQ.sjqwqwJ41ogaRCegexxKMXFBxBwDp0-RT8I2RkdMPAw";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: {
    token: "Bearer " + TOKEN,
  },
});
