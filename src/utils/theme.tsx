import React, { useEffect, useState } from "react";

const Theme = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.body.className = theme;
  });

  return (
    <div className={`theme-${theme}`}>
      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  );
};

export default Theme;
