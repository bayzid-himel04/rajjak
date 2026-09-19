import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

const courses = [
  {
    title: "AO Pre-Basic Principles Course",
    desc: "Foundation course in orthopedic principles and fracture management",
    hours: "Comprehensive Training",
  },
  {
    title: "AO Alliance — Non-Operative Fracture Management",
    desc: "Specialized trauma training in non-surgical fracture treatment",
    hours: "Advanced Trauma Care",
  },
];

export default function Courses() {
  return (
    <section id="courses" className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-primary/5 rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-primary mb-3">
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z" />
            </svg>
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">Continuous Learning</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Courses & Training
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-primary mx-auto rounded-full" />
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto">
          {courses.map((course, i) => (
            <StaggerItem key={i}>
              <div className="relative bg-gradient-to-br from-surface to-white rounded-xl p-4 sm:p-6 border border-border overflow-hidden h-full group hover:shadow-lg transition-all duration-300">
                <div className="absolute top-0 left-0 w-1 sm:w-1.5 h-full bg-gradient-to-b from-primary to-accent" />
                <div className="flex items-start gap-3 sm:gap-4 pl-1 sm:pl-2">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:scale-105 transition-all">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-white transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-foreground text-sm sm:text-base mb-1 leading-snug">
                      {course.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted mb-2 leading-relaxed">{course.desc}</p>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[11px] sm:text-xs font-semibold bg-primary/10 text-primary">
                      {course.hours}
                    </span>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
