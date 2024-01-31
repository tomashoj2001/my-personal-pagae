import { useContext } from "react";
import sun from "@/Assets/sun.svg";
import moon from "@/Assets/moon.svg";
import ThemeContext from "@/context/ThemeContext";
import "./DarkButton.css";

export default function DarkButton() {
  const { mode, setMode } = useContext(ThemeContext);

  return (
    <div
      className="dark-mode-btn"
      onClick={() => setMode(mode === "light" ? "dark" : "light")}
    >
      <button>
        <img src={mode === "light" ? sun : moon} alt="mode" />
      </button>
    </div>
  );
}
