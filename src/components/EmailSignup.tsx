import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Replace "your-username" with your actual Buttondown username
const BUTTONDOWN_USERNAME = "your-username";

export default function EmailSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      const res = await fetch(
        `https://buttondown.com/api/emails/embed-subscribe/${BUTTONDOWN_USERNAME}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({ email }).toString(),
        },
      );
      if (res.ok || res.status === 303) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section style={styles.section}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        style={styles.container}
      >
        <h2 style={styles.heading}>Get Notified</h2>
        <p style={styles.subtext}>
          Be the first to know when Developer Happy Hour launches in your city.
        </p>

        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              style={styles.successMessage}
            >
              🎉 You're on the list! We'll be in touch.
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={styles.form}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === "error") setStatus("idle");
                }}
                placeholder="you@example.com"
                required
                style={styles.input}
                aria-label="Email address"
              />
              <motion.button
                type="submit"
                disabled={status === "loading"}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 0 3px #00f0ff",
                }}
                whileTap={{ scale: 0.97 }}
                style={{
                  ...styles.button,
                  opacity: status === "loading" ? 0.7 : 1,
                }}
              >
                {status === "loading" ? "Subscribing..." : "Notify Me"}
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>

        {status === "error" && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={styles.errorText}
          >
            Something went wrong. Please try again.
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  section: {
    position: "relative",
    zIndex: 1,
    padding: "4rem 2rem 6rem",
    maxWidth: "600px",
    margin: "0 auto",
  },
  container: {
    background: "rgba(18, 18, 26, 0.6)",
    border: "1px solid rgba(0, 240, 255, 0.1)",
    borderRadius: "20px",
    padding: "3rem 2.5rem",
    backdropFilter: "blur(12px)",
    textAlign: "center",
  },
  heading: {
    fontFamily: "'Space Grotesk', system-ui, sans-serif",
    fontSize: "clamp(1.5rem, 3.5vw, 2rem)",
    fontWeight: 700,
    margin: 0,
    color: "#e0e0e8",
  },
  subtext: {
    color: "#8888a0",
    fontSize: "1rem",
    marginTop: "0.5rem",
    marginBottom: "2rem",
    lineHeight: 1.5,
  },
  form: {
    display: "flex",
    gap: "0.75rem",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  input: {
    flex: "1 1 240px",
    minWidth: "0",
    padding: "0.85rem 1.2rem",
    fontSize: "1rem",
    fontFamily: "'Outfit', system-ui, sans-serif",
    background: "rgba(255, 255, 255, 0.04)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "12px",
    color: "#e0e0e8",
    outline: "none",
    transition: "border-color 0.2s",
  },
  button: {
    padding: "0.85rem 2rem",
    fontSize: "1rem",
    fontWeight: 600,
    fontFamily: "'Outfit', system-ui, sans-serif",
    background:
      "linear-gradient(135deg, #00f0ff 0%, #00f0ff 33%, #b44dff 33%, #b44dff 66%, #ff00e5 66%, #ff00e5 100%)",
    color: "#0a0a0f",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    whiteSpace: "nowrap",
    transition: "opacity 0.2s",
  },
  successMessage: {
    padding: "1rem",
    fontSize: "1.1rem",
    color: "#00f0ff",
    fontWeight: 500,
  },
  errorText: {
    color: "#ff4466",
    fontSize: "0.9rem",
    marginTop: "0.75rem",
  },
};
