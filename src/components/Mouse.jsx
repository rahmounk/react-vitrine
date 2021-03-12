import React, { useEffect } from "react";

const Mouse = () => {

    // fonction d'appel du cercle autour de la souris, avec le hooks useeffect
  useEffect(() => {
      const cursor = document.querySelector(".cursor")

    const handleCursor = (e) => {
      cursor.style.top = e.pageY + "px";
      cursor.style.left = e.pageX + "px";
    };
    window.addEventListener("mousemove", handleCursor);

    // circle smaller
    const handleHover = () => {
      cursor.classList.add("hovered");
    };
    const handleLeave = () => {
      cursor.style.transition = ".3s ease-out";
      cursor.classList.remove("hovered");
    };
    
    document.querySelectorAll(".hover").forEach((link) => {
      link.addEventListener("mouseover", handleHover);
      link.addEventListener("mouseleave", handleLeave);
    });

  }, []);

  return <span className="cursor"></span>;
};

export default Mouse;