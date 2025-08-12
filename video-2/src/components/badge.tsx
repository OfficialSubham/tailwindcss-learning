const Badge = () => {
  return (
    <div className="flex mx-auto bg-slate-100 w-fit px-3 py-1 rounded-2xl items-center text-xs gap-2 border-[0.5px] border-slate-200">
      QSBS just got better in July 2025
      <svg width="16" height="16" fill="none">
        <path
          stroke="#1E1F25"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-opacity=".5"
          stroke-width="1.25"
          d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5"
        ></path>
      </svg>
    </div>
  );
};

export default Badge;
