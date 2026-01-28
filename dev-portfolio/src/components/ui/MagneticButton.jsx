import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '../../hooks/useMousePosition';

export const MagneticButton = ({ children, className = '', onClick, ...props }) => {
  const ref = useRef(null);
  const { x, y } = useMousePosition();
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    if (!ref.current) return;

    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = x - centerX;
    const distanceY = y - centerY;
    
    if (Math.abs(distanceX) < width && Math.abs(distanceY) < height) {
      setPosition({
        x: distanceX * 0.2,
        y: distanceY * 0.2
      });
    } else {
      setPosition({ x: 0, y: 0 });
    }
  }, [x, y]);

  return (
    <motion.button
      ref={ref}
      className={`magnetic-area cyber-border px-8 py-4 rounded-lg font-space-grotesk font-semibold text-lg
        bg-slate-900/50 backdrop-blur-lg hover:bg-slate-800/50 
        transition-all duration-300 ${className}`}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-gradient-diagonal opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg" />
    </motion.button>
  );
};