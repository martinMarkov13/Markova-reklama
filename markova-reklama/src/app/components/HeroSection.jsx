"use client";
import React from "react";
import NavBar from "./NavBar";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="h-screen">
      <NavBar />

      <div className=" sm:grid-cols-12 p-6 mt-16 w-full">
        <h1
          id="heroTitle"
          className="text-white mb-4 text-lg sm:text-5xl lg:text-8xl lg:leading-normal custom-font"
        >
          <span className="bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
            "Маркова Реклама"
          </span>
          <br></br>
          <span className=" ml-36">
            <TypeAnimation
              sequence={["by Iliyan Markov...", 1000]}
              wrapper="span"
              speed={150}
            />
          </span>
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
