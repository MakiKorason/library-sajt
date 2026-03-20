import { motion } from "framer-motion";

const AnimatedImage = ({ src, alt, className, style, noContainerClass = false, ...rest }) => {
  return (
    <motion.img
      className={noContainerClass ? (className || '') : `container-image ${className || ''}`}
      src={src}
      alt={alt}
      style={style}
      loading="lazy"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true, amount: 0.1 }}
      {...rest}
    />
  );
};

export default AnimatedImage;
