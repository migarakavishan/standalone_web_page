import logo from "../assets/logo.svg";
import { Link } from "react-scroll";
import { FaBars, FaXmark } from "react-icons/fa6";
import { useState } from "react";

export const NavBar = () => {
  const [nav, setNav] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const link = [
    {
      id: 1,
      link: "Product",
    },
    {
      id: 2,
      link: "Case Studies",
    },
    {
      id: 3,
      link: "Pricing",
    },
    {
      id: 4,
      link: "Contact",
    },
  ];

  return (
    <>
      <nav className="bg-white shadow-md p-6 mx-auto fixed  right-0 left-0 md:px-14">
        <div className="text-lg container mx-auto flex justify-between items-center font-medium">
          <div className="flex space-x-96 justify-between items-center">
            <div>
              <img src={logo} className="w-full items-center sm:w-1/2" />
            </div>

            <div className="justify-between items-center flex mx-auto space-x-12">
              <ul className="px-20 hidden md:flex space-x-12 cursor-pointer ">
                {link.map(({ id, link }) => (
                  <li key={id} className="block hover:text-primary">
                    <Link to={link} smooth duration={500}></Link>
                    {link}
                  </li>
                ))}
              </ul>
              <div className="hidden md:flex items-center">
                <button className="text-white bg-black py-2 px-6 rounded-lg transition-all duration-300 hover:bg-primary">
                  Get Started
                </button>
              </div>

              <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 md:hidden flex justify-between">
                {nav ? <FaXmark size={30}/> : <FaBars size={30}/>}
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div>
        {nav && (<ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen">
          {link.map(({id, link}) => (
            <li key={id} className="px-4 cursor-pointer py-6 text-3xl">
              <Link onClick={() => setNav(!nav)}
              to={link}
              smooth duration={500}
              >
              {link}
              </Link>
            </li>
          ))}
        </ul>
        )}
      </div>
    </>
  );
};
