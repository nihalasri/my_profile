import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';

const Background = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth mouse movement
  const springConfig = { damping: 25, stiffness: 100 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Transformed values for parallax effect (different intensities)
  const shiftX1 = useTransform(smoothX, (v) => v / 15);
  const shiftY1 = useTransform(smoothY, (v) => v / 15);
  
  const shiftX2 = useTransform(smoothX, (v) => v / -25);
  const shiftY2 = useTransform(smoothY, (v) => v / -25);

  const shiftX3 = useTransform(smoothX, (v) => v / 40);
  const shiftY3 = useTransform(smoothY, (v) => v / 40);

  return (
    <div className="bg-container">
      {/* Light Blobs - Deep Background */}
      <motion.div 
        className="blob blob-1"
        style={{ x: shiftX3, y: shiftY3 }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="blob blob-2"
        style={{ x: shiftX2, y: shiftY2 }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating Shapes - Mid Ground (Interactive) */}
      <div className="floating-shapes-wrapper">
        <motion.div 
          className="bg-shape gs1" 
          style={{ x: shiftX1, y: shiftY1 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="bg-shape gs2" 
          style={{ x: shiftX2, y: shiftY1 }}
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="bg-shape gs3" 
          style={{ x: shiftX3, y: shiftY2 }}
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
           className="bg-shape gs4" 
           style={{ x: shiftX2, y: shiftY3 }}
        />
        <motion.div 
           className="bg-shape gs5" 
           style={{ x: shiftX1, y: shiftY2 }}
           animate={{ scale: [1, 1.2, 1] }}
           transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div 
           className="bg-shape gs6" 
           style={{ x: shiftX3, y: shiftY1 }}
        />
        <motion.div 
           className="bg-shape gs7" 
           style={{ x: shiftX2, y: shiftY2 }}
           animate={{ rotate: 360 }}
           transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
           className="bg-shape gs8" 
           style={{ x: shiftX1, y: shiftY3 }}
        />
        <motion.div 
           className="bg-shape gs9" 
           style={{ x: shiftX3, y: shiftY1 }}
        />
        <motion.div 
           className="bg-shape gs10" 
           style={{ x: shiftX2, y: shiftY2 }}
        />
      </div>

      <div className="bg-overlay"></div>
    </div>
  );
};

export default Background;

