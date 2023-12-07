// components/LocomotiveScroll.jsx
import LocomotiveScroll from "locomotive-scroll";
import React, { useEffect, useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

type Props = {
  children: React.ReactNode;
};

const LocomotiveScrollContainer = ({ children }: Props) => {
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        lerp: 0.1,
        multiplier: 1.5,
      }}
      watch={
        [
          //...all the dependencies you want to watch to update the scroll
        ]
      }
      containerRef={containerRef}
    >
      <div data-scroll-container ref={containerRef}>
        {children}
      </div>
    </LocomotiveScrollProvider>
  );
};

export default LocomotiveScrollContainer;
