import HorizontalLine from "../utils/HorizontalLine";

const HeroImage = () => {
  return (
    <div className="absolute pt-20 mx-auto w-full">
      <HorizontalLine />
      <div className="w-full max-w-4xl mx-auto flex justify-center pt-5 px-10">
      <img src="/hero-ui-v5.webp" className="rounded-xl shadow-md object-cover object-left-top mask-b-from-50% to-100%"/>

      </div>
    </div>
  );
};

export default HeroImage;
