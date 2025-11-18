import { useEffect, useRef } from "react"
import { motion, useAnimationControls } from "framer-motion"
import Waves from "@/components/effects/Waves"
import paysage from "@/assets/paysage.jpg"

export default function HeroSection() {
  const bgControls = useAnimationControls()
  const bgRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    bgControls.start({
      scale: [1, 1.12, 1],
      y: ["0%", "-6%", "0%"],
      transition: {
        duration: 28,
        ease: "easeInOut",
        repeat: Infinity
      }
    })
  }, [])

  useEffect(() => {
    const el = bgRef.current
    if (!el) return

    const move = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const dx = (e.clientX - (rect.left + rect.width / 2)) / rect.width
      const dy = (e.clientY - (rect.top + rect.height / 2)) / rect.height

      el.style.setProperty("--px", `${dx * 4}px`)
      el.style.setProperty("--py", `${dy * 2}px`)
    }

    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [])

  const words = ["Subtil.", "Authentique.", "Professionnel."]

  const wordVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.45 + i * 0.22,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  }

  return (
    <section className="hero hero--full">

      <motion.div
        className="hero__bg"
        ref={bgRef}
        animate={bgControls}
        style={{ translateX: "var(--px)", translateY: "var(--py)" }}
      >
        <img
          className="hero__bgImg"
          src={paysage}
          alt="Photographie artistique en noir et blanc"
        />
        
      </motion.div>

      <div className="hero__content hero__content--overlay">

        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 1.2 }}
        >
          <span className="accent">Capturer l’instant.</span>
        </motion.h1>

        <div className="hero__title hero__title--stack">
          {words.map((w, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={wordVariant}
              initial="hidden"
              animate="visible"
              className="word-line"
            >
              {w}
            </motion.span>
          ))}
        </div>

        <motion.p
          className="hero__desc"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.9 }}
        >
          Portfolio photographique haut de gamme — noir profond, détails élégants, émotions vraies.
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.65, duration: 0.9 }}
        >
          <a className="btn btn--primary" href="/realisations">Voir mes réalisations</a>
          <a className="btn btn--ghost" href="/contact">Me contacter</a>
        </motion.div>

      </div>
    </section>
  )
}
