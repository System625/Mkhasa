import { useRef, useState } from "react";
import { handleHorizantalScroll } from "../../utils/horizontalScroll";

export default function useLongPress() {
  const [element, setElement] = useState();
  const timerRef = useRef();
  const isLongPress = useRef();
  const scrollRef = useRef();

  function startPressTimer(direction) {
    isLongPress.current = false;
    timerRef.current = setTimeout(() => {
      isLongPress.current = true;
      scrollRef.current = setInterval(() => {
        if (direction === "forward") {
          handleHorizantalScroll(element, 180);  // Increased increment
        } else {
          handleHorizantalScroll(element, -180);  // Increased increment
        }
      }, 5);  // Reduced interval timing
    }, 500);
  }

  function handleOnClick(direction) {
    if (isLongPress.current) {
      clearInterval(scrollRef.current);
      return;
    }
    // move element by 100px
    if (direction === "forward") {
      handleHorizantalScroll(element, 100);  // Increased increment
    } else {
      handleHorizantalScroll(element, -100);  // Increased increment
    }
  }

  function handleOnMouseDown(direction) {
    startPressTimer(direction);
  }

  function handleOnTouchStart(direction) {
    startPressTimer(direction);
  }

  function handleOnMouseUp() {
    if (isLongPress.current) {
      // terminate scroll
      clearInterval(scrollRef.current);
      return;
    }
    clearTimeout(timerRef.current);
  }

  function handleOnTouchEnd() {
    if (isLongPress.current) {
      // terminate scroll
      clearInterval(scrollRef.current);
      return;
    }
    clearTimeout(timerRef.current);
  }

  function handleOnTouchCancel() {
    if (isLongPress.current) {
      clearInterval(scrollRef.current);
      return;
    }
    clearTimeout(timerRef.current);
  }

  const getHandlers = (direction) => {
    return {
      onClick: () => handleOnClick(direction),
      onMouseDown: () => handleOnMouseDown(direction),
      onMouseUp: handleOnMouseUp,
      onTouchStart: () => handleOnTouchStart(direction),
      onTouchEnd: handleOnTouchEnd,
      onTouchCancel: handleOnTouchCancel,
    };
  };
function className(){
  return `${className}`
}
  return {
    getHandlers,
    setElement,
    className,
  };
}

// import { useRef, useState, useEffect } from "react";
// import { handleHorizantalScroll } from "../../utils/horizontalScroll";

// export default function useLongPress() {
//   const [element, setElement] = useState(null);
//   const timerRef = useRef();
//   const isLongPress = useRef(false);
//   const scrollRef = useRef();

//   useEffect(() => {
//     return () => {
//       clearInterval(scrollRef.current);
//       clearTimeout(timerRef.current);
//     };
//   }, []);

//   function startPressTimer(direction) {
//     isLongPress.current = false;
//     timerRef.current = setTimeout(() => {
//       isLongPress.current = true;
//       scrollRef.current = setInterval(() => {
//         if (direction === "forward") {
//           handleHorizantalScroll(element, 10);  // Adjust increment as needed
//         } else {
//           handleHorizantalScroll(element, -10);  // Adjust increment as needed
//         }
//       }, 20);  // Adjust interval timing for smoothness
//     }, 300);  // Adjust long press delay as needed
//   }

//   function handleOnClick(direction) {
//     if (isLongPress.current) {
//       clearInterval(scrollRef.current);
//       return;
//     }
//     // move element by 100px
//     if (direction === "forward") {
//       handleHorizantalScroll(element, 100);  // Adjust increment as needed
//     } else {
//       handleHorizantalScroll(element, -100);  // Adjust increment as needed
//     }
//   }

//   function handleOnMouseDown(direction) {
//     startPressTimer(direction);
//   }

//   function handleOnTouchStart(direction) {
//     startPressTimer(direction);
//   }

//   function handleOnMouseUp() {
//     clearInterval(scrollRef.current);
//     clearTimeout(timerRef.current);
//   }

//   function handleOnTouchEnd() {
//     clearInterval(scrollRef.current);
//     clearTimeout(timerRef.current);
//   }

//   function handleOnTouchCancel() {
//     clearInterval(scrollRef.current);
//     clearTimeout(timerRef.current);
//   }

//   function handleOnMouseLeave() {
//     clearInterval(scrollRef.current);
//     clearTimeout(timerRef.current);
//   }

//   const getHandlers = (direction) => {
//     return {
//       onClick: () => handleOnClick(direction),
//       onMouseDown: () => handleOnMouseDown(direction),
//       onMouseUp: handleOnMouseUp,
//       onMouseLeave: handleOnMouseLeave, // Added to handle the case when mouse leaves the button
//       onTouchStart: () => handleOnTouchStart(direction),
//       onTouchEnd: handleOnTouchEnd,
//       onTouchCancel: handleOnTouchCancel,
//     };
//   };

//   return {
//     getHandlers,
//     setElement,
//   };
// }

