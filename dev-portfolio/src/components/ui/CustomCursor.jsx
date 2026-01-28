import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import { useMousePosition } from '../../hooks/useMousePosition';
import { useViewport } from '../../hooks/useViewport';

export const CustomCursor = () => {
  const { x, y } = useMousePosition();
  const { isMobile } = useViewport();
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorX = useSpring(x, springConfig);
  const cursorY = useSpring(y, springConfig);

  useEffect(() => {
    const updateCursor = () => {
      const elements = document.querySelectorAll('a, button, input, textarea');
      let pointer = false;
      
      elements.forEach(el => {
        if (el.matches(':hover')) pointer = true;
      });
      
      setIsPointer(pointer);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    document.addEventListener('mouseover', updateCursor);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mouseover', updateCursor);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  if (isMobile) return null;

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-white pointer-events-none z-50 mix-blend-difference"
        style={{ x: cursorX, y: cursorY }}
        animate={{
          scale: isPointer ? 1.5 : 1,
          opacity: isClicking ? 0.7 : 1,
        }}
        transition={{ type: "spring", stiffness: 500 }}
      />
      
      {/* Trail effect */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full bg-gradient-diagonal pointer-events-none z-40"
        style={{ x, y }}
        animate={{
          scale: isPointer ? 2 : 1,
          opacity: isPointer ? 0.3 : 0.1,
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
};