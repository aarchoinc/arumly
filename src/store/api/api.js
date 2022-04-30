import axios from "axios";
// import Cookies from "js-cookie";
const NODE_ENV = process.env.NODE_ENV;

if (NODE_ENV === "development") {
  var devUrl = "http://127.0.0.1:3000/api/v1";
}
if (NODE_ENV === "production") {
  var prodUrl = "https://iixoa-api-usc1-nhajfxfhra-uc.a.run.app/api/v1";
}

// const token = localStorage.getItem("idToken");

export default axios.create({
  baseURL: devUrl || prodUrl,
  timeout: 5000, // 5000
  headers: {
    "Content-Type": "application/json",
    // "X-CSRFToken": Cookies.get("csrftoken")
    // Authorization: `Token ${token}`,
  },
});
