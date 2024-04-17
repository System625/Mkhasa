import { useState } from "react";
import { Logout } from "./Logout";
import { useAuth } from "../hooks/utils/useAuth";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import { Button } from "./ui/Button";

export const User = () => {
  const { user } = useAuth();
  const { pathname } = useLocation();
  const [expand, setExpand] = useState(false);
  const hideList = ["login"];
  const toggle = () => {
    !hideList.some((x) => pathname.includes(x)) && setExpand((v) => !v);
  };

  return (
    <div className="relative">
      <Button
        className="px-0 text-nowrap md:px-5 md:bg-app-ash"
        onClick={toggle}
        aria-label="Profile drop down"
      >
        <div className="flex items-center md:gap-4">
          <Icon icon="lucide:user" style={{ fontSize: 32 }} />
          <p className="leading-none mx-2 hidden min-[512px]:block">
            My Account
          </p>
          <Icon
            icon="fa6-solid:angle-down"
            vFlip={expand}
            style={{ fontSize: 32 }}
            className="hidden text-app-black min-[512px]:block"
          />
        </div>
      </Button>
      {!hideList.some((x) => pathname.includes(x)) && (
        <div
          className={`absolute min-w-full right-0 pb-6 pt-3 bg-white px-4 rounded-md shadow-lg top-[calc(100%+1.5rem)] z-50 ${
            expand ? "" : "hidden"
          }`}
        >
          {user ? (
            <>
              <h2 className="pb-4 text-xl font-bold tracking-tight capitalize font-fuzzy">
                {user?.username}
              </h2>
              <p className="pb-4 text-app-ash-2">{user?.email}</p>
              {!pathname
                .slice(pathname.lastIndexOf("/"))
                .includes("/account") && (
                <Link
                  to="/account"
                  className="inline-block py-4"
                  onClick={() => setExpand(false)}
                >
                  My Account
                </Link>
              )}
              <Logout toggle={toggle} />
            </>
          ) : (
            <Link to="/login">
              <Button
                className="w-full font-bold text-app-red bg-app-ash text-nowrap"
                onClick={toggle}
              >
                Login
              </Button>
            </Link>
          )}
        </div>
      )}
    </div>
  );
};
