import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [activeCard, setActiveCard] = useState(null);
  const [btnHover, setBtnHover] = useState(false);

  const canvasRef = useRef(null);
  const adCardRef = useRef(null);

  // Load High-End Shopping Fonts
  useEffect(() => {
    const id = "shopkart-home-fonts";
    if (!document.getElementById(id)) {
      const link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  // 3D Background Canvas: Floating Delivery Boxes & Glowing Deals
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
      [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1],
      [-1, -1, 1],  [1, -1, 1],  [1, 1, 1],  [-1, 1, 1],
    ];

    const cubeEdges = [
      [0, 1], [1, 2], [2, 3], [3, 0],
      [4, 5], [5, 6], [6, 7], [7, 4],
      [0, 4], [1, 5], [2, 6], [3, 7],
    ];

    // Floating Delivery Parcels
    const boxes = Array.from({ length: 20 }, () => ({
      x: (Math.random() - 0.5) * window.innerWidth * 1.4,
      y: (Math.random() - 0.5) * window.innerHeight * 1.4,
      z: Math.random() * 800 + 150,
      size: Math.random() * 32 + 18,
      rotX: Math.random() * Math.PI,
      rotY: Math.random() * Math.PI,
      rotZ: Math.random() * Math.PI,
      speedRotX: (Math.random() - 0.5) * 0.014,
      speedRotY: (Math.random() - 0.5) * 0.016,
      speedRotZ: (Math.random() - 0.5) * 0.01,
      vy: -(Math.random() * 0.4 + 0.18),
      vx: (Math.random() - 0.5) * 0.25,
    }));

    // Floating Shopping Tags & Sparks
    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      alpha: Math.random() * 0.6 + 0.2,
      vy: -(Math.random() * 0.4 + 0.15),
      char: Math.random() > 0.5 ? "✦" : "%",
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const fov = 450;

      // Floating Discount Chips
      particles.forEach((p) => {
        p.y += p.vy;
        if (p.y < -20) {
          p.y = canvas.height + 20;
          p.x = Math.random() * canvas.width;
        }
        ctx.font = "12px 'Plus Jakarta Sans', sans-serif";
        ctx.fillStyle = `rgba(226, 232, 240, ${p.alpha * 0.5})`;
        ctx.fillText(p.char, p.x, p.y);
      });

      // 3D Parcels
      boxes.forEach((box) => {
        box.y += box.vy;
        box.x += box.vx;
        box.rotX += box.speedRotX;
        box.rotY += box.speedRotY;
        box.rotZ += box.speedRotZ;

        if (box.y < -canvas.height / 2 - 120) {
          box.y = canvas.height / 2 + 120;
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
        ctx.strokeStyle = "rgba(226, 232, 240, 0.22)";
        ctx.shadowColor = "rgba(56, 189, 248, 0.4)";
        ctx.shadowBlur = 9;

        cubeEdges.forEach(([start, end]) => {
          ctx.beginPath();
          ctx.moveTo(projected[start][0], projected[start][1]);
          ctx.lineTo(projected[end][0], projected[end][1]);
          ctx.stroke();
        });

        // Cross Tape Hologram Line
        ctx.strokeStyle = "rgba(52, 211, 153, 0.3)";
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

  // 3D Parallax Mouse Physics on Hero Ad Card
  const handleMouseMove = (e) => {
    const card = adCardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = -(y / (rect.height / 2)) * 8;
    const rotateY = (x / (rect.width / 2)) * 8;

    card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.015, 1.015, 1.015)`;
  };

  const handleMouseLeave = () => {
    if (!adCardRef.current) return;
    adCardRef.current.style.transform =
      "perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
  };

  // Featured Showcase Products
  const products = [
    {
      id: 1,
      name: "AeroPulse Gen-3 Headset",
      category: "Acoustics & Spatial Audio",
      price: "$349",
      icon: "🎧",
      badge: "Deal of the Day",
    },
    {
      id: 2,
      name: "ChronoSphere Obsidian Watch",
      category: "Horology & Smartwear",
      price: "$780",
      icon: "⌚",
      badge: "Limited Edition",
    },
    {
      id: 3,
      name: "SpectraVision AR Eyewear",
      category: "Vision Computing",
      price: "$599",
      icon: "🕶️",
      badge: "Popular Pick",
    },
  ];

  const styles = {
    viewport: {
      minHeight: "100vh",
      width: "100%",
      backgroundColor: "#06080e",
      backgroundImage: `
        radial-gradient(circle at 50% 12%, rgba(56, 189, 248, 0.08) 0%, transparent 55%),
        radial-gradient(circle at 85% 65%, rgba(99, 102, 241, 0.12) 0%, transparent 50%),
        radial-gradient(circle at 15% 85%, rgba(16, 185, 129, 0.07) 0%, transparent 45%),
        linear-gradient(180deg, #090d16 0%, #04060a 100%)
      `,
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      position: "relative",
      overflowX: "hidden",
      color: "#ffffff",
      paddingBottom: "80px",
    },
    canvas: {
      position: "fixed",
      inset: 0,
      width: "100%",
      height: "100%",
      pointerEvents: "none",
      zIndex: 1,
    },
    contentArea: {
      position: "relative",
      zIndex: 2,
      maxWidth: "1140px",
      margin: "0 auto",
      padding: "36px 20px 30px",
    },
    adWrapper: {
      perspective: "1200px",
      marginBottom: "50px",
    },
    adCard: {
      position: "relative",
      borderRadius: "32px",
      background: "linear-gradient(135deg, rgba(16, 23, 38, 0.78) 0%, rgba(9, 13, 22, 0.88) 100%)",
      backdropFilter: "blur(32px)",
      WebkitBackdropFilter: "blur(32px)",
      border: "1px solid rgba(255, 255, 255, 0.12)",
      boxShadow: `
        0 40px 80px -20px rgba(0, 0, 0, 0.95),
        0 0 1px 1px rgba(255, 255, 255, 0.14),
        inset 0 1px 0 rgba(255, 255, 255, 0.2)
      `,
      padding: "54px 48px",
      display: "grid",
      gridTemplateColumns: "1.2fr 0.8fr",
      gap: "40px",
      alignItems: "center",
      transformStyle: "preserve-3d",
      transition: "transform 0.16s ease-out",
    },
    adBadge: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      padding: "6px 14px",
      borderRadius: "100px",
      background: "rgba(56, 189, 248, 0.1)",
      border: "1px solid rgba(56, 189, 248, 0.3)",
      color: "#38bdf8",
      fontSize: "0.74rem",
      fontWeight: 700,
      letterSpacing: "1.2px",
      textTransform: "uppercase",
      marginBottom: "18px",
    },
    adTitle: {
      fontFamily: "'Outfit', sans-serif",
      fontSize: "2.8rem",
      fontWeight: 800,
      letterSpacing: "-1px",
      lineHeight: 1.12,
      margin: "0 0 16px 0",
      background: "linear-gradient(180deg, #ffffff 40%, #cbd5e1 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    adSubtitle: {
      fontSize: "0.96rem",
      color: "#94a3b8",
      lineHeight: 1.6,
      marginBottom: "30px",
      maxWidth: "460px",
    },
    adActions: {
      display: "flex",
      gap: "16px",
      alignItems: "center",
    },
    primaryBtn: {
      background: btnHover
        ? "linear-gradient(135deg, #ffffff 0%, #cbd5e1 50%, #94a3b8 100%)"
        : "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)",
      border: "none",
      borderRadius: "14px",
      color: "#090d16",
      fontFamily: "'Outfit', sans-serif",
      fontSize: "0.98rem",
      fontWeight: 700,
      padding: "16px 28px",
      cursor: "pointer",
      boxShadow: btnHover
        ? "0 12px 28px rgba(0, 0, 0, 0.7), 0 0 25px rgba(255, 255, 255, 0.3)"
        : "0 8px 20px rgba(0, 0, 0, 0.5), 0 0 15px rgba(255, 255, 255, 0.15)",
      transition: "all 0.25s ease",
      transform: btnHover ? "translateY(-1px)" : "none",
    },
    secondaryLink: {
      color: "#e2e8f0",
      fontSize: "0.92rem",
      fontWeight: 600,
      textDecoration: "none",
      padding: "14px 22px",
      borderRadius: "14px",
      border: "1px solid rgba(255, 255, 255, 0.12)",
      background: "rgba(255, 255, 255, 0.04)",
      transition: "all 0.2s ease",
    },
    ad3DObject: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      height: "280px",
      background: "radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, transparent 70%)",
      borderRadius: "24px",
      border: "1px dashed rgba(255, 255, 255, 0.12)",
      transform: "translateZ(45px)",
      transformStyle: "preserve-3d",
    },
    cubeGraphic: {
      fontSize: "72px",
      filter: "drop-shadow(0 15px 25px rgba(0,0,0,0.8))",
      animation: "floatGraphic 4s ease-in-out infinite alternate",
    },
    promoTag: {
      position: "absolute",
      bottom: "20px",
      padding: "6px 16px",
      borderRadius: "100px",
      background: "rgba(16, 185, 129, 0.15)",
      border: "1px solid rgba(52, 211, 153, 0.4)",
      color: "#6ee7b7",
      fontSize: "0.78rem",
      fontWeight: 700,
      letterSpacing: "0.5px",
    },
    sectionHeading: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: "24px",
    },
    sectionTitle: {
      fontFamily: "'Outfit', sans-serif",
      fontSize: "1.7rem",
      fontWeight: 700,
      color: "#f8fafc",
      margin: 0,
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "24px",
    },
    productCard: (isHovered) => ({
      borderRadius: "24px",
      background: isHovered ? "rgba(18, 25, 42, 0.85)" : "rgba(11, 15, 25, 0.68)",
      backdropFilter: "blur(24px)",
      WebkitBackdropFilter: "blur(24px)",
      border: isHovered
        ? "1px solid rgba(255, 255, 255, 0.25)"
        : "1px solid rgba(255, 255, 255, 0.08)",
      boxShadow: isHovered
        ? "0 25px 50px -10px rgba(0,0,0,0.8), 0 0 20px rgba(56, 189, 248, 0.18)"
        : "0 15px 35px -10px rgba(0,0,0,0.6)",
      padding: "28px",
      display: "flex",
      flexDirection: "column",
      gap: "14px",
      transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
      transform: isHovered ? "translateY(-4px)" : "none",
      cursor: "pointer",
    }),
    productIconArea: {
      height: "120px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "52px",
      background: "rgba(255, 255, 255, 0.03)",
      borderRadius: "16px",
      border: "1px solid rgba(255, 255, 255, 0.05)",
    },
    productBadge: {
      alignSelf: "flex-start",
      padding: "4px 10px",
      borderRadius: "6px",
      background: "rgba(255, 255, 255, 0.06)",
      fontSize: "0.7rem",
      fontWeight: 600,
      color: "#94a3b8",
      textTransform: "uppercase",
      letterSpacing: "0.5px",
    },
    productName: {
      fontSize: "1.1rem",
      fontWeight: 700,
      margin: "0 0 4px 0",
      color: "#f8fafc",
    },
    productCat: {
      fontSize: "0.78rem",
      color: "#64748b",
      margin: 0,
    },
    productFooter: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: "8px",
      paddingTop: "14px",
      borderTop: "1px solid rgba(255, 255, 255, 0.07)",
    },
    productPrice: {
      fontFamily: "'Outfit', sans-serif",
      fontSize: "1.3rem",
      fontWeight: 800,
      color: "#ffffff",
    },
    addBtn: {
      background: "rgba(255, 255, 255, 0.08)",
      border: "1px solid rgba(255, 255, 255, 0.15)",
      color: "#e2e8f0",
      borderRadius: "10px",
      padding: "8px 16px",
      fontSize: "0.82rem",
      fontWeight: 600,
      cursor: "pointer",
      transition: "all 0.2s ease",
    },
  };

  return React.createElement(
    "div",
    { style: styles.viewport },
    React.createElement(
      "style",
      null,
      `
        @keyframes floatGraphic {
          0% { transform: translateY(0px) rotate(0deg); }
          100% { transform: translateY(-16px) rotate(6deg); }
        }
        @media (max-width: 860px) {
          .ad-grid-responsive {
            grid-template-columns: 1fr !important;
            padding: 36px 24px !important;
          }
        }
      `
    ),

    // 3D Canvas Background
    React.createElement("canvas", { ref: canvasRef, style: styles.canvas }),

    React.createElement(
      "div",
      { style: styles.contentArea },

      // 3D Interactive Ad Banner
      React.createElement(
        "div",
        {
          style: styles.adWrapper,
          ref: adCardRef,
          onMouseMove: handleMouseMove,
          onMouseLeave: handleMouseLeave,
        },
        React.createElement(
          "div",
          { style: styles.adCard, className: "ad-grid-responsive" },

          // Ad Left Copy
          React.createElement(
            "div",
            null,
            React.createElement(
              "div",
              { style: styles.adBadge },
              "✦ Limited Season Release"
            ),
            React.createElement(
              "h1",
              { style: styles.adTitle },
              "Precision Crafted. Delivered in 3D."
            ),
            React.createElement(
              "p",
              { style: styles.adSubtitle },
              "Experience the next tier of curated lifestyle technology with zero-latency express dispatch and bespoke packaging."
            ),
            React.createElement(
              "div",
              { style: styles.adActions },
              React.createElement(
                "button",
                {
                  style: styles.primaryBtn,
                  onMouseEnter: () => setBtnHover(true),
                  onMouseLeave: () => setBtnHover(false),
                },
                "Claim 40% Off"
              ),
              React.createElement(
                Link,
                { to: "/register", style: styles.secondaryLink },
                "Join Vault Access"
              )
            )
          ),

          // Ad Right 3D Visual Unit
          React.createElement(
            "div",
            { style: styles.ad3DObject },
            React.createElement("div", { style: styles.cubeGraphic }, "📦"),
            React.createElement(
              "div",
              { style: styles.promoTag },
              "Code: PLATINUM40"
            )
          )
        )
      ),

      // Flagship Catalog Section
      React.createElement(
        "div",
        { style: styles.sectionHeading },
        React.createElement(
          "h2",
          { style: styles.sectionTitle },
          "Featured Collections"
        ),
        React.createElement(
          "span",
          { style: { fontSize: "0.84rem", color: "#64748b" } },
          "Handpicked Daily"
        )
      ),

      // 3-Card Interactive Grid
      React.createElement(
        "div",
        { style: styles.grid },
        products.map((item) =>
          React.createElement(
            "div",
            {
              key: item.id,
              style: styles.productCard(activeCard === item.id),
              onMouseEnter: () => setActiveCard(item.id),
              onMouseLeave: () => setActiveCard(null),
            },
            React.createElement(
              "div",
              { style: styles.productBadge },
              item.badge
            ),
            React.createElement(
              "div",
              { style: styles.productIconArea },
              item.icon
            ),
            React.createElement(
              "div",
              null,
              React.createElement(
                "h3",
                { style: styles.productName },
                item.name
              ),
              React.createElement(
                "p",
                { style: styles.productCat },
                item.category
              )
            ),
            React.createElement(
              "div",
              { style: styles.productFooter },
              React.createElement(
                "span",
                { style: styles.productPrice },
                item.price
              ),
              React.createElement(
                "button",
                { style: styles.addBtn },
                "+ Add"
              )
            )
          )
        )
      )
    )
  );
}

export default Home;