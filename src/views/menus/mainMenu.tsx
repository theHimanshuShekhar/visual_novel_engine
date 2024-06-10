import { exit } from "@tauri-apps/api/process";
import { useNavigate } from "react-router-dom";
import MenuButton from "../../components/menuButton";

export default function MainMenu() {
  const navigate = useNavigate();

  return (
    <div className="flex-col w-screen h-screen justify-center">
      <div className="flex-col justify-evenly absolute p-4  bottom-4 left-4">
        <MenuButton label="New Game" />
        <MenuButton
          label="Saved Games"
          handleClick={() => {
            navigate("/save-menu");
          }}
        />
        <MenuButton
          label="Options"
          handleClick={() => navigate("/options-menu")}
        />
        <MenuButton label="Exit" handleClick={async () => await exit(1)} />
      </div>
    </div>
  );
}
