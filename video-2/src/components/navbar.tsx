import Button from "../utils/Button";

const Navbar = () => {
  const links = [
    {
      title: "Founders",
      url: "#",
    },
    {
      title: "Guide",
      url: "#",
    },
    {
      title: "Pricing",
      url: "#",
    },
    {
      title: "Log in",
      url: "#",
    },
  ];
  return (
    <div className="flex justify-between px-3 pt-3 items-center w-full sticky top-0 pb-20">
      <div>
        <img src="/logo.svg" />
      </div>

      <div className="flex gap-5 items-center">
        {links.map((link) => {
          return (
            <a
              className="text-sm hover:text-gray-500 transition-colors duration-300"
              href={link.url}
              key={link.title}
            >
              {link.title}
            </a>
          );
        })}
        <Button name="Start free trial"/>
      </div>
    </div>
  );
};

export default Navbar;
