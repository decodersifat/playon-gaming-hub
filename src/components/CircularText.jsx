import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CircularTextWithCenter() {
  const textPathRef = useRef(null);

  useEffect(() => {
    if (textPathRef.current) {
      gsap.to(textPathRef.current, {
        attr: { startOffset: "100%" },
        duration: 10,
        repeat: -1,
        ease: "none",
      });
    }
  }, []);

  return (
    <div className="flex justify-center items-center w-full">
      <div className="relative w-[160px] h-[160px] md:w-[180px] md:h-[180px] lg:w-[220px] lg:h-[220px]">
        <svg
          viewBox="0 0 200 200"
          width="100%"
          height="100%"
        >

          <path
            id="circlePath"
            d="M100,100 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0"
            fill="none"
          />


          <text
            fill="white"
            fontSize="10"
            fontFamily="sans-serif"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            <textPath ref={textPathRef} href="#circlePath" startOffset="0%">
              ✨• Click here to see the magic ✨ • Click here to see the magic ✨ • Click here to see the magic ✨
            </textPath>
          </text>


          <text
            x="100"
            y="105"
            fill="white"
            fontSize="12"
            fontWeight="bold"
            fontFamily="sans-serif"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            Click Me
          </text>
        </svg>
      </div>
    </div>
  );
}
