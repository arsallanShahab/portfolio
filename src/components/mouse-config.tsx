import useMouse from "@react-hook/mouse-position";

export const useVariants = (ref: React.MutableRefObject<null>) => {
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  let mouseXPosition = mouse.clientX || ref.current?.clientWidth / 2 || 0;
  let mouseYPosition = mouse.clientY || ref.current?.clientHeight / 2 || 0;
  if (mouse.clientX !== null) {
    mouseXPosition = mouse.clientX;
  }

  if (mouse.clientY !== null) {
    mouseYPosition = mouse.clientY;
  }

  return {
    default: {
      opacity: 1,
      height: 10,
      width: 10,
      fontSize: "20px",
      backgroundColor: "#fff",
      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    link: {
      opacity: 1,
      backgroundColor: "#fff",
      borderRadius: "50%",
      // border: "2px solid #000",
      color: "#000",
      height: 32,
      width: 32,
      fontSize: "32px",
      x: mouseXPosition - 16,
      y: mouseYPosition - 16,
    },
    sell: {
      opacity: 1,
      backgroundColor: "#EF5151",
      color: "#000",
      height: 64,
      width: 64,
      fontSize: "32px",
      x: mouseXPosition - 48,
      y: mouseYPosition - 48,
    },
  };
};

export const spring = {
  type: "spring",
  stiffness: 500,
  damping: 28,
};
