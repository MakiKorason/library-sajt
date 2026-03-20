import React from 'react';
import { motion } from "framer-motion";

const ClickableAnimatedImage = ({ 
  src, 
  alt, 
  className, 
  style, 
  onClick, 
  title,
  ...rest 
}) => {
  return (
    <motion.img
      className={`container-image clickable-image ${className || ''}`}
      src={src}
      alt={alt}
      style={style}
      loading="lazy"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true, amount: 0.1 }}
      onClick={onClick}
      title={title}
      {...rest}
    />
  );
};

export default ClickableAnimatedImage;



