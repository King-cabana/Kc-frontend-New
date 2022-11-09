import axios from "axios";

const API_URL = "https://kingcabana-event.herokuapp.com/eventuser/create/";

const register = async (fullName, password, email, phoneNumber) => {
 let data = await axios.post(API_URL, {
    fullName,
    password,
    email,
    phoneNumber,
  });
  console.log(data.data);
};

const login = async (email, password) => {
  const response = await axios
        .post(API_URL + "signin", {
            email,
            password,
        });
    if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};