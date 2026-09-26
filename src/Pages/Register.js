import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../auth";

function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  // Get password value
  const password = watch("password");

  // Form submit
  const onSubmit = (data) => {
    console.log("Registration Data:", data);

    // Save registered user
    registerUser({
      name: data.name,
      email: data.email,
      password: data.password,
    });

    alert("Registration Successful");

    // Go to Login page
    navigate("/Login");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div
        className="card shadow p-4"
        style={{ width: "400px" }}
      >

        {/* Heading */}
        <h2 className="text-center mb-4">
          Register
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>

          {/* Full Name */}
          <div className="mb-3">
            <label
              htmlFor="name"
              className="form-label"
            >
              Full Name
            </label>

            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your full name"
              {...register("name", {
                required: "Full Name is required",
              })}
            />

            {errors.name && (
              <p className="text-danger">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="mb-3">
            <label
              htmlFor="email"
              className="form-label"
            >
              Email
            </label>

            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email format",
                },
              })}
            />

            {errors.email && (
              <p className="text-danger">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="mb-3">
            <label
              htmlFor="password"
              className="form-label"
            >
              Password
            </label>

            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message:
                    "Password must be at least 6 characters",
                },
              })}
            />

            {errors.password && (
              <p className="text-danger">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="mb-3">
            <label
              htmlFor="confirmPassword"
              className="form-label"
            >
              Confirm Password
            </label>

            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="Confirm your password"
              {...register("confirmPassword", {
                required:
                  "Please confirm your password",
                validate: (value) =>
                  value === password ||
                  "Passwords do not match",
              })}
            />

            {errors.confirmPassword && (
              <p className="text-danger">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="btn btn-dark w-100"
          >
            Register
          </button>

        </form>

        {/* Login Link */}
        <p className="text-center mt-3 mb-0">
          Already have an account?{" "}

          <Link
            to="/Login"
            className="text-decoration-none"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Register;