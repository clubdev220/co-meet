import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import Navbarmobile from "./Navbarmobile";

const Navbar = () => {
  return (
    <nav className=" flex flex-between fixed z-50 w-full bg-dark-1 p-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image src="/icons/PNG-03.png" width={32} height={32} alt="Logo" />
        <p className="text-[32px] font-extrabold text-orange-1 max-sm:hidden">
          CO Meet
        </p>
      </Link>

      <div className="flex-between gap-5">
        {/** implementation de user management ici */}
        <SignedIn>
          <UserButton />
        </SignedIn>

        <Navbarmobile />
      </div>
    </nav>
  );
};

export default Navbar;
