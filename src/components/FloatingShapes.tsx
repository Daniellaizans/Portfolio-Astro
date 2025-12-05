import React from 'react';

const FloatingShapes = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const experienciaSection = document.getElementById('experiencia');
      if (experienciaSection) {
        const rect = experienciaSection.getBoundingClientRect();
        // Show when the top of the section is near the viewport top or visible
        if (rect.top <= window.innerHeight * 0.8) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const shapes = [
    { top: "10%", left: "10%", delay: "0s", color: "primary", size: "80px", animation: "floating" },
    { top: "20%", right: "15%", delay: "1s", color: "muted", size: "60px", animation: "floating-delayed" },
    { top: "60%", left: "5%", delay: "2s", color: "primary", size: "100px", animation: "floating-reverse" },
    { top: "70%", right: "10%", delay: "1.5s", color: "muted", size: "70px", animation: "floating" },
    { top: "40%", left: "20%", delay: "0.5s", color: "muted", size: "50px", animation: "floating-delayed" },
    { top: "80%", left: "40%", delay: "2.5s", color: "primary", size: "90px", animation: "floating-reverse" },
    { top: "15%", right: "30%", delay: "3s", color: "muted", size: "65px", animation: "floating" },
    { top: "50%", right: "5%", delay: "1s", color: "primary", size: "75px", animation: "floating-delayed" },
  ];

  const trexPositions = [
    { top: "25%", left: "45%", delay: "1.5s", size: "120px", rotation: "15deg" },
    { top: "55%", right: "25%", delay: "2.5s", size: "100px", rotation: "-10deg" },
    { top: "85%", left: "15%", delay: "0.5s", size: "90px", rotation: "25deg" },
  ];

  return (
    <div className={`fixed inset-0 pointer-events-none overflow-hidden z-0 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {shapes.map((shape, index) => (
        <div
          key={index}
          className={`absolute ${shape.animation}`}
          style={{
            top: shape.top,
            left: shape.left,
            right: shape.right,
            width: shape.size,
            height: shape.size,
            animationDelay: shape.delay,
          }}
        >
          {/* Leaf shape */}
          <svg viewBox="0 0 100 100" className={`w-full h-full ${shape.color === "primary" ? "opacity-20" : "opacity-10"}`}>
            <ellipse
              cx="50"
              cy="50"
              rx="30"
              ry="50"
              fill={shape.color === "primary" ? "#ebeb33" : "#282c34"}
              transform="rotate(45 50 50)"
            />
            <ellipse
              cx="50"
              cy="50"
              rx="30"
              ry="50"
              fill={shape.color === "primary" ? "#ebeb33" : "#282c34"}
              transform="rotate(-45 50 50)"
            />
          </svg>
        </div>
      ))}

      {/* T-Rex images floating */}
      {trexPositions.map((trex, index) => (
        <div
          key={`trex-${index}`}
          className="absolute floating-delayed opacity-30"
          style={{
            top: trex.top,
            left: trex.left,
            right: trex.right,
            width: trex.size,
            height: trex.size,
            animationDelay: trex.delay,
            transform: `rotate(${trex.rotation})`,
          }}
        >
          <img
            src="img/trex.png"
            alt="T-Rex decoration"
            className="w-full h-full object-contain drop-shadow-lg"
          />
        </div>
      ))}

      {/* Code snippets floating */}
      <div className="absolute top-1/4 right-1/4 opacity-5 text-xs font-mono text-[#ebeb33] floating">
        <pre>{`<div className="hero">\n  <h1>Hello World</h1>\n</div>`}</pre>
      </div>

      <div className="absolute bottom-1/4 left-1/4 opacity-5 text-xs font-mono text-[#4bcebe] floating-delayed">
        <pre>{`const dev = () => {\n  return magic;\n}`}</pre>
      </div>
    </div>
  );
};

export default FloatingShapes;