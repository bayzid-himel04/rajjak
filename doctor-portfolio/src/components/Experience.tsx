import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";

const experiences = [
  {
    title: "D-Ortho Resident",
    organization: "Rajshahi Medical College Hospital",
    period: "Current",
    type: "clinical",
    description:
      "Pursuing advanced orthopedic training with hands-on clinical experience in trauma, spine, and fracture management.",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
  {
    title: "PGT in Surgery",
    organization: "Post Graduate Training",
    period: "6 months",
    type: "clinical",
    description:
      "Completed post-graduate surgical training with exposure to general and emergency surgical procedures.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    title: "Emergency Medical Officer",
    organization: "Delta Healthcare, Rampura, Dhaka",
    period: "",
    type: "clinical",
    description:
      "Provided emergency medical care, triage, and stabilization of acute cases in a fast-paced healthcare environment.",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Anatomy Teacher",
    organization:
      "International Medical College & Hospital, Tongi, Gazipur",
    period: "8 months",
    type: "teaching",
    description:
      "Taught anatomy to medical students, contributing to the next generation of healthcare professionals.",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-48 sm:w-72 h-48 sm:h-72 bg-accent/5 rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-primary mb-3">
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
            </svg>
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">Career Journey</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Professional Experience
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-primary mx-auto rounded-full" />
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/40 to-transparent hidden sm:block" />

            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex gap-4 sm:gap-6 mb-4 sm:mb-8 last:mb-0"
              >
                <div className="hidden sm:flex w-16 shrink-0 justify-center">
                  <div
                    className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 mt-6 z-10 ring-4 ring-white shrink-0 ${
                      exp.type === "teaching"
                        ? "bg-accent border-accent"
                        : "bg-primary border-primary"
                    }`}
                  />
                </div>
                <div className="flex-1 bg-gradient-to-br from-surface to-white rounded-xl p-4 sm:p-6 border border-border hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 ${
                      exp.type === "teaching" ? "bg-accent/10" : "bg-primary/10"
                    }`}>
                      <svg
                        className={`w-5 h-5 sm:w-6 sm:h-6 ${exp.type === "teaching" ? "text-accent" : "text-primary"}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={exp.icon} />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1.5">
                        <div>
                          <h3 className="font-bold text-foreground text-base sm:text-lg leading-snug">
                            {exp.title}
                          </h3>
                          <p className="text-primary text-xs sm:text-sm font-medium">
                            {exp.organization}
                          </p>
                        </div>
                        {exp.period && (
                          <span className="self-start sm:self-auto inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] sm:text-xs font-semibold bg-primary/10 text-primary">
                            {exp.period}
                          </span>
                        )}
                      </div>
                      <p className="text-muted text-xs sm:text-sm leading-relaxed mb-2">
                        {exp.description}
                      </p>
                      <span
                        className={`inline-block px-2 py-0.5 rounded text-[11px] sm:text-xs font-medium ${
                          exp.type === "teaching"
                            ? "bg-accent/10 text-accent"
                            : "bg-primary/10 text-primary"
                        }`}
                      >
                        {exp.type === "teaching" ? "Teaching" : "Clinical"}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
