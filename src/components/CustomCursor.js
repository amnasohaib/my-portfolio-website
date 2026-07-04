import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorColor, setCursorColor] = useState("#ffffff");
  const [borderColor, setBorderColor] = useState("#8e9b90");

  useEffect(() => {
  const updateCursorPosition = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });

    let element = document.elementFromPoint(e.clientX, e.clientY);
    let bgColor = "rgba(0, 0, 0, 0)";

    while (element && bgColor === "rgba(0, 0, 0, 0)") {
      bgColor = window.getComputedStyle(element).backgroundColor;
      element = element.parentElement;
    }

    if (bgColor === "rgb(142, 155, 144)") {
      setCursorColor("#ffffff");
      setBorderColor("#8e9b90");
    } else {
      setCursorColor("#8e9b90");
      setBorderColor("#ffffff");
    }
  };

  const handleHover = (e) => {
    if (e.target.closest("a, button, [role='button'], [onClick]")) {
      setIsHovering(true);
    }
  };
  const handleLeave = () => setIsHovering(false);

  window.addEventListener("mousemove", updateCursorPosition);
  window.addEventListener("mouseover", handleHover);
  window.addEventListener("mouseout", handleLeave);

  return () => {
    window.removeEventListener("mousemove", updateCursorPosition);
    window.removeEventListener("mouseover", handleHover);
    window.removeEventListener("mouseout", handleLeave);
  };
}, []);

  return (
    <div
    className={`fixed top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50
    ${isHovering ? "w-10 h-10 opacity-50 border-2" : "w-5 h-5"}
  `}
      style={{
        left: `${cursorPosition.x}px`,
        top: `${cursorPosition.y}px`,
        borderRadius: "50%",
        backgroundColor: cursorColor,
        border: `1px solid ${borderColor}`,
      }}
    ></div>
  );
};

export default CustomCursor;
