import React from 'react'
import { motion } from 'framer-motion'
export default function Titleanimate({children}) {
  return (
    <motion.h1
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    // className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white"
  >
    {children}
  </motion.h1>
  )
}
