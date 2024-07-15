import { Link } from "react-router-dom";
import { BannerTop } from "./BannerTop";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import useAuthStore from "../store/authStore";

export function Navbar() {
  const { isAuthenticated } = useAuthStore((state) => state);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setIsScrolled(position > window.innerHeight - 120);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 text-sm text-center w-full transition-all border-b border-transparent flex flex-col items-center justify-start z-50",
        isScrolled
          ? "bg-white text-green-600 shadow border-gray-100"
          : "bg-transparent text-white/80"
      )}
    >
      <BannerTop />
      <nav className="flex w-full py-2 items-center flex-row justify-center px-2">
        <div className="flex w-full justify-between max-w-6xl">
          <div className="">
            <img
              src="/logo.png"
              alt="logo"
              className="w-22 h-6 md:w-28 md:h-10 lg:w-36 lg:h-14"
            />
          </div>
          <ul className="flex mt-1 text flex-row gap-4 items-center justify-center font-medium text-md">
            {isAuthenticated ? (
              <>
                <li>
                  <Link to="/dashboard" className="hover:text-green-600 transition-colors text-lg">
                    Dashboard
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/auth/login" className="hover:text-green-600 transition-colors text-lg">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/auth/register" className="hover:text-green-600 transition-colors text-lg">
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
}
