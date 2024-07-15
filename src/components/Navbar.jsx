import { Wrapper } from "./ui/Wrapper";
import User from "../components/User";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCartQuery } from "../hooks/query/useCart";
import { useCategory } from "../hooks/query/useCategory";
import { Logo } from "./ui/Logo";

const Navbar = () => {
  const navigate = useNavigate();
  const [expandMobile, setExpandMobile] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const value = e.target?.search?.value;
    if (!value) return;
    navigate(`/search?s=${value}`);
  };

  return (
    <Wrapper className="py-4 relative">
      {/* Mobile Navbar */}
      <nav className="lg:hidden">
        <div className="flex items-center justify-between mb-4">
          <button onClick={() => setExpandMobile(!expandMobile)}>
            <Icon icon="charm:menu-hamburger" style={{ fontSize: 24 }} />
          </button>
          <Logo />
          <div className="flex items-center gap-4">
            <CartButton />
            <Link to="/account">
              <Icon icon="mdi:account" style={{ fontSize: 24 }} />
            </Link>
          </div>
        </div>
        <form onSubmit={onSubmit} className="relative">
          <input
            id="search"
            type="text"
            placeholder="Search For Item"
            className="w-full px-4 py-2 rounded-full    outline-none bg-app-ash"
          />
          <button
            aria-label="search for product"
            className="absolute right-3 top-1/2 -translate-y-1/2"
            type="submit"
          >
            <Icon icon="mynaui:search" style={{ fontSize: 20 }} />
          </button>
        </form>
      </nav>

      {/* Desktop Navbar */}
      <nav className="hidden lg:flex items-center justify-between gap-x-4">
        <Logo />
        
        <div className="flex items-center gap-4 font-semibold">
          <CategoryDropdown />
          <Link to="/new">What's New</Link>
          <Link to="/deals">Deals</Link>
        </div>

        <form onSubmit={onSubmit} className="flex-grow max-w-md relative">
          <input
            id="search"
            type="text"
            placeholder="search product"
            className="w-full px-6 py-2 rounded-full    outline-none bg-app-ash"
          />
          <button
            aria-label="search for product"
            className="absolute right-3 top-1/2 -translate-y-1/2"
            type="submit"
          >
            <Icon icon="mynaui:search" style={{ fontSize: 20 }} />
          </button>
        </form>

        <div className="flex items-center gap-4 font-semibold">
          <Link to="/account" className="flex gap-2 items-center">
            <Icon icon="mdi:account" style={{ fontSize: 24 }} /> Account
          </Link>
          <span className="flex gap-2 items-center">
            <CartButton /> Cart
            </span>
        </div>
      </nav>
      
      {expandMobile && <MobileMenu toggle={() => setExpandMobile(false)} />}
    </Wrapper>
  );
};
export default Navbar;

const CategoryDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <button 
        className="flex items-center gap-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        Categories <Icon icon="mdi:chevron-down" />
      </button>
      {isOpen && <DesktopCategoryDropdown />}
    </div>
  );
};

const MobileMenu = ({ toggle }) => {
  const { categories, status } = useCategory();
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white z-50 overflow-y-auto">
      <Wrapper>
        <div className="flex justify-between items-center py-4">
          <Logo />
          <button onClick={toggle}>
            <Icon icon="uil:times" style={{ fontSize: 24 }} />
          </button>
        </div>
        {status === "pending" ? (
          "Loading..."
        ) : status === "error" ? (
          "An error has occurred"
        ) : (
          <ul>
            {categories.map(({ name }, index) => (
              <li key={index}>
                <Link
                  to={`/categories/${encodeURIComponent(name)}`}
                  className="block py-2"
                  onClick={toggle}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </Wrapper>
    </div>
  );
};

const DesktopCategoryDropdown = () => {
  const { categories, status } = useCategory();
  return (
    <div className="absolute z-50 bg-white shadow-md rounded-md mt-2">
      {status === "pending" ? (
        "Loading..."
      ) : status === "error" ? (
        "An error has occurred"
      ) : (
        <ul>
          {categories.map(({ name }, index) => (
            <li key={index}>
              <Link
                to={`/categories/${encodeURIComponent(name)}`}
                className="block px-4 py-2 hover:bg-gray-100"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const CartButton = () => {
  const { data, status } = useCartQuery();
  return (
    <Link to="/cart" className="relative p-2">
      <Icon icon="mdi:cart" style={{ fontSize: 25, }} />
      {status === "success" && (
        <p className="absolute grid w-4 h-4 text-xs font-bold leading-none text-white rounded-full bg-app-red place-items-center top-1 right-1">
          {data?.items?.length ?? 0}
        </p>
      )}
    </Link>
  );
};
