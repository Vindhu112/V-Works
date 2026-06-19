import { motion } from 'framer-motion'

export default function Reveal({
  children,
  delay = 0,
  y = 20,
  className = '',
  as: Tag = 'div',
}) {
  const MotionTag = motion[Tag] || motion.div
  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
      className={className}
    >
      {children}
    </MotionTag>
  )
}
