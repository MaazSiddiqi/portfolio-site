import { AnimatePresence, motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import CursorHover from "../../CursorHover";

const socials = {
  linkedIn: {
    url: "https://linkedin.com/in/maaz-siddiqi",
    icon: "/icons/linkedIn.svg",
    label: "/maaz-siddiqi",
  },
  github: {
    url: "https://github.com/MaazSiddiqi",
    icon: "/icons/github.svg",
    label: "/MaazSiddiqi",
  },
  x: {
    url: "https://x.com/itsmaaz_",
    icon: "/icons/x.svg",
    label: "/itsmaaz_",
  },
  email: {
    url: "mailto:maazali22@gmail.com",
    icon: "/icons/mail.svg",
    label: "maazali22@gmail.com",
  },
} as const;

const lookingFor = ["idea", "adventure", "hobby", "friend"] as const;

const links = [
  {
    href: "#about",
    label: "About Me",
  },
  {
    href: "#experience",
    label: "Experience",
  },
  {
    href: "#journey",
    label: "Journey",
  },
  {
    href: "#resume",
    label: "Resume",
  },
] as const;

const LOOKING_FOR_DELAY = 2500;

export default function Footer() {
  const [lookingIdx, setLookingIdx] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.33, once: true });

  useEffect(() => {
    if (!inView) return;
    const interval = setInterval(() => {
      setLookingIdx((prev) => (prev + 1) % lookingFor.length);
    }, LOOKING_FOR_DELAY);
    return () => clearInterval(interval);
  }, [inView]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="relative flex flex-col justify-center h-screen w-screen p-[15%] z-0 pointer-events-auto"
        ref={ref}
      >
        {inView && (
          <AnimatePresence mode="wait">
            <motion.div className="absolute top-0 left-0 w-screen h-screen -z-10 pointer-events-none">
              <AnimatePresence mode="wait">
                <motion.img
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 0.05, scale: 1 }}
                  transition={{ duration: 2, ease: [0.65, 0, 0.35, 1] }}
                  viewport={{ once: true, amount: 0.8 }}
                  src="/images/name.svg"
                  alt="name"
                  className="absolute top-[calc(50%-1rem)] left-[calc(50%-3rem)] -translate-x-1/2 -translate-y-1/2 object-cover opacity-5 lg:scale-50"
                />
              </AnimatePresence>
            </motion.div>
            <motion.div
              className="flex flex-col gap-8 items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{
                duration: 1.5,
                ease: [0.65, 0, 0.35, 1],
                delay: 0.5,
              }}
            >
              <motion.h1 className="title flex items-center justify-center gap-2">
                Always looking for the next
                <span
                  className="relative inline-flex items-center text-light"
                  style={{ width: "4.5ch", minWidth: "4.5ch" }}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={lookingIdx}
                      className="absolute left-0 w-full flex items-center justify-start"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.75,
                          ease: [0.16, 1, 0.3, 1],
                        },
                      }}
                      exit={{
                        opacity: 0,
                        y: -10,
                        transition: {
                          duration: 0.75,
                          ease: [0.16, 1, 0.3, 1],
                        },
                      }}
                    >
                      {lookingFor[lookingIdx]}.
                    </motion.span>
                  </AnimatePresence>
                </span>
              </motion.h1>
              <motion.div
                className="flex flex-row gap-12 text-accent"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.5,
                  ease: [0.65, 0, 0.35, 1],
                  delay: 0.7,
                }}
                viewport={{ once: true, amount: 0.8 }}
              >
                {Object.values(socials).map((social) => (
                  <CursorHover>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-row gap-2 items-center"
                    >
                      <img src={social.icon} alt={social.label} />
                      {social.label}
                    </a>
                  </CursorHover>
                ))}
              </motion.div>
            </motion.div>
            <ul className="flex gap-4 items-center justify-center absolute bottom-[12%] left-0 w-full z-50 pointer-events-auto">
              {links.map((link) => (
                <li className="label">
                  <CursorHover>
                    <a href={link.href}>{link.label}</a>
                  </CursorHover>
                </li>
              ))}
            </ul>
          </AnimatePresence>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
