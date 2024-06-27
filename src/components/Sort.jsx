// import { Icon } from "@iconify/react";
// import { Button } from "./ui/Button";
// import { useState, useEffect, useRef } from "react";
// import useComponentVisible from "./useComponentVisible";

// const ListItem = ({ sort, term, display, onClick }) => {
//   return (
//     <li>
//       <button
//         className={`py-3 w-full ${sort === term ? "bg-slate-100" : ""}`}
//         onClick={() => onClick(term)}
//       >
//         {display}
//       </button>
//     </li>
//   );
// };

// export const Sort = ({ onClick, sort }) => {
//   const [show, setShow] = useState(false);
//   const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
//   const list = [
//     {
//       term: "",
//       display: "None",
//     },
//     {
//       term: "sort-latest",
//       display: " New Arrival",
//     },
//     {
//       term: "sort-lowestPrice",
//       display: "Price: Low - High",
//     },
//     {
//       term: "sort-highestPrice",
//       display: "Price: High - Low",
//     },
//     {
//       term: "filter-unisex",
//       display: "Unisex",
//     },
//     {
//       term: "filter-men",
//       display: "Men",
//     },
//     {
//       term: "filter-women",
//       display: "Women",
//     },
//   ];

//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setShow(false);
//       }
//     };

//     document.addEventListener("click", handleClickOutside);

//     return () => {
//       document.removeEventListener("click", handleClickOutside);
//     };
//   }, []);

//   const onSortClick = (sortBy) => {
//     setShow(!show); // Toggle the visibility of the list
//     setIsComponentVisible(!isComponentVisible);
//     onClick(sortBy); // Assuming onClick is a function that should be called with the sortBy parameter
//   };

//   return (
//     <div className="relative z-10 w-48 py-2" ref={dropdownRef}>
//       <Button
//         ref={ref}
//         onClick={() => onSortClick(sort)}
//         className="flex items-center justify-between w-full py-2 bg-white"
//       >
//         Sort By{" "}
//         <Icon
//           icon="fa6-solid:angle-down"
//           vFlip={show}
//           style={{ fontSize: 24 }}
//           className="text-app-black"
//         />
//       </Button>
//       <ul
//         className={`bg-white absolute top-full w-full overflow-hidden rounded-3xl ${
//           show ? "" : "hidden"
//         }`}
//       >
//         {list.map((li) => (
//           <ListItem
//             key={li.display}
//             display={li.display}
//             term={li.term}
//             sort={sort}
//             onClick={onSortClick}
//           />
//         ))}
//       </ul>
//     </div>
//   );
// };
import { Icon } from "@iconify/react";
import { Button } from "./ui/Button";
import { useState, useEffect, useRef } from "react";
import useComponentVisible from "./useComponentVisible";

const ListItem = ({ sort, term, display, onClick }) => {
  return (
    <li>
      <button
        className={`py-3 w-full ${sort === term ? "bg-slate-100" : ""}`}
        onClick={() => onClick(term)}
      >
        {display}
      </button>
    </li>
  );
};

export const Sort = ({ onClick, sort }) => {
  const [show, setShow] = useState(false);
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
  const list = [
    {
      term: "",
      display: "None",
    },
    {
      term: "sort-latest",
      display: "New Arrival",
    },
    {
      term: "sort-lowestPrice",
      display: "Price: Low - High",
    },
    {
      term: "sort-highestPrice",
      display: "Price: High - Low",
    },
    {
      term: "filter-unisex",
      display: "Unisex",
    },
    {
      term: "filter-men",
      display: "Men",
    },
    {
      term: "filter-women",
      display: "Women",
    },
  ];

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShow(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const onSortClick = (sortBy) => {
    setShow(!show); // Toggle the visibility of the list
    setIsComponentVisible(!isComponentVisible);
    onClick(sortBy); // Assuming onClick is a function that should be called with the sortBy parameter
  };

  return (
    <div className="relative z-10 px-8 md:w-[48] py-2" ref={dropdownRef}>
      <Button
        ref={ref}
        onClick={() => setShow(!show)}
        className="flex justify-between items-center gap-1 py-2 bg-white"
      >
       <span className="text-nowrap md:ml-6 ml-2"> Sort By{""}</span>
        <Icon
          icon="fa6-solid:angle-down"
          vFlip={show}
          style={{ fontSize: 24 }}
          className="text-app-black md:mr-2 ml-1"
        />
      </Button>
      <ul
        className={`bg-white absolute top-full  text-nowrap overflow-hidden rounded-3xl ${
          show ? "" : "hidden"
        }`}
      >
        {list.map((li) => (
          <ListItem
            key={li.display}
            display={li.display}
            term={li.term}
            sort={sort}
            onClick={onSortClick}
          />
        ))}
      </ul>
    </div>
  );
};