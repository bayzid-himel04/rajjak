import { motion } from "framer-motion";
import { FloatingMedicalStickers, StethoscopeIcon, HeartbeatIcon, CaduceusIcon } from "./MedicalIcons";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-surface via-white to-surface-alt pt-20 sm:pt-24 pb-12 sm:pb-16 lg:py-24 overflow-hidden">
      <FloatingMedicalStickers />

      {/* Decorative background cross pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
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

      {/* ECG Line Animation */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 overflow-hidden opacity-30 pointer-events-none">
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-primary/20 text-primary px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 shadow-sm">
                <CaduceusIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Orthopedic Surgeon</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight sm:leading-tight mb-3 sm:mb-4"
            >
              Dr. Md. Khairul{" "}
              <span className="text-primary">Islam</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-center lg:justify-start gap-1.5 sm:gap-2 mb-4 sm:mb-6"
            >
              {["MBBS", "FCPS Part 1", "MRCS Part A (England)", "D-Ortho Resident"].map((cred, i) => (
                <span
                  key={i}
                  className="inline-flex items-center px-2.5 py-1 sm:px-3 sm:py-1 rounded-full text-[11px] sm:text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                >
                  {cred}
                </span>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-muted text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
              Dedicated orthopedic professional committed to evidence-based
              practice, patient education, and advancing orthopedic care
              through continuous learning and clinical excellence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start max-w-md mx-auto lg:mx-0"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl font-medium text-sm sm:text-base hover:bg-primary-dark transition-all shadow-md shadow-primary/20 active:scale-[0.98]"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
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
                className="inline-flex items-center justify-center gap-2 border border-primary text-primary px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl font-medium text-sm sm:text-base hover:bg-primary hover:text-white transition-all active:scale-[0.98]"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
                  <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" opacity="0.3"/>
                </svg>
                View Credentials
              </a>
            </motion.div>
          </div>

          {/* Portrait & Floating Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center py-4 sm:py-0"
          >
            <div className="relative max-w-full">
              {/* Rotating Circular Text (Hidden on very small screens to avoid horizontal overflow) */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 sm:-inset-6 lg:-inset-8 opacity-20 pointer-events-none hidden sm:block"
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

              {/* Glowing Aura */}
              <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl sm:blur-2xl" />
              
              {/* Doctor Image */}
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl sm:shadow-2xl ring-4 ring-primary/10 mx-auto">
                <img
                  src="/doctor.jpg"
                  alt="Dr. Md. Khairul Islam"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, type: "spring" }}
                className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg px-3 py-1.5 sm:px-4 sm:py-2.5 flex items-center gap-2 border border-primary/10"
              >
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-medical-green rounded-full animate-pulse shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-foreground whitespace-nowrap">
                  Available for Consultation
                </span>
              </motion.div>

              {/* Top Left Floating Medical Icon */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -top-3 -left-3 sm:-top-6 sm:-left-6 w-11 h-11 sm:w-16 sm:h-16 bg-white rounded-full shadow-md sm:shadow-lg flex items-center justify-center border border-primary/10"
              >
                <StethoscopeIcon className="w-6 h-6 sm:w-9 sm:h-9 text-primary" />
              </motion.div>

              {/* Bottom Left Floating Heartbeat Icon */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 w-10 h-10 sm:w-14 sm:h-14 bg-white rounded-full shadow-md sm:shadow-lg flex items-center justify-center border border-primary/10"
              >
                <HeartbeatIcon className="w-5 h-5 sm:w-8 sm:h-8 text-red-500" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
