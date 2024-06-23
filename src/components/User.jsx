// import { forwardRef, useRef, useEffect,useState} from "react";
// import { Logout } from "./Logout";
// import { useAuth } from "../hooks/utils/useAuth";
// import { Link, useLocation } from "react-router-dom";
// import { Icon } from "@iconify/react";
// import { Button } from "./ui/Button";

// const User = forwardRef((props, ref) => {
//   const { user } = useAuth();
//   const { pathname } = useLocation();
//   const [expand, setExpand] = useState(false);
//   const hideList = ["login"];
//   const userRef = useRef();

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (userRef.current && !userRef.current.contains(event.target)) {
//         setExpand(false);
//       }
//     };

//     document.addEventListener("click", handleClickOutside);

//     return () => {
//       document.removeEventListener("click", handleClickOutside);
//     };
//   }, []);

//   const toggle = () => {
//     !hideList.some((x) => pathname.includes(x)) && setExpand((v) => !v);
//   };

//   return (
//     <div ref={ref}>
//       <Button
//         className="px-0 text-nowrap md:px-5 md:bg-app-ash"
//         aria-label="Profile drop down"
//       >
//         <div className="flex items-center md:gap-4" ref={userRef}>
//           <Icon icon="lucide:user" style={{ fontSize: 32 }} onClick={toggle} />
//         </div>
//       </Button>
//       {!hideList.some((x) => pathname.includes(x)) && (
//         <div
//           className={`absolute min-w-full right-0 pb-6 pt-3 bg-white px-4 rounded-md shadow-lg top-[calc(100%+1.5rem)] z-50 ${
//             expand ? "" : "hidden"
//           }`}
//         >
//           {user ? (
//             <>
//               <h2 className="pb-4 text-xl font-bold tracking-tight capitalize font-fuzzy">
//                 {user?.username}
//               </h2>
//               <p className="pb-4 text-app-ash-2">{user?.email}</p>
//               {!pathname
//                 .slice(pathname.lastIndexOf("/"))
//                 .includes("/account") && (
//                 <Link
//                   to="/account"
//                   className="inline-block py-4"
//                   onClick={() => setExpand(false)}
//                 >
//                   My Account
//                 </Link>
//               )}
//               <Logout toggle={toggle} />
//             </>
//           ) : (
//             <Link to="/login">
//               <Button
//                 className="w-full font-bold text-app-red bg-app-ash text-nowrap"
//                 onClick={toggle}
//               >
//                 Login
//               </Button>
//             </Link>
//           )}
//         </div>
//       )}
//     </div>
//   );
// });

// export default User;

import { forwardRef, useRef, useEffect, useState } from "react";
import { Logout } from "./Logout";
import { useAuth } from "../hooks/utils/useAuth";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import { Button } from "./ui/Button";

const User = forwardRef((props, ref) => {
  const { user } = useAuth();
  const { pathname } = useLocation();
  const [expand, setExpand] = useState(false);
  const hideList = ["login"];
  const userRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userRef.current && !userRef.current.contains(event.target)) {
        setExpand(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggle = () => {
    !hideList.some((x) => pathname.includes(x)) && setExpand((v) => !v);
  };

  return (
    <div className="relative">
      <Button
        className="px-0 text-nowrap md:px-5 md:bg-app-ash"
        aria-label="Profile drop down"
      >
        <div className="flex items-center md:gap-4" ref={userRef}>
          <Icon icon="lucide:user" style={{ fontSize: 32 }} onClick={toggle} />
          {/* Show dropdown arrow when expanded */}
          {/* {expand && (
            <Icon
              icon="fa-solid:angle-down"
              style={{ fontSize: 20 }}
              className="text-app-black"
            />
          )} */}
        </div>
      </Button>
      {!hideList.some((x) => pathname.includes(x)) && (
        <div
          className={`   font-Helvetica absolute min-w-full right-0 pb-6 pt-3 bg-white px-4 rounded-md shadow-lg top-[calc(100%+1.5rem)] z-50 ${
            expand ? "" : "hidden"
          }`}
          ref={ref}
        >
          {user ? (
            <>
              <h2 className="pb-4 text-xl font-bold tracking-tight capitalize    font-Helvetica">
                {user?.username}
              </h2>
              <p className="pb-4 text-app-ash-2 z-[9999]">{user?.email}</p>
              {!pathname
                .slice(pathname.lastIndexOf("/"))
                .includes("/account") && (
                <Link
                  to="/account"
                  className="inline-block py-4    font-Helvetica z-[9999]"
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
                className="w-full font-bold text-app-red bg-app-ash text-nowrap    font-Helvetica z-[9999]"
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
});

export default User;

