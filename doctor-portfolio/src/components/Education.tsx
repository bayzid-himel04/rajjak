import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

const qualifications = [
  {
    degree: "MBBS",
    institution: "University of Dhaka",
    status: "Completed",
    year: "Bachelor of Medicine & Surgery",
    icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z",
  },
  {
    degree: "FCPS Part 1 — Orthopedics",
    institution: "College of Physicians & Surgeons",
    status: "Completed",
    year: "Fellowship Examination",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    degree: "MRCS Part A",
    institution: "Royal College of Surgeons, England",
    status: "Passed",
    year: "Membership Examination",
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    degree: "D-Ortho",
    institution: "Rajshahi Medical College Hospital",
    status: "In Progress",
    year: "Advanced Orthopedic Training",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-12 sm:py-16 lg:py-20 bg-surface relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-primary mb-3">
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
            </svg>
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">Academic Background</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Education & Qualifications
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-primary mx-auto rounded-full" />
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {qualifications.map((qual, i) => (
            <StaggerItem key={i}>
              <div className="bg-white rounded-xl p-4 sm:p-6 border border-border shadow-sm hover:shadow-lg transition-all duration-300 h-full group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors pointer-events-none" />
                <div className="flex items-start gap-3 sm:gap-4 relative z-10">
                  <div className="w-11 h-11 sm:w-14 sm:h-14 bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <svg
                      className="w-5 h-5 sm:w-7 sm:h-7 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={qual.icon}
                      />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-foreground text-base sm:text-lg mb-1 leading-snug">
                      {qual.degree}
                    </h3>
                    <p className="text-primary text-xs sm:text-sm font-medium mb-1 truncate">{qual.institution}</p>
                    <p className="text-muted text-[11px] sm:text-xs mb-2.5">{qual.year}</p>
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[11px] sm:text-xs font-semibold ${
                        qual.status === "In Progress"
                          ? "bg-amber-100 text-amber-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {qual.status === "Completed" && (
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                      )}
                      {qual.status}
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
