import { useTheme } from "../Features/ThemeProvider";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 mx-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-105 transition "
    >
      {theme === "dark" ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-blue-600" />}
    </button>
  );
};

export default ThemeToggle;
