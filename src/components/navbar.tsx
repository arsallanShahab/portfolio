import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
  className?: string;
}

const Navbar: React.FC<Props> = (props) => {
  const pathname = usePathname();
  return (
    <div className="fixed left-0 top-0 z-[900] w-full px-5 py-5 sm:px-10">
      <div
        className={cn(
          "mx-auto flex items-center justify-center rounded-[3rem] bg-black/0 py-3.5 text-white backdrop-blur-lg sm:justify-between sm:px-5",
        )}
      >
        <Link
          href={"/"}
          data-type="link"
          className="interactable cursor-none font-pixelify text-2xl font-extrabold text-white"
        >
          ARSAL(L)AN
        </Link>
        <div className="hidden items-center gap-5 font-roboto-mono sm:flex">
          <Link
            data-type="link"
            className="interactable cursor-none"
            href={"/skills"}
          >
            Skills
          </Link>
          <Link
            data-type="link"
            className="interactable cursor-none"
            href={"/projects"}
          >
            Projects
          </Link>
          <Link
            data-type="link"
            className="interactable cursor-none"
            href={"/blog"}
          >
            Blog
          </Link>
          <Link
            data-type="link"
            className="interactable cursor-none"
            href={"/contact"}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
