import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainMenu from "./views/menus/mainMenu";
import SplashScreen from "./views/scenes/splashScreen";
import SaveMenu from "./views/menus/saveMenu";
import OptionsMenu from "./views/menus/optionsMenu";

export default function App() {
  return (
    <div className="w-screen h-screen bg-gradient-to-br text-white from-purple-500 from-10% to-purple-700 to-90%">
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/main-menu" element={<MainMenu />} />
        <Route path="/save-menu" element={<SaveMenu />} />
        <Route path="/options-menu" element={<OptionsMenu />} />
      </Routes>
    </div>
  );
}
