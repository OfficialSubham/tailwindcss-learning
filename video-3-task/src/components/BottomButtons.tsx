import { Globe } from "lucide-react";

export function FnButton() {
  return (
    <div className="flex flex-col justify-between p-2 w-20 h-20 bg-neutral-950 rounded-xl  border border-b-5 border-neutral-200/65  border-b-neutral-200/50  shadow-[0_2px_3px_rgba(255,255,255,0.2)_inset,0_-2px_3px_rgba(255,255,255,0.2)_inset,0_2px_10px_rgba(255,255,255,0.8)] hover:shadow-[-5px_5px_10px_rgba(0,0,0,0.5),9px_9px_10px_rgba(0,0,0,0.3),10px_10px_10px_rgba(0,0,0,0.3),-8px_8px_10px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:scale-95">
      <div className="w-full text-end text-white">fn</div>
      <div className="text-white">
        <Globe width={18} />
      </div>
    </div>
  );
}

export function SameBottomButton({
  position,
  text,
  icon,
  width,
}: {
  position: string;
  text: string;
  icon: React.ReactElement;
  width?: string;
}) {
  return (
    <div
      style={{
        width: width ? width : "90px",
      }}
      className="flex flex-col px-4 py-2 h-20 bg-neutral-950 rounded-xl border border-b-5 border-neutral-200/65  border-b-neutral-200/50  shadow-[0_2px_3px_rgba(255,255,255,0.2)_inset,0_-2px_3px_rgba(255,255,255,0.2)_inset,0_2px_10px_rgba(255,255,255,0.8)] gap-2 hover:shadow-[-5px_5px_10px_rgba(0,0,0,0.5),9px_9px_10px_rgba(0,0,0,0.3),10px_10px_10px_rgba(0,0,0,0.3),-8px_8px_10px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:scale-95"
    >
      <div
        className={`w-full flex ${position == "left" ? "justify-start" : "justify-end"} text-4xl text-white`}
      >
        {icon}
      </div>
      <div className="text-white mx-auto">{text}</div>
    </div>
  );
}

export function SpaceButton() {
  return (
    <div className="flex flex-col px-4 py-2 w-[430px] h-20 bg-neutral-950 rounded-xl border border-b-5 border-neutral-200/65  border-b-neutral-200/50 shadow-[0_2px_3px_rgba(255,255,255,0.2)_inset,0_-2px_3px_rgba(255,255,255,0.2)_inset,0_2px_10px_rgba(255,255,255,0.8)] gap-2 hover:shadow-[-5px_5px_10px_rgba(0,0,0,0.5),9px_9px_10px_rgba(0,0,0,0.3),10px_10px_10px_rgba(0,0,0,0.3),-8px_8px_10px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:scale-95"></div>
  );
}
