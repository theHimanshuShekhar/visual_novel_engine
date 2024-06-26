import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import SplashLogo from "../../assets/splash_screen.png";
import SplashOpeningSFX from "../../assets/Sounds/Sfx/splashScreenSFX.mp3";

export default function SplashScreen() {
  const navigate = useNavigate();

  const playSound = () => {
    const audio = new Audio(SplashOpeningSFX);
    // audio.play();
    const fadeOutInterval = setInterval(() => {
      if (audio.volume > 0.1) {
        audio.volume -= 0.1;
      } else {
        clearInterval(fadeOutInterval);
        audio.pause();
        audio.currentTime = 0;
      }
    }, 450);
  };

  useEffect(() => {
    playSound();
    const timer = setTimeout(() => {
      navigate("/main-menu");
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="grid h-screen place-items-center bg-gradient-to-br from-purple-500 from-10% to-purple-700 to-90%">
      <div
        className="grid place-items-center"
        style={{ gridTemplateRows: "1fr 0.2fr" }}
      >
        <img
          src={SplashLogo}
          className="w-96 animate-pulse rounded-full border-4 bg-purple-900"
          alt=""
        />
      </div>
    </div>
  );
}
