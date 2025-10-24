import React, { useState, useEffect } from "react";
import bg from "../assets/bg.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import HeroSection from "./HeroSection";

function HeroLoader() {
  const [showContent, setShowContent] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 30,
      duration: 1,
      delay: 1,
      transformOrigin: "50% 50%",
      ease: "power4.inOut",
    }).to(".vi-mask-group", {
      rotate: 30,
      scale: 10,
      duration: 3,
      opacity: 0,
      ease: "power4.inOut",
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          gsap.to(".loader-wrapper", {
            opacity: 0,
            duration: 1,
            ease: "power2.inOut",
            onComplete: () => {
              setShowContent(true);
            },
          });
          this.kill();
        }
      },
    });
  });


  useEffect(() => {
  const videoSources = [
    "/video_1.webm",
    "/video_2.webm",
    "/video_3.webm",
    "/video_4.webm"
  ];
  let loadedCount = 0;


  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  videoSources.forEach((src) => {
    const video = document.createElement("video");
    video.src = src;
    video.onloadeddata = async () => {
      loadedCount++;
      if (loadedCount === videoSources.length) {
        await delay(5100);
        setShowContent(true);
      }
    };
  });
}, []);


  return (
    <>

      {!showContent && (
        <div className="loader-wrapper flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-black">
          <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
            <svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
              <defs>
                <mask id="viMask">
                  <rect width="100%" height="100%" fill="black" />
                  <g className="vi-mask-group">
                    <text
                      x="50%"
                      y="50%"
                      fontSize="250"
                      textAnchor="middle"
                      fill="white"
                      dominantBaseline="middle"
                      fontFamily="Arial Black"
                    >
                      PlayOn
                    </text>
                  </g>
                </mask>
              </defs>

              <image
                href={bg}
                width="100%"
                height="100%"
                preserveAspectRatio="xMidYMid slice"
                mask="url(#viMask)"
              />
            </svg>
          </div>
        </div>
      )}


      {showContent && <HeroSection />}
    </>
  );
}

export default HeroLoader;
