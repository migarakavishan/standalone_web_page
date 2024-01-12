import logo from "../assets/logo.svg";
import { Link } from "react-scroll";

export const NavBar = () => {
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
      <div>
        <nav className="bg-white shadow-md md:px-14 p-6 mx-auto fixed  right-0 left-0">
          <div className="text-lg container mx-auto flex justify-between items-center font-medium">
            <div className="flex space-x-64 items-center">
              <div>
                <img src={logo} className="w-1/2 inline-block items-center" />
              </div>

              <ul className="hidden md:flex space-x-12 cursor-pointer ">
                {link.map(({ id, link }) => (
                  <li key={id} className="block hover:text-primary">
                    <Link to={link} smooth duration={500}></Link>
                    {link}
                  </li>
                ))}
              </ul>
            </div>

            <div>
                <button>
                    
                </button>
            </div>

          </div>
        </nav>
      </div>
    </>
  );
};
