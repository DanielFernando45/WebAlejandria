import React, { useState } from "react";
import { Link } from "react-router-dom";
import menu_icon from "../assets/icons/menu-icon.svg";
import logo from "../assets/images/logo.png";

const LINKS = [
  { id: 1, path: "", title: "Consultoría" },
  { id: 2, path: "", title: "Cursos" },
  { id: 3, path: "/nosotros", title: "Nosotros" },
  { id: 4, path: "/centro-recursos", title: "Centro de recursos" },
  { id: 5, path: "/blog", title: "Blog" },
];

const NavBar = ({ handleOpenSidebar, handleContact }) => {
  const [showOptions, setShowOption] = useState(false);

  const handleOption = () => {
    setShowOption(!showOptions);
  };

  window.addEventListener("resize", () => {
    setShowOption(false);
  });

  window.addEventListener("scroll", () => {
    setShowOption(false);
  });

  return (
    <nav className="absolute z-20 top-[25px] mn:top-[48px] sm:top-[60px] 1xl:top-[45.5px] 4xl:top-[50px] left-1/2 -translate-x-1/2 5xl:h-[50px] 4xl:w-[1568px] 1xl:w-[1287px] w-[90%] mx-auto flex justify-center items-center 1xl:gap-x-[80px] 4xl:gap-x-[135px]">
      <div className="text-white w-[181px] text-center m-0 p-0 flex flex-col items-center">
        <Link to={"/"}>
          <img
            className="w-[181px] h-[50px] 4xl:h-[50px] 4xl:w-[181px] block "
            src={logo}
            alt="logo-empresa"
          />
        </Link>
      </div>

      <ul className="hidden 1xl:flex 1xl:w-[780px] 4xl:w-[880px] justify-center 1xl:gap-x-[25px] 4xl:gap-x-[50px] text-white 1xl:text-[20px] 4xl:text-[25px] font-bold">
        {LINKS.map((link) => (
          <li key={link.id}>
            {link.id == 1 ? (
              <div className="relative">
                <button
                  aria-label="Abrir multiples opciones"
                  onClick={handleOption}
                >
                  {link.title}
                </button>
                <div
                  className={`${
                    showOptions
                      ? "visible opacity-100 mt-4"
                      : "invisible opacity-0 mt-8"
                  } flex-col absolute top-full  transition-all duration-300 bg-white w-[300px] px-8 py-4 rounded-xl`}
                >
                  <Link
                    to={"/tesis"}
                    className="uppercase text-black text-lg block w-full py-1 hover:bg-gray-100"
                  >
                    Tesis
                  </Link>
                  <Link
                    to={"/tsp"}
                    className="uppercase text-black text-lg block w-full py-1 hover:bg-gray-100"
                  >
                    TSP
                  </Link>
                  <Link
                    to={"/articulo-cientifico"}
                    className="uppercase text-black text-lg block w-full py-1 hover:bg-gray-100"
                  >
                    Artículo Científico
                  </Link>
                  <Link
                    to={"/plan-negocio"}
                    className="uppercase text-black text-lg block w-full py-1 hover:bg-gray-100"
                  >
                    Plan de negocio
                  </Link>
                </div>
              </div>
            ) : (
              <Link to={link.path}>{link.title}</Link>
            )}
          </li>
        ))}
      </ul>

      <button
        aria-label="Abrir enlace whatsapp"
        onClick={handleContact}
        className="hidden 1xl:flex hover:bg-black hover:text-white px-2 1xl:w-[220px] 4xl:w-[225px] 1xl:h-[35px] 4xl:h-[40px]  justify-center text-center 1xl:text-[20px] 4xl:text-[25px] font-bold text-white border-2 border-white rounded-2xl items-center"
      >
        Contáctanos
      </button>

      <button
        aria-label="Abrir menú de navegación"
        className="block absolute left-0 1xl:hidden"
        onClick={() => handleOpenSidebar()}
      >
        <img
          src={menu_icon}
          className=" text-white w-[40px] h-[35px] mn:w-[55px] mn:h-[50px] p-2 border-gray-200 rounded-lg"
          alt="menu_icon"
        />
      </button>
    </nav>
  );
};

export default NavBar;
