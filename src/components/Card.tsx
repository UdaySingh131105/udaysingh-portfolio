import { AnimatePresence, motion, useMotionValue, Transition } from "framer-motion"

export default function Card({
  text,
  style,
  image,
  containerRef,
}: {
  text?: string
  style?: React.CSSProperties
  image?: string
  containerRef?: React.RefObject<HTMLDivElement | null>
}) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const transition: Transition = { type: "spring", stiffness: 300, damping: 20 }

  const baseProps = {
    style: { ...style, x, y, willChange: "transform" },
    drag: true,
    dragConstraints: containerRef ? containerRef : undefined,
    dragElastic: 0.1,
    dragMomentum: false,
    initial: { opacity: 0, scale: 0.8, transition },
    animate: { opacity: 1, scale: 1, transition },
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
  }

  return image && !text ? (
    <AnimatePresence>
      <motion.img
        src={image}
        alt="Card Image"
        width={50}
        height={50}
        className="absolute cursor-grab drop-shadow-lg hover:drop-shadow-xl"
        {...baseProps}
      />
    </AnimatePresence>
  ) : (
    <AnimatePresence>
      <motion.div
        className="absolute px-4 py-3 text-xs text-center rounded-full ring-2 ring-indigo-400/50 font-medium bg-gradient-to-r from-gray-800 to-gray-700 text-white w-[10rem] cursor-grab shadow-lg hover:shadow-xl hover:ring-indigo-400/70"
        {...baseProps}
      >
        {text}
      </motion.div>
    </AnimatePresence>
  )
}
