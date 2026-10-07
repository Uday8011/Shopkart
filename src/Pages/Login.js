import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [focusedField, setFocusedField] = useState(null);
  const [btnHover, setBtnHover] = useState(false);
  const [linkHover, setLinkHover] = useState(false);
  const [success, setSuccess] = useState("");
  const cardRef = useRef(null);
  const canvasRef = useRef(null);

  // Load Premium Typography (Outfit & Plus Jakarta Sans)
  useEffect(() => {
    const id = "premium-shopping-fonts";
    if (!document.getElementById(id)) {
      const link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  // 3D Luxury Shopping Canvas (Platinum & Emerald Wireframe Parcels)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let reqId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const cubeVertices = [
      [-1, -1, -1],
      [1, -1, -1],
      [1, 1, -1],
      [-1, 1, -1],
      [-1, -1, 1],
      [1, -1, 1],
      [1, 1, 1],
      [-1, 1, 1],
    ];

    const cubeEdges = [
      [0, 1], [1, 2], [2, 3], [3, 0],
      [4, 5], [5, 6], [6, 7], [7, 4],
      [0, 4], [1, 5], [2, 6], [3, 7],
    ];

    const boxes = Array.from({ length: 16 }, () => ({
      x: (Math.random() - 0.5) * window.innerWidth * 1.3,
      y: (Math.random() - 0.5) * window.innerHeight * 1.3,
      z: Math.random() * 700 + 150,
      size: Math.random() * 30 + 20,
      rotX: Math.random() * Math.PI,
      rotY: Math.random() * Math.PI,
      rotZ: Math.random() * Math.PI,
      speedRotX: (Math.random() - 0.5) * 0.015,
      speedRotY: (Math.random() - 0.5) * 0.018,
      speedRotZ: (Math.random() - 0.5) * 0.012,
      vy: -(Math.random() * 0.45 + 0.2),
      vx: (Math.random() - 0.5) * 0.3,
    }));

    const particles = Array.from({ length: 40 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      radius: Math.random() * 1.8 + 0.6,
      alpha: Math.random() * 0.5 + 0.2,
      vy: -(Math.random() * 0.4 + 0.15),
      char: Math.random() > 0.6 ? "✦" : "%",
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const fov = 440;

      // Floating Minimalist Sparks & Micro Tags
      particles.forEach((p) => {
        p.y += p.vy;
        if (p.y < -20) {
          p.y = canvas.height + 20;
          p.x = Math.random() * canvas.width;
        }

        ctx.font = "11px 'Plus Jakarta Sans', sans-serif";
        ctx.fillStyle = `rgba(148, 163, 184, ${p.alpha * 0.6})`;
        ctx.fillText(p.char, p.x, p.y);
      });

      // 3D Platinum Geometric Parcels
      boxes.forEach((box) => {
        box.y += box.vy;
        box.x += box.vx;
        box.rotX += box.speedRotX;
        box.rotY += box.speedRotY;
        box.rotZ += box.speedRotZ;

        if (box.y < -canvas.height / 2 - 100) {
          box.y = canvas.height / 2 + 100;
          box.x = (Math.random() - 0.5) * canvas.width;
        }

        const cosX = Math.cos(box.rotX), sinX = Math.sin(box.rotX);
        const cosY = Math.cos(box.rotY), sinY = Math.sin(box.rotY);
        const cosZ = Math.cos(box.rotZ), sinZ = Math.sin(box.rotZ);

        const projected = cubeVertices.map(([vx, vy, vz]) => {
          let x = vx * box.size;
          let y = vy * box.size;
          let z = vz * box.size;

          let x1 = x * cosY + z * sinY;
          let z1 = -x * sinY + z * cosY;

          let y2 = y * cosX - z1 * sinX;
          let z2 = y * sinX + z1 * cosX;

          let x3 = x1 * cosZ - y2 * sinZ;
          let y3 = x1 * sinZ + y2 * cosZ;

          const worldX = x3 + box.x;
          const worldY = y3 + box.y;
          const worldZ = z2 + box.z;

          const scale = fov / (fov + worldZ);
          return [cx + worldX * scale, cy + worldY * scale, scale];
        });

        ctx.save();
        ctx.lineWidth = 1.1;
        ctx.strokeStyle = "rgba(226, 232, 240, 0.25)";
        ctx.shadowColor = "rgba(56, 189, 248, 0.45)";
        ctx.shadowBlur = 10;

        cubeEdges.forEach(([start, end]) => {
          ctx.beginPath();
          ctx.moveTo(projected[start][0], projected[start][1]);
          ctx.lineTo(projected[end][0], projected[end][1]);
          ctx.stroke();
        });

        // Cross Tape Holographic Accent
        ctx.strokeStyle = "rgba(52, 211, 153, 0.35)";
        ctx.beginPath();
        ctx.moveTo(projected[0][0], projected[0][1]);
        ctx.lineTo(projected[2][0], projected[2][1]);
        ctx.stroke();

        ctx.restore();
      });

      reqId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(reqId);
    };
  }, []);

  // 3D Parallax Mouse Physics
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = -(y / (rect.height / 2)) * 7.5;
    const rotateY = (x / (rect.width / 2)) * 7.5;

    card.style.transform = `perspective(1100px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.015, 1.015, 1.015)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform =
      "perspective(1100px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
  };

  const onSubmit = (data) => {
    console.log("Login Payload:", data);
    setSuccess(`Welcome back, ${data.email}!`);
    reset();
  };

  const styles = {
    container: {
      minHeight: "100vh",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#06080e",
      backgroundImage: `
        radial-gradient(circle at 50% 15%, rgba(56, 189, 248, 0.08) 0%, transparent 55%),
        radial-gradient(circle at 85% 85%, rgba(99, 102, 241, 0.12) 0%, transparent 50%),
        radial-gradient(circle at 15% 75%, rgba(16, 185, 129, 0.07) 0%, transparent 45%),
        linear-gradient(180deg, #090d16 0%, #04060a 100%)
      `,
      perspective: "1100px",
      overflow: "hidden",
      position: "relative",
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      padding: "24px 16px",
      boxSizing: "border-box",
    },
    canvas: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      pointerEvents: "none",
      zIndex: 1,
    },
    auroraHalo: {
      position: "absolute",
      width: "650px",
      height: "650px",
      borderRadius: "50%",
      background: "radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, rgba(56, 189, 248, 0.04) 40%, transparent 70%)",
      filter: "blur(80px)",
      pointerEvents: "none",
      zIndex: 1,
    },
    cardWrapper: {
      position: "relative",
      zIndex: 2,
      width: "100%",
      maxWidth: "450px",
      transformStyle: "preserve-3d",
      transition: "transform 0.16s ease-out",
    },
    card: {
      position: "relative",
      borderRadius: "28px",
      background: "rgba(11, 15, 25, 0.72)",
      backdropFilter: "blur(32px)",
      WebkitBackdropFilter: "blur(32px)",
      border: "1px solid rgba(255, 255, 255, 0.09)",
      boxShadow: `
        0 35px 70px -15px rgba(0, 0, 0, 0.95),
        0 0 1px 1px rgba(255, 255, 255, 0.14),
        inset 0 1px 0 rgba(255, 255, 255, 0.2)
      `,
      padding: "42px 36px",
      transform: "translateZ(30px)",
      transformStyle: "preserve-3d",
    },
    badge: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      padding: "5px 14px",
      borderRadius: "100px",
      background: "rgba(255, 255, 255, 0.05)",
      border: "1px solid rgba(255, 255, 255, 0.14)",
      color: "#e2e8f0",
      fontSize: "0.72rem",
      fontWeight: 600,
      letterSpacing: "1.2px",
      textTransform: "uppercase",
      marginBottom: "14px",
      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.15)",
    },
    title: {
      fontFamily: "'Outfit', sans-serif",
      fontSize: "2.1rem",
      fontWeight: 700,
      letterSpacing: "-0.6px",
      color: "#f8fafc",
      margin: "0 0 6px 0",
      lineHeight: 1.15,
    },
    subtitle: {
      fontSize: "0.86rem",
      color: "#94a3b8",
      margin: "0 0 28px 0",
      lineHeight: 1.45,
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "18px",
      transformStyle: "preserve-3d",
    },
    fieldGroup: {
      display: "flex",
      flexDirection: "column",
      transform: "translateZ(25px)",
    },
    label: {
      fontSize: "0.74rem",
      fontWeight: 600,
      color: "#cbd5e1",
      marginBottom: "6px",
      letterSpacing: "0.4px",
    },
    input: (fieldName) => ({
      width: "100%",
      boxSizing: "border-box",
      background:
        focusedField === fieldName
          ? "rgba(18, 25, 42, 0.9)"
          : "rgba(10, 14, 24, 0.55)",
      border:
        focusedField === fieldName
          ? "1px solid rgba(226, 232, 240, 0.65)"
          : "1px solid rgba(255, 255, 255, 0.08)",
      borderRadius: "14px",
      padding: "13px 18px",
      color: "#ffffff",
      fontSize: "0.92rem",
      outline: "none",
      transition: "all 0.25s ease",
      boxShadow:
        focusedField === fieldName
          ? "0 0 20px rgba(226, 232, 240, 0.2), inset 0 2px 4px rgba(0, 0, 0, 0.5)"
          : "inset 0 1px 3px rgba(0, 0, 0, 0.35)",
    }),
    error: {
      color: "#f87171",
      fontSize: "0.73rem",
      marginTop: "4px",
    },
    successBox: {
      background: "rgba(52, 211, 153, 0.12)",
      border: "1px solid rgba(52, 211, 153, 0.35)",
      color: "#6ee7b7",
      borderRadius: "12px",
      padding: "12px",
      fontSize: "0.85rem",
      textAlign: "center",
      marginBottom: "16px",
    },
    button: {
      marginTop: "8px",
      background: btnHover
        ? "linear-gradient(135deg, #ffffff 0%, #cbd5e1 50%, #94a3b8 100%)"
        : "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)",
      border: "none",
      borderRadius: "14px",
      color: "#090d16",
      fontFamily: "'Outfit', sans-serif",
      fontSize: "0.98rem",
      fontWeight: 700,
      letterSpacing: "0.6px",
      padding: "15px",
      cursor: "pointer",
      boxShadow: btnHover
        ? "0 14px 30px rgba(0, 0, 0, 0.7), 0 0 25px rgba(255, 255, 255, 0.35)"
        : "0 8px 22px rgba(0, 0, 0, 0.5), 0 0 15px rgba(255, 255, 255, 0.15)",
      transform: btnHover ? "translateZ(42px) translateY(-1px)" : "translateZ(30px)",
      transition: "all 0.25s ease",
    },
    footer: {
      fontSize: "0.82rem",
      color: "#94a3b8",
      textAlign: "center",
      marginTop: "16px",
    },
    link: {
      color: linkHover ? "#ffffff" : "#cbd5e1",
      textDecoration: "none",
      fontWeight: 600,
      marginLeft: "5px",
      textShadow: linkHover ? "0 0 10px rgba(255, 255, 255, 0.6)" : "none",
      transition: "all 0.2s ease",
    },
  };

  return React.createElement(
    "div",
    { style: styles.container },
    React.createElement(
      "style",
      null,
      `
        input::placeholder {
          color: rgba(148, 163, 184, 0.4);
        }
      `
    ),

    // 3D Canvas Parcels
    React.createElement("canvas", { ref: canvasRef, style: styles.canvas }),

    // Ambient Halo
    React.createElement("div", { style: styles.auroraHalo }),

    // 3D Tilt Card Shell
    React.createElement(
      "div",
      {
        style: styles.cardWrapper,
        ref: cardRef,
        onMouseMove: handleMouseMove,
        onMouseLeave: handleMouseLeave,
      },
      React.createElement(
        "div",
        { style: styles.card },
        React.createElement(
          "div",
          { style: { textAlign: "center" } },
          React.createElement(
            "div",
            { style: styles.badge },
            React.createElement("span", { style: { fontSize: "11px" } }, "✦"),
            " Secure Portal"
          ),
          React.createElement("h2", { style: styles.title }, "User Login"),
          React.createElement(
            "p",
            { style: styles.subtitle },
            "Welcome back! Enter your details to continue"
          )
        ),

        success &&
          React.createElement("div", { style: styles.successBox }, success),

        React.createElement(
          "form",
          {
            style: styles.form,
            onSubmit: handleSubmit(onSubmit),
            noValidate: true,
          },

          // Email
          React.createElement(
            "div",
            { style: styles.fieldGroup },
            React.createElement(
              "label",
              { htmlFor: "login-email", style: styles.label },
              "Email Address"
            ),
            React.createElement("input", {
              id: "login-email",
              type: "email",
              placeholder: "Enter your email",
              style: styles.input("email"),
              onFocus: () => setFocusedField("email"),
              onBlur: () => setFocusedField(null),
              ...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email format",
                },
              }),
            }),
            errors.email &&
              React.createElement("p", { style: styles.error }, errors.email.message)
          ),

          // Password
          React.createElement(
            "div",
            { style: styles.fieldGroup },
            React.createElement(
              "label",
              { htmlFor: "login-password", style: styles.label },
              "Password"
            ),
            React.createElement("input", {
              id: "login-password",
              type: "password",
              placeholder: "Enter your password",
              style: styles.input("password"),
              onFocus: () => setFocusedField("password"),
              onBlur: () => setFocusedField(null),
              ...register("password", { required: "Password is required" }),
            }),
            errors.password &&
              React.createElement(
                "p",
                { style: styles.error },
                errors.password.message
              )
          ),

          // Submit CTA
          React.createElement(
            "button",
            {
              type: "submit",
              style: styles.button,
              onMouseEnter: () => setBtnHover(true),
              onMouseLeave: () => setBtnHover(false),
            },
            "Sign In"
          ),

          // Footer Link to Register
          React.createElement(
            "p",
            { style: styles.footer },
            "Don't have an account?",
            React.createElement(
              Link,
              {
                to: "/register",
                style: styles.link,
                onMouseEnter: () => setLinkHover(true),
                onMouseLeave: () => setLinkHover(false),
              },
              "Register"
            )
          )
        )
      )
    )
  );
}

export default Login;