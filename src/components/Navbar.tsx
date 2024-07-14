import { Link } from "react-router-dom";
import { BannerTop } from "./BannerTop";

/* TODO add navigate */
export function Navbar() {
  return (
    <header
      className="fixed top-0 text-sm text-center w-full flex flex-col
    items-center justify-start text-white z-50"
    >
      {/* TODO El escenario de fondo tiene que cambiar */}
      <BannerTop />
      <nav className="flex w-full bg-transparent py-1.5 items-center flex-row justify-center">
        <div className="flex w-full justify-between max-w-6xl text-black">
          <div className="border border-red-500">
            <img
              src="/logo.png"
              alt="logo"
              className="w-22 h-8 md:w-28 md:h-10 lg:w-36 lg:h-14"
            />
          </div>
          <ul className="flex border border-red-500 flex-row gap-4 items-center justify-center font-medium text-lg">
            <li className="hover:text-gray-100">
              <Link to="/">HOME</Link>
            </li>
            <li className="hover:text-gray-100">
              <Link to="/about">ABOUT</Link>
            </li>
            <li className="hover:text-gray-100">
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
