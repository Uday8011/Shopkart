// Register a new user
export const registerUser = (user) => {
  localStorage.setItem("registeredUser", JSON.stringify(user));
};


// Get registered user
export const getRegisteredUser = () => {
  const user = localStorage.getItem("registeredUser");

  return user ? JSON.parse(user) : null;
};


// Login user
export const loginUser = (email, password) => {
  const registeredUser = getRegisteredUser();

  // Check if user exists
  if (!registeredUser) {
    return {
      success: false,
      message: "User not registered. Please register first.",
    };
  }

  // Check email
  if (registeredUser.email !== email) {
    return {
      success: false,
      message: "Invalid email or password.",
    };
  }

  // Check password
  if (registeredUser.password !== password) {
    return {
      success: false,
      message: "Invalid email or password.",
    };
  }

  // Save logged-in user
  const loggedInUser = {
    name: registeredUser.name,
    email: registeredUser.email,
  };

  localStorage.setItem(
    "user",
    JSON.stringify(loggedInUser)
  );

  return {
    success: true,
    message: "Login Successful",
    user: loggedInUser,
  };
};


// Get currently logged-in user
export const getUser = () => {
  const user = localStorage.getItem("user");

  return user ? JSON.parse(user) : null;
};


// Check whether user is logged in
export const isAuthenticated = () => {
  return localStorage.getItem("user") !== null;
};


// Logout user
export const logoutUser = () => {
  localStorage.removeItem("user");
};
