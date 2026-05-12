"use client";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const cursorRing = document.getElementById("cursor-ring");

    const moveCursor = (e: MouseEvent) => {
      if (cursor && cursorRing) {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
        
        cursorRing.style.left = e.clientX + "px";
        cursorRing.style.top = e.clientY + "px";
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <div id="cursor" />
      <div id="cursor-ring" />
    </>
  );
}
