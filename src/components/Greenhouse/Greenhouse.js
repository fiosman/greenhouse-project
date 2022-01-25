import dayImage from "./images/greenhouse-day.jpg";
import nightImage from "./images/greenhouse-night.jpg";
import "./Greenhouse.css";
import LightSwitch from "./LightSwitch";
import ClimateStats from "./ClimateStats";
import { useTheme } from "../../context/ThemeContext";

function Greenhouse() {
  const { themeName, setThemeName } = useTheme();

  return (
    <section>
      <img
        className="greenhouse-img"
        src={themeName === "night" ? nightImage : dayImage}
        alt="greenhouse"
      />
      <LightSwitch />
      <ClimateStats />
    </section>
  );
}

export default Greenhouse;
