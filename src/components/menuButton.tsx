export default function MenuButton(props: {
  label: string;
  handleClick?: any;
}) {
  return (
    <div
      className="font-semibold text-2xl cursor-pointer select-none p-1 hover:scale-y-105 hover:font-bold"
      onClick={props.handleClick ? props.handleClick : () => {}}
    >
      {props.label}
    </div>
  );
}
