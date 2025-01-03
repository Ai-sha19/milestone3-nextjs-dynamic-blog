import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Menu } from 'lucide-react';

function Header() {
  return (
    <>
      <header className="py-6 md:px-20 sm:px-10 px-5 flex justify-between items-center bg-white shadow-md">
        <div className="">
          {/* Updated logo name */}
          <h1 className="sm:text-2xl text-xl font-bold italic font-serif text-[#4CAF50]">
            MindCare
          </h1>
          <div className="sm:w-[140px] w-[120px] h-[10px] bg-[#1D2B34] blur-[5px] shadow-[0px_2px_20px_10px_#1D2B34] absolute top-[10px] -z-10 rounded-2xl "></div>
        </div>
        <nav>
          {/* Desktop Navigation */}
          <ul className="md:inline-flex hidden gap-16 text-lg">
            <li>
              <Link className="hover:text-[#4CAF50]" href={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-[#4CAF50]" href={"/blog"}>
                Blogs
              </Link>
            </li>
            <li>
              <Link className="hover:text-[#4CAF50]" href={"/about"}>
                About
              </Link>
            </li>
            <li>
              <Link className="hover:text-[#4CAF50]" href={"/contact"}>
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger className="md:hidden">
              <Menu className="w-[35px] h-[35px] hover:text-[#4CAF50]" />
            </SheetTrigger>
            <SheetContent className="bg-[#4caf50]">
              <ul className="flex flex-col gap-2 items-center mt-5 text-lg text-black">
                <li>
                  <Link className="text-white hover:underline" href={"/"}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="text-white hover:underline" href={"/blog"}>
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link className="text-white hover:underline" href={"/about"}>
                    About
                  </Link>
                </li>
                <li>
                  <Link className="text-white hover:underline" href={"/contact"}>
                    Contact
                  </Link>
                </li>
              </ul>
            </SheetContent>
          </Sheet>
        </nav>
      </header>
    </>
  );
}

export default Header;
