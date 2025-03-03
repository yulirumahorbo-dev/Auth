import axios from "axios";

const API_KEY = "AIzaSyANYcMKWSXi1dAfb5ZGRXwp83zTW1UfekE";

async function createUser() {
  const response = await axios.post(
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
}
