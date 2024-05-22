import { useState } from "react";
import germanyImg from "../../../../assets/flags/germany.jpg";
import italyImg from "../../../../assets/flags/italy.jpg";
import russiaImg from "../../../../assets/flags/russia.jpg";
import spainImg from "../../../../assets/flags/spain.jpg";
import { LuGlobe } from "react-icons/lu";

const languages = [
  {
    name: "German",
    image: germanyImg,
  },
  {
    name: "Italian",
    image: italyImg,
  },
  {
    name: "Spanish",
    image: spainImg,
  },
  {
    name: "Russian",
    image: russiaImg,
  },
];

const LanguageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hs-dropdown relative inline-flex [--placement:bottom-right]">
      <button
        id="hs-dropdown-with-header"
        type="button"
        className="hs-dropdown-toggle inline-flex h-10 w-10 flex-shrink-0 items-center justify-center gap-2 rounded-full bg-default-100 align-middle text-xs font-medium text-default-700 transition-all hover:text-primary"
        onClick={toggleDropdown}
      >
        <LuGlobe size={24} />
      </button>
      <div className={`hs-dropdown-menu duration mt-2 ${isOpen ? 'opacity-100' : 'opacity-0 hidden'} min-w-[12rem] rounded-lg border border-default-200 bg-white p-2 shadow-md transition-opacity dark:bg-default-50`}>
        {languages.map((language) => (
          <button
            key={language.name}
            className="flex w-full items-center gap-x-3.5 rounded px-3 py-2 text-sm transition-all hover:bg-default-100"
          >
            <img
              src={language.image}
              width={24}
              height={16}
              alt="user-image"
              className="h-4"
            />
            <span className="align-middle">{language.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageDropdown;
