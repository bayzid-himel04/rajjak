"use client";

import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-surface relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-accent/5 rounded-full translate-x-1/3 -translate-y-1/3" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-primary mb-4">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            <span className="text-sm font-medium uppercase tracking-wider">Reach Out</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted mt-4 max-w-md mx-auto">
            For consultations or professional inquiries, feel free to reach out via phone or email.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <StaggerItem>
            <a
              href="tel:01684200026"
              className="flex flex-col items-center text-center p-8 bg-white rounded-2xl border border-border hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group h-full relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent" />
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                <svg
                  className="w-7 h-7 text-primary group-hover:text-white transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-foreground text-lg mb-1">Phone</h3>
              <p className="text-muted">01684200026</p>
              <span className="mt-3 text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Tap to call
              </span>
            </a>
          </StaggerItem>

          <StaggerItem>
            <a
              href="mailto:khairulislam713@gmail.com"
              className="flex flex-col items-center text-center p-8 bg-white rounded-2xl border border-border hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group h-full relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-primary" />
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                <svg
                  className="w-7 h-7 text-primary group-hover:text-white transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-foreground text-lg mb-1">Email</h3>
              <p className="text-muted break-all text-sm">
                khairulislam713@gmail.com
              </p>
              <span className="mt-3 text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Tap to email
              </span>
            </a>
          </StaggerItem>
        </StaggerContainer>

        <AnimatedSection variant="fadeIn" delay={0.4}>
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full border border-border shadow-sm">
              <svg
                className="w-5 h-5 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                />
              </svg>
              <span className="text-sm text-muted">
                Languages:{" "}
                <strong className="text-foreground">Bengali</strong> |{" "}
                <strong className="text-foreground">English</strong>
              </span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
