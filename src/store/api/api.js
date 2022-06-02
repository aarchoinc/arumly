import axios from "axios";
// import Cookies from "js-cookie";
const NODE_ENV = process.env.NODE_ENV;

if (NODE_ENV === "development") {
  var devUrl = "http://127.0.0.1:3002/api/v1";
}
if (NODE_ENV === "production") {
  var prodUrl = "http://www.api.aarcho.com/api/v1";
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
