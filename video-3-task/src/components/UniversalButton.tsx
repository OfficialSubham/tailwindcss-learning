const UniversalButton = ({
  name,
  position,
  width,
}: {
  name: string;
  position?: string;
  width?: string;
}) => {
  return (
    <div
      style={{
        width: width ? width : "160px",
      }}
      className={`rounded-xl border text-white border-neutral-200/65 shadow-[0_2px_3px_rgba(255,255,255,0.2)_inset,0_-2px_3px_rgba(255,255,255,0.2)_inset,0_8px_10px_rgba(255,255,255,0.8)] bg-neutral-950 flex items-end px-4 py-2 ${position == "left" ? "justify-start" : "justify-end"} hover:shadow-[-5px_5px_10px_rgba(0,0,0,0.5),9px_9px_10px_rgba(0,0,0,0.3),10px_10px_10px_rgba(0,0,0,0.3),-8px_8px_10px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:scale-95`}
    >
      {name}
    </div>
  );
};

export default UniversalButton;
