// auth.js
import axios from "axios";

const API_KEY = "AIzaSyCWayj285BKjAn1zzQHT1cxjiN3T9QU3yI";

async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
  try {
    const response = await axios.post(url, {
      email: email,
      password: password,
      returnSecureToken: true,
    });
    const token = response.data.idToken;
    return token;
  } catch (error) {
    handleError(error);
    throw error;
  }
}

export function createUser(email, password) {
  return authenticate("signUp", email, password);
}

export function login(email, password) {
  return authenticate("signInWithPassword", email, password);
}

export async function sendPasswordResetEmail(email) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${API_KEY}`;
  try {
    await axios.post(url, {
      requestType: "PASSWORD_RESET",
      email: email,
    });
  } catch (error) {
    handleError(error);
    throw error;
  }
}

function handleError(error) {
  if (error.response) {
    console.error(`Error: ${error.response.data.error.message}`);
  } else if (error.request) {
    console.error("No response received:", error.request);
  } else {
    console.error("Error in request setup:", error.message);
  }
}
