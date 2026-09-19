import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";

export default function Goals() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="goals-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#goals-grid)" />
        </svg>
      </div>

      <motion.div
        className="absolute top-10 right-10 opacity-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      </motion.div>

      <div className="absolute -bottom-10 -left-10 opacity-10">
        <svg className="w-48 h-48" viewBox="0 0 64 64" fill="none">
          <path d="M20 8C20 5.79 21.79 4 24 4H28C30.21 4 32 5.79 32 8V8C32 10.21 30.21 12 28 12H24C21.79 12 20 10.21 20 8V8Z" fill="white" opacity="0.3"/>
          <path d="M24 12V28C24 34.63 29.37 40 36 40H40C46.63 40 52 34.63 52 28V20" stroke="white" strokeWidth="3" strokeLinecap="round"/>
          <circle cx="52" cy="16" r="6" fill="white" opacity="0.3"/>
          <circle cx="52" cy="16" r="3" fill="white"/>
          <path d="M16 12V28C16 34.63 21.37 40 28 40" stroke="white" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-8">
          <div className="inline-flex items-center gap-2 text-white/80 mb-4">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span className="text-sm font-medium uppercase tracking-wider">Vision & Mission</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
            Professional Goals
          </h2>
          <div className="w-16 h-1 bg-white/50 mx-auto rounded-full" />
        </AnimatedSection>

        <AnimatedSection variant="scaleIn" delay={0.2}>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 sm:p-10 border border-white/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-white/50" />
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <p className="text-lg leading-relaxed text-white/90">
                Building a trusted personal orthopedic education and consultation
                platform, with a focus on accessible patient education,
                professional development, and evidence-based orthopedic learning.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
