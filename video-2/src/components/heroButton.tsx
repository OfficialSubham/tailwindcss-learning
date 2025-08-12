import Button from "../utils/Button";

const HeroButton = () => {
  return (
    <div className="flex mx-auto gap-2">
      <Button name="Start free trial" />
      <button className="flex items-center hover:bg-black/5 transition-colors duration-200 font-semibold px-4 py-1 rounded-md">
        Pricing
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
      </button>
    </div>
  );
};

export default HeroButton;
