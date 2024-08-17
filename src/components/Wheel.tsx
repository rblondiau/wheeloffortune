"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import dynamic from "next/dynamic";

// Dynamically import Wheel component with SSR disabled
const Wheel = dynamic(
  () => import("react-custom-roulette").then((mod) => mod.Wheel),
  { ssr: false }
);

const RouletteWheel = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const data = [
    { option: "Bitterballen" },
    { option: "Frikandel" },
    { option: "Kroket" },
    { option: "Bicky Burger" },
    { option: "Kaaskroket" },
    { option: "Viandel" },
    { option: "Loempia" },
    { option: "Boulet" },
    { option: "Satekroket" },
    { option: "Vleeskroket" },
    { option: "Speciaal" },
    { option: "Cervela" },
    { option: "Berenpoot" },
  ];

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  return (
    <>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        backgroundColors={["#ffffff"]}
        textColors={["#5370FE"]}
        onStopSpinning={() => {
          setMustSpin(false);
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
          });
        }}
        spinDuration={0.4}
        pointerProps={{
          src: "https://tmpfiles.nohat.cc/m2i8m2b1G6N4N4d3.png",
          style: {
            color: "#5370FE",
          },
        }}
      />
      <div className="pt-8">
        <button
          onClick={handleSpinClick}
          className="bg-royal-blue-500 hover:bg-royal-blue-700 text-white font-bold py-2 px-4 rounded"
          disabled={mustSpin}
        >
          {mustSpin ? "Aant draaien ..." : "Geef er een lap op!"}
        </button>
      </div>
    </>
  );
};

export default RouletteWheel;
