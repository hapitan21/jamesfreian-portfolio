import { React, useState, useEffect } from "react";
import "./arrow.css";
import { BsArrowUpSquareFill } from "react-icons/bs";

const Arrow = () => {
  const [nameClass, setnameClass] = useState("arrow_Ncontainer");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 711) {
        setnameClass("arrow_Ncontainer");
      } else {
        setnameClass("arrow__container");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <button
        type="button"
        onClick={scrollToTop}
        className={`${nameClass} active`}
        aria-label="Scroll to top"
      >
        <BsArrowUpSquareFill />
      </button>
    </div>
  );
};

export default Arrow;
