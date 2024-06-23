// // import { Link } from "react-router-dom";
// // import logoImg from "../../assets/images/logo.webp";

// // export const Logo = ({
// //   stack = "horizontal",
// //   textColor = "red",
// //   textFooterColor="white",
// //   backGroundColor="black",
// //   font="fuzzy",
// //   size = "md",
// // }) => {
// //   return (
// //     <Link to="/" aria-label="Navigate to home page">
// //       <div
// //         className={`flex gap-x-2 font-fuzzy gap-y-3 ${
// //           stack === "horizontal" ? "flow-row items-center " : "flex-col"
// //         }`}
// //       >
// //         <img
// //           src={logoImg}
// //           alt="logo-Image-footer"
// //           className={`aspect-[40/37] font-fuzzy ${
// //             size === "sm" ? "w-12" : size === "lg" ? "w-20" : "w-14"
// //           } sm:block`}
// //         />
// //         <p
// //           className={`font-fuzzy font-bold tracking-tighter  ${
// //             backGroundColor==="black"? textFooterColor === "white" && font==="font-fuzzy":textColor==="red"
// //           } ${
// //             size === "sm" ? "text-md" : size === "lg" ? "text-4xl" : "text-xl"
// //           } sm:mt-2`}
// //         >
// //           mkhasa
// //         </p>
// //       </div>
// //     </Link>
// //   );
// // };
// import { Link } from "react-router-dom";
// import logoImg from "../../assets/images/logo.webp";

// export const Logo = ({
//   stack = "horizontal",
//   textColor = "text-red-500",
//   textFooterColor = "text-white",
//   backGroundColor = "bg-black",
//   font = "font-fuzzy",
//   size = "md",
// }) => {
//   return (
//     <Link to="/" aria-label="Navigate to home page">
//       <div
//         className={`flex gap-x-2 ${font} ${
//           stack === "horizontal" ? "flex-row items-center" : "flex-col"
//         }`}
//       >
//         <img
//           src={logoImg}
//           alt="logo"
//           className={`aspect-[40/37] ${
//             size === "sm" ? "w-12" : size === "lg" ? "w-20" : "w-14"
//           }`}
//         />
//         <p
//           className={`${font} font-bold tracking-tighter ${
//             backGroundColor === "bg-black" ? textFooterColor : textColor
//           } ${
//             size === "sm" ? "text-md" : size === "lg" ? "text-4xl" : "text-xl"
//           }`}
//         >
//           mkhasa
//         </p>
//       </div>
//     </Link>
//   );
// };
import { Link } from "react-router-dom";
import logoImg from "../../assets/images/logo.webp";

export const Logo = ({ backGroundColor }) => {
  return (
    <Link to="/" aria-label="Navigate to home page">
      <div className={"flex gap-x-2 items-center"}>
        <img
          src={logoImg}
          alt=""
          className="aspect-[40/37] w-8 min-[360px]:w-10 md:w-12 lg:w-14"
        />
        <p
          className={`font-fuzzy font-bold tracking-tighter text-sm pt-2 ${
            backGroundColor === "black" ? "text-white" : "text-app-red"
          } min-[360px]:text-lg md:text-xl lg:text-2xl`}

        >
          mkhasa
        </p>
      </div>
    </Link>
  );
};


