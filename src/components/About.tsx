import { motion } from "framer-motion";

const cards = [
  {
    icon: "🍻",
    title: "Grab a Drink, Talk Code",
    description:
      "Casual in-person meetups where developers hang out, share ideas, and build connections — no slides, no pressure.",
  },
  {
    icon: "🌍",
    title: "Chapters Worldwide",
    description:
      "From San Francisco to Berlin to Tokyo — Developer Happy Hour is coming to cities around the globe. Start one in yours.",
  },
  {
    icon: "⚡",
    title: "All Levels, All Stacks",
    description:
      "Whether you write React, Rust, or Ruby — junior or staff — everyone's welcome. The only requirement: curiosity.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function About() {
  return (
    <section style={styles.section}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        style={styles.heading}
      >
        What is Developer Happy Hour?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={styles.subheading}
      >
        A global network of local developer meetups. Good vibes only.
      </motion.p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        style={styles.grid}
      >
        {cards.map((card) => (
          <motion.div
            key={card.title}
            variants={cardVariants}
            whileHover={{
              y: -6,
              boxShadow:
                "0 0 25px rgba(0, 240, 255, 0.15), 0 0 60px rgba(0, 240, 255, 0.05)",
              borderColor: "rgba(0, 240, 255, 0.4)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={styles.card}
          >
            <span style={styles.icon}>{card.icon}</span>
            <h3 style={styles.cardTitle}>{card.title}</h3>
            <p style={styles.cardDesc}>{card.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  section: {
    position: "relative",
    zIndex: 1,
    padding: "6rem 2rem",
    maxWidth: "1000px",
    margin: "0 auto",
  },
  heading: {
    fontFamily: "'Inter', system-ui, sans-serif",
    fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
    fontWeight: 700,
    textAlign: "center",
    margin: 0,
    background: "linear-gradient(135deg, #e0e0e8, #00f0ff)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  subheading: {
    textAlign: "center",
    color: "#8888a0",
    fontSize: "1.1rem",
    marginTop: "0.75rem",
    marginBottom: "3rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "1.5rem",
  },
  card: {
    background: "rgba(18, 18, 26, 0.7)",
    border: "1px solid rgba(255, 255, 255, 0.06)",
    borderRadius: "16px",
    padding: "2rem",
    backdropFilter: "blur(10px)",
    cursor: "default",
    transition: "border-color 0.3s",
  },
  icon: {
    fontSize: "2.2rem",
    display: "block",
    marginBottom: "0.75rem",
  },
  cardTitle: {
    fontFamily: "'Inter', system-ui, sans-serif",
    fontSize: "1.2rem",
    fontWeight: 600,
    color: "#e0e0e8",
    margin: "0 0 0.5rem 0",
  },
  cardDesc: {
    fontSize: "0.95rem",
    color: "#8888a0",
    lineHeight: 1.65,
    margin: 0,
  },
};
