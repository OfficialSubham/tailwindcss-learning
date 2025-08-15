import {
  Ampersand,
  Asterisk,
  AtSign,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Command,
  DollarSign,
  Hash,
  Mic,
  Minus,
  Moon,
  Option,
  PanelsTopLeft,
  Percent,
  Play,
  Plus,
  Search,
  SkipBack,
  SkipForward,
  SunDim,
  SunMedium,
  Volume1,
  Volume2,
  VolumeX,
} from "lucide-react";
import Keys from "./Keys";
import UniversalButton from "./UniversalButton";
import { FnButton, SameBottomButton, SpaceButton } from "./BottomButtons";
import { useEffect, useRef, useState } from "react";

const Keyboard = () => {
  const row1 = [
    { icon: <SunMedium />, key: "F1" },
    { icon: <SunDim />, key: "F2" },
    { icon: <PanelsTopLeft />, key: "F3" },
    { icon: <Search />, key: "F4" },
    { icon: <Mic />, key: "F5" },
    { icon: <Moon />, key: "F6" },
    { icon: <SkipBack />, key: "F7" },
    { icon: <Play />, key: "F8" },
    { icon: <SkipForward />, key: "F9" },
    { icon: <VolumeX />, key: "F10" },
    { icon: <Volume1 />, key: "F11" },
    { icon: <Volume2 />, key: "F12" },

    {
      icon: (
        <div className="bg-black relative inset-0 w-[45px] h-[45px] rounded-full shadow-[0.1px_0.1px_4px_rgb(255,255,255)_inset]"></div>
      ),
    },
  ];

  const row2 = [
    { icon: <div>~</div>, key: "-" },
    { icon: <div>|</div>, key: "|" },
    { icon: <AtSign />, key: "2" },
    { icon: <Hash />, key: "3" },
    { icon: <DollarSign />, key: "4" },
    { icon: <Percent />, key: "5" },
    { icon: <ChevronUp />, key: "6" },
    { icon: <Ampersand />, key: "7" },
    { icon: <Asterisk />, key: "8" },
    { icon: <div>(</div>, key: "9" },
    { icon: <div>)</div>, key: "10" },
    { icon: <Minus />, key: "-" },
    { icon: <Plus />, key: "=" },
  ];

  const row3 = [
    { key: "Q" },
    { key: "W" },
    { key: "E" },
    { key: "R" },
    { key: "T" },
    { key: "Y" },
    { key: "U" },
    { key: "I" },
    { key: "O" },
    { key: "P" },
    { icon: <div>{"{"}</div>, key: "[" },
    { icon: <div></div>, key: "]" },
    { icon: <div>|</div>, key: "\\" },
  ];

  const row4 = [
    { key: "A" },
    { key: "S" },
    { key: "D" },
    { key: "F" },
    { key: "G" },
    { key: "H" },
    { key: "J" },
    { key: "K" },
    { key: "L" },
    { icon: <div>{":"}</div>, key: ";" },
    { icon: <div>"</div>, key: "'" },
  ];

  const row5 = [
    { key: "Z" },
    { key: "X" },
    { key: "C" },
    { key: "V" },
    { key: "B" },
    { key: "N" },
    { key: "M" },
    { icon: <div>{"<"}</div>, key: "," },
    { icon: <div>{">"}</div>, key: "." },
    { icon: <div>{"?"}</div>, key: "/" },
  ];

  const cmdButton = useRef<HTMLDivElement | null>(null);
  const cButton = useRef<HTMLDivElement | null>(null);
  const vButton = useRef<HTMLDivElement | null>(null);

  const [copy, setCopy] = useState(true);
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (copy) {
        cmdButton.current?.classList.add("hovered");
        cButton.current?.classList.add("hovered");
        setTimeout(() => {
          cmdButton.current?.classList.remove("hovered");
          cButton.current?.classList.remove("hovered");
        }, 2000);
        setCopy((cp) => !cp);
      } else {
        cmdButton.current?.classList.add("hovered");
        vButton.current?.classList.add("hovered");
        setTimeout(() => {
          cmdButton.current?.classList.remove("hovered");
          vButton.current?.classList.remove("hovered");
        }, 2000);
        setCopy((cp) => !cp);
      }
    }, 3000);
    return () => clearInterval(intervalId);
  }, [copy]);

  return (
    <div className="h-4xl flex flex-col gap-2 rounded-xl bg-neutral-500 px-2 pt-2 pb-3">
      <div className="flex gap-2">
        <UniversalButton name="esc" position="left" />
        {row1.map((rw) => {
          return <Keys key={rw.key} icon={rw.icon} name={rw.key} />;
        })}
      </div>
      <div className="flex gap-2">
        {row2.map((rw) => {
          return <Keys key={rw.key} icon={rw.icon} name={rw.key} />;
        })}
        <UniversalButton name="esc" position="left" />
      </div>
      <div className="flex gap-2 relative">
        <UniversalButton name="tab" position="left" />
        {row3.map((rw) => {
          return <Keys key={rw.key} icon={rw.icon} name={rw.key} />;
        })}
      </div>
      <div className="flex gap-2">
        <UniversalButton name="caps lock" position="left" width="163px" />
        {row4.map((rw) => {
          return <Keys key={rw.key} icon={rw.icon} name={rw.key} />;
        })}
        <UniversalButton name="return" position="right" width="163px" />
      </div>
      <div className="flex gap-2">
        <UniversalButton name="caps lock" position="left" width="206px" />
        {row5.map((rw) => {
          if (rw.key == "C" || rw.key == "V") {
            return (
              <div
                ref={rw.key == "C" ? cButton : vButton}
                className="flex flex-col border justify-center items-center w-20 h-20 bg-neutral-950 text-white rounded-xl border-neutral-200/65 
              hover:shadow-[2px_-2px_10px_rgba(0,118,255,0.7),-4px_7px_10px_rgba(0,118,255,0.3),6px_-2px_10px_rgba(0,118,255,0.3),-4px_6px_10px_rgba(0,118,255,0.3),4px_8px_8px_rgba(0,118,255,0.6),-4px_-2px_10px_rgba(0,118,255,1)] 
              transition-transform duration-300 hover:scale-110  gap-2"
              >
                <h5>{rw.key}</h5>
              </div>
            );
          }
          return <Keys key={rw.key} icon={rw.icon} name={rw.key} />;
        })}
        <UniversalButton name="return" position="right" width="206px" />
      </div>
      <div className="flex gap-2">
        <FnButton />
        <SameBottomButton
          icon={<ChevronUp />}
          position="right"
          text="control"
        />
        <SameBottomButton
          icon={<Option width={15} />}
          position="right"
          text="option"
        />
        <div
          ref={cmdButton}
          className="flex flex-col px-4 w-[100px] py-2 h-20 bg-neutral-950 rounded-xl border border-b-5 border-neutral-200/65 border-b-neutral-200/65 gap-2 hover:shadow-[2px_-2px_10px_rgba(0,118,255,0.7),-4px_7px_10px_rgba(0,118,255,0.3),6px_-2px_10px_rgba(0,118,255,0.3),-4px_6px_10px_rgba(0,118,255,0.3),4px_8px_8px_rgba(0,118,255,0.6),-4px_-2px_10px_rgba(0,118,255,1)] 
              transition-transform duration-300 hover:scale-110 "
        >
          <div className={`w-full flex justify-end text-4xl text-white`}>
            <Command width={15} />
          </div>
          <div className="text-white">command</div>
        </div>

        <SpaceButton />

        <SameBottomButton
          icon={<Command width={15} />}
          position="left"
          text="command"
          width="100px"
        />
        <SameBottomButton
          icon={<Option width={15} />}
          position="left"
          text="option"
        />
        <div className="flex-1">
          <div className="w-full flex justify-center">
            {" "}
            <div className="flex flex-col border justify-center items-center w-22 h-10 bg-neutral-950 text-white rounded-xl border-neutral-200/65 shadow-[0_2px_3px_rgba(255,255,255,0.2)_inset,0_-2px_3px_rgba(255,255,255,0.2)_inset,0_8px_10px_rgba(255,255,255,0.8)] gap-2 hover:shadow-[-5px_5px_10px_rgba(0,0,0,0.5),9px_9px_10px_rgba(0,0,0,0.3),10px_10px_10px_rgba(0,0,0,0.3),-8px_8px_10px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:scale-95 ">
              <ChevronUp />
            </div>
          </div>
          <div className="flex justify-center">
            {" "}
            <div className="flex flex-col border justify-center items-center w-22 h-10 bg-neutral-950 text-white rounded-xl border-neutral-200/65 shadow-[0_2px_3px_rgba(255,255,255,0.2)_inset,0_-2px_3px_rgba(255,255,255,0.2)_inset,0_8px_10px_rgba(255,255,255,0.8)] gap-2 hover:shadow-[-5px_5px_10px_rgba(0,0,0,0.5),9px_9px_10px_rgba(0,0,0,0.3),10px_10px_10px_rgba(0,0,0,0.3),-8px_8px_10px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:scale-95">
              <ChevronLeft />
            </div>
            <div className="flex flex-col border justify-center items-center w-22 h-10 bg-neutral-950 text-white rounded-xl border-neutral-200/65 shadow-[0_2px_3px_rgba(255,255,255,0.2)_inset,0_-2px_3px_rgba(255,255,255,0.2)_inset,0_8px_10px_rgba(255,255,255,0.8)] gap-2 hover:shadow-[-5px_5px_10px_rgba(0,0,0,0.5),9px_9px_10px_rgba(0,0,0,0.3),10px_10px_10px_rgba(0,0,0,0.3),-8px_8px_10px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:scale-95">
              <ChevronDown />
            </div>
            <div className="flex flex-col border justify-center items-center w-22 h-10 bg-neutral-950 text-white rounded-xl border-neutral-200/65 shadow-[0_2px_3px_rgba(255,255,255,0.2)_inset,0_-2px_3px_rgba(255,255,255,0.2)_inset,0_8px_10px_rgba(255,255,255,0.8)] gap-2 hover:shadow-[-5px_5px_10px_rgba(0,0,0,0.5),9px_9px_10px_rgba(0,0,0,0.3),10px_10px_10px_rgba(0,0,0,0.3),-8px_8px_10px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:scale-95">
              <ChevronRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
