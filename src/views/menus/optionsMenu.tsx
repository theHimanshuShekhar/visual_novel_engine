import { useNavigate } from "react-router-dom";
import MenuButton from "../../components/menuButton";

enum OptionsType {
  Slider = "slider",
  CheckBox = "checkbox",
}

interface Option {
  name: string;
  type: OptionsType;
}

export default function OptionsMenu() {
  const navigate = useNavigate();
  return (
    <div className="p-4 select-none absolute flex-col items-center justify-between h-full w-full">
      <div className="text-4xl cursor-pointer font-semibold text-center p-2">
        Options Menu
      </div>
      <MenuButton label="Back" handleClick={() => navigate("/main-menu")} />
    </div>
  );
}
