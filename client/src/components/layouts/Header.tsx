import { Link } from "react-router-dom"
import { motion, useScroll, useTransform } from "framer-motion"

export default function Header() {
  const { scrollY } = useScroll()

  // Réduction légère
  const paddingY = useTransform(scrollY, [0, 180], ["16px", "8px"])
  const maxWidth = useTransform(scrollY, [0, 180], ["1400px", "1180px"])
  const opacity = useTransform(scrollY, [0, 180], [1, 0.92])
  const y = useTransform(scrollY, [0, 180], [0, -6])

  const navItems = ["Réalisations", "Biographie", "Services", "Tarifs", "Contact"]

  return (
    <motion.header
      className="site-header"
      style={{
        paddingTop: paddingY,
        paddingBottom: paddingY,
        opacity,
        y
      }}
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.div
        className="site-header__inner"
        style={{ maxWidth }}
      >
        {/* LOGO */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
        >
          <Link to="/" className="brand">
            <span className="brand__icon">
              <svg viewBox="0 0 24 24">
                <path d="M9 5.5a1 1 0 0 1 1-1h4a1 1 0 0 1 .9.55l.6 1.2H18a3 3 0 0 1 3 3V17a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V9.25a3 3 0 0 1 3-3h1.5l.6-1.2A1 1 0 0 1 9 5.5Zm3 3.75a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5Zm0 2a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5Z" />
              </svg>
            </span>
            <span className="brand__title">Yaron Photographe</span>
          </Link>
        </motion.div>

        {/* NAVIGATION */}
        <motion.ul
          className="nav__list"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { delay: 0.45, staggerChildren: 0.08 }
            }
          }}
        >
          {navItems.map((item, index) => (
            <motion.li
              key={index}
              variants={{
                hidden: { opacity: 0, y: -6 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <Link className="nav__link" to={"/" + item.toLowerCase()}>
                {item}
              </Link>
            </motion.li>
          ))}
        </motion.ul>

      </motion.div>
    </motion.header>
  )
}
