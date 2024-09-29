import { useState, useEffect, useRef } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    // Função para fechar o menu quando clicar fora
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setToggle(false);
      }
    };

    // Adiciona o event listener para cliques fora
    document.addEventListener("mousedown", handleClickOutside);

    // Remove o event listener ao desmontar o componente
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMenuClick = () => {
    setToggle(!toggle);
  };

  const handleNavItemClick = (navTitle) => {
    setActive(navTitle);
    setToggle(false); // Fecha o menu ao clicar em um item
  };

  return (
    <div className="relative">
      {/* Header fixo com cor de fundo definida */}
      <nav className="fixed top-0 left-0 w-full flex py-6 px-8 justify-between items-center bg-[#04040c] z-50">
        <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />

        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${
                active === nav.title ? "text-white" : "text-dimWhite"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
              onClick={() => handleNavItemClick(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain ml-4" // Adiciona margem à esquerda
            onClick={handleMenuClick}
          />

          <div
            ref={menuRef}
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-black-gradient fixed top-0 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-50`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-dimWhite"
                  } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                  onClick={() => handleNavItemClick(nav.title)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Adiciona padding ao conteúdo principal para evitar sobreposição */}
      <main className="pt-24">{/* Conteúdo da página */}</main>
    </div>
  );
};

export default Navbar;
