import { motion } from "framer-motion";
import { FloatingMedicalStickers, StethoscopeIcon, HeartbeatIcon, CaduceusIcon } from "./MedicalIcons";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-surface via-white to-surface-alt pt-16 overflow-hidden">
      <FloatingMedicalStickers />

      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="med-cross"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M35 10 h10 v25 h25 v10 h-25 v25 h-10 v-25 h-25 v-10 h25 z"
                fill="currentColor"
                className="text-primary"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#med-cross)" />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden opacity-30">
        <div className="ecg-scroll flex w-[200%]">
          <svg viewBox="0 0 1200 80" className="w-full h-full" preserveAspectRatio="none">
            <path
              d="M0,40 L100,40 L120,40 L140,10 L160,70 L180,20 L200,60 L220,40 L300,40 L400,40 L420,40 L440,10 L460,70 L480,20 L500,60 L520,40 L600,40 L700,40 L720,40 L740,10 L760,70 L780,20 L800,60 L820,40 L900,40 L1000,40 L1020,40 L1040,10 L1060,70 L1080,20 L1100,60 L1120,40 L1200,40"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="text-primary"
            />
          </svg>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border-2 border-primary/20 text-primary px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-sm">
                <CaduceusIcon className="w-5 h-5" />
                <span>Orthopedic Surgeon</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4"
            >
              Dr. Md. Khairul{" "}
              <span className="text-primary">Islam</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-2 mb-6"
            >
              {["MBBS", "FCPS Part 1", "MRCS Part A", "D-Ortho Resident"].map((cred, i) => (
                <span
                  key={i}
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                >
                  {cred}
                </span>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-muted/80 mb-8 leading-relaxed max-w-lg"
            >
              Dedicated orthopedic professional committed to evidence-based
              practice, patient education, and advancing orthopedic care
              through continuous learning and clinical excellence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Book Consultation
              </a>
              <a
                href="#education"
                className="inline-flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
                  <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" opacity="0.3"/>
                </svg>
                View Credentials
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-8 opacity-20"
              >
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <defs>
                    <path
                      id="circlePath"
                      d="M 100, 100 m -90, 0 a 90,90 0 1,1 180,0 a 90,90 0 1,1 -180,0"
                    />
                  </defs>
                  <text fill="currentColor" className="text-primary" fontSize="10">
                    <textPath href="#circlePath">
                      ORTHOPEDIC SURGEON • MBBS • FCPS • MRCS • ORTHOPEDIC SURGEON • MBBS • FCPS • MRCS •
                    </textPath>
                  </text>
                </svg>
              </motion.div>

              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl" />
              
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl ring-4 ring-primary/10">
                <img
                  src="/doctor.jpg"
                  alt="Dr. Md. Khairul Islam"
                  className="w-full h-full object-cover"
                />
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
                className="absolute -bottom-3 -right-3 bg-white rounded-xl shadow-lg px-4 py-2.5 flex items-center gap-2 border border-primary/10"
              >
                <div className="w-3 h-3 bg-medical-green rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-foreground">
                  Available for Consultation
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -top-6 -left-6 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center border border-primary/10"
              >
                <StethoscopeIcon className="w-9 h-9 text-primary" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center border border-primary/10"
              >
                <HeartbeatIcon className="w-8 h-8 text-red-500" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
