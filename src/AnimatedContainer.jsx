import { motion } from 'framer-motion';

const AnimatedContainer = ({ children, className }) => {
  return (
    <motion.div
    className={className}
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 2 }}
      viewport={{ once: true, amount: 0.3 }} 
    >
      {children}
    </motion.div>
  );
};

export default AnimatedContainer;
