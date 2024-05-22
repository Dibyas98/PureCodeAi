
import { LuHeart } from "react-icons/lu";
import { cn } from "../utils/cn-merge";

const Footer = ({ hideLinks }) => {
  return (
    <footer
      className={cn(
        "absolute w-full border-t border-default-200 p-6 hide-in-print",
        hideLinks ? "lg:ps-64" : "lg:ps-8"
      )}
    >
      <div className={cn("container", hideLinks && "ms-2")}>
        <div className="flex">
          <p className="text-default-600  pl-[13rem]">
            Designed, crafted and coded with{" "}
            <LuHeart size={16} className="inline fill-red-500 text-red-500" />{" "}
            by Coderthemes.com
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
