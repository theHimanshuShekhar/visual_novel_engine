import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainMenu from "./views/scenes/mainMenu";
import SplashScreen from "./views/scenes/splashScreen";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />
      <Route path="/main-menu" element={<MainMenu />} />
    </Routes>
  );
}
