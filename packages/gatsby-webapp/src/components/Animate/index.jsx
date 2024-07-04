import React from "react";
import { motion } from "framer-motion";

const Animate = ({ initial, animate, transition, children, ...rest }) => (
  <motion.div
    initial={initial ? initial : { opacity: 0, scale: 0.5 }}
    animate={animate ? animate : { opacity: 1, scale: 1 }}
    transition={transition ? transition : { duration: 0.5 }}
    {...rest}
  >
    {children ? children : null}
  </motion.div>
);

export default Animate;
