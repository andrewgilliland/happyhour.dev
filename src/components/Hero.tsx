import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { colors, fonts, gradients } from "../theme";

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.6 + i * 0.04,
      duration: 0.5,
      ease: "easeOut" as const,
    },
  }),
};

const title = "Developer Happy Hour";

export default function Hero() {
  return (
    <section style={styles.section}>
      {/* Coming Soon badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={styles.badge}
      >
        <motion.span
          animate={{
            textShadow: [
              "0 0 8px rgba(0,240,255,0.6), 0 0 30px rgba(0,240,255,0.3)",
              "0 0 16px rgba(255,0,229,0.6), 0 0 50px rgba(255,0,229,0.3)",
              "0 0 8px rgba(0,240,255,0.6), 0 0 30px rgba(0,240,255,0.3)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          style={styles.badgeText}
        >
          COMING SOON
        </motion.span>
      </motion.div>

      {/* Main title — staggered letter reveal */}
      <h1 style={styles.title}>
        {title.split(" ").map((word, wordIndex, words) => {
          const charOffset = words
            .slice(0, wordIndex)
            .reduce((sum, w) => sum + w.length + 1, 0);
          return (
            <span
              key={wordIndex}
              style={{ display: "inline-block", whiteSpace: "nowrap" }}
            >
              {word.split("").map((char, charIndex) => (
                <motion.span
                  key={charIndex}
                  custom={charOffset + charIndex}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  style={{ display: "inline-block" }}
                >
                  {char}
                </motion.span>
              ))}
              {wordIndex < words.length - 1 && (
                <span style={{ display: "inline" }}>&nbsp;</span>
              )}
            </span>
          );
        })}
      </h1>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.7, ease: "easeOut" }}
        style={styles.tagline}
      >
        In-person meetups for developers, worldwide.
      </motion.p>

      {/* Decorative glowing line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 2.2, duration: 0.8, ease: "easeOut" }}
        style={styles.glowLine}
      />

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 0.6 }}
        style={styles.scrollHint}
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ display: "inline-block" }}
        >
          <ChevronDown size={28} color={colors.textMuted} />
        </motion.span>
      </motion.div>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  section: {
    position: "relative",
    zIndex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    padding: "2rem",
    textAlign: "center",
  },
  badge: {
    marginBottom: "1.5rem",
    padding: "0.5rem 1.5rem",
    border: `2px solid ${colors.neonCyan}`,
    borderRadius: "999px",
    background: "rgba(0, 240, 255, 0.05)",
  },
  badgeText: {
    fontFamily: fonts.mono,
    fontSize: "0.85rem",
    fontWeight: 700,
    letterSpacing: "0.25em",
    color: colors.neonCyan,
  },
  title: {
    fontFamily: fonts.heading,
    fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
    fontWeight: 700,
    lineHeight: 1.1,
    margin: 0,
    background: gradients.title,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    filter: "drop-shadow(0 0 30px rgba(0, 240, 255, 0.15))",
  },
  tagline: {
    fontFamily: fonts.body,
    fontSize: "clamp(1rem, 2.5vw, 1.35rem)",
    color: colors.textMuted,
    marginTop: "1.25rem",
    maxWidth: "500px",
    lineHeight: 1.6,
  },
  glowLine: {
    width: "120px",
    height: "2px",
    marginTop: "2rem",
    background: colors.neonCyan,
    borderRadius: "1px",
    transformOrigin: "center",
  },
  scrollHint: {
    position: "absolute",
    bottom: "2.5rem",
    fontSize: "1.5rem",
    color: colors.textMuted,
  },
};
