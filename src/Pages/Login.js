import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../auth";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  // Form submit
  const onSubmit = (data) => {
    console.log("Login Data:", data);

    // Check email and password
    const result = loginUser(
      data.email,
      data.password
    );

    // Login failed
    if (!result.success) {
      alert(result.message);
      return;
    }

    // Login successful
    alert("Login Successful");

    // Go to Home page
    navigate("/");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div
        className="card shadow p-4"
        style={{ width: "400px" }}
      >

        {/* Heading */}
        <h2 className="text-center mb-4">
          Login
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>

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

          {/* Remember Me + Forgot Password */}
          <div className="d-flex justify-content-between align-items-center mb-3">

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="rememberMe"
                {...register("rememberMe")}
              />

              <label
                className="form-check-label"
                htmlFor="rememberMe"
              >
                Remember me
              </label>
            </div>

            <a
              href="#"
              className="text-decoration-none"
              onClick={(e) => e.preventDefault()}
            >
              Forgot Password?
            </a>

          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="btn btn-dark w-100"
          >
            Login
          </button>

        </form>

        {/* Register Link */}
        <p className="text-center mt-3 mb-0">
          Don't have an account?{" "}

          <Link
            to="/Register"
            className="text-decoration-none"
          >
            Register
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Login;