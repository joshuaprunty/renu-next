import { Button } from "@/components/ui/button"
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Set initial theme state
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(!isDark);
  }

  return (
    <Button onClick={toggleTheme} className="w-8 h-8">
      {isDark ? (
        <MdOutlineDarkMode className="w-5 h-5" />
      ) : (
        <MdOutlineLightMode className="w-5 h-5" />
      )}
    </Button>
  )
}

export default ThemeToggle;