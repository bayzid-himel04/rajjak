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
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-primary mb-4">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z" />
            </svg>
            <span className="text-sm font-medium uppercase tracking-wider">Continuous Learning</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Courses & Training
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {courses.map((course, i) => (
            <StaggerItem key={i}>
              <div className="relative bg-gradient-to-br from-surface to-white rounded-xl p-6 border border-border overflow-hidden h-full group hover:shadow-lg transition-all duration-300">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-primary to-accent" />
                <div className="flex items-start gap-4 pl-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all">
                    <svg
                      className="w-6 h-6 text-primary group-hover:text-white transition-colors"
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
                  <div>
                    <h3 className="font-bold text-foreground mb-1">
                      {course.title}
                    </h3>
                    <p className="text-sm text-muted mb-2">{course.desc}</p>
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-primary/10 text-primary">
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
