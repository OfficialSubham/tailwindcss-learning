const Keys = ({ icon, name }: { icon?: React.ReactElement; name?: string }) => {
  return (
    <div
      className="flex relative flex-col border justify-center items-center w-20 h-20 bg-neutral-950 transition-transform duration-300 text-white rounded-xl border-neutral-200/40 hover:scale-95
    shadow-[0_2px_3px_rgba(255,255,255,0.2)_inset,0_-2px_3px_rgba(255,255,255,0.2)_inset,0_8px_10px_rgba(255,255,255,0.8)] hover:shadow-[-5px_5px_10px_rgba(0,0,0,0.5),9px_9px_10px_rgba(0,0,0,0.3),10px_10px_10px_rgba(0,0,0,0.3),-8px_8px_10px_rgba(0,0,0,0.3)]  gap-2"
    >
      <div>{icon}</div>
      {name && <h5>{name}</h5>}
    </div>
  );
};
//hover:shadow-[-5px_5px_10px_rgba(0,118,255,0.5),9px_9px_10px_rgba(0,118,255,0.3),10px_10px_10px_rgba(0,118,255,0.3),-8px_8px_10px_rgba(0,118,255,0.3)] transition-transform duration-300 hover:scale-95
export default Keys;
