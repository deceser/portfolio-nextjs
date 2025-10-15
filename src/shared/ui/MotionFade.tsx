'use client';
import { motion } from 'framer-motion';
import React from 'react';

export const MotionFade: React.FC<React.PropsWithChildren> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);
