import { MedicalCrossIcon } from "./MedicalIcons";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-10 sm:py-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="footer-cross"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M25 8 h10 v17 h17 v10 h-17 v17 h-10 v-17 h-17 v-10 h17 z"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-cross)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-primary rounded-full flex items-center justify-center shrink-0">
                <MedicalCrossIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <span className="font-serif text-base sm:text-lg font-bold block leading-tight">
                  Dr. Khairul Islam
                </span>
                <span className="text-[10px] sm:text-xs text-white/50 uppercase tracking-wider">
                  Orthopedic Surgeon
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed mb-3">
              MBBS | FCPS Part 1 (Orthopedics) | MRCS Part A (England) | D-Ortho Resident
            </p>
            <div className="inline-flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full">
              <div className="w-2 h-2 bg-medical-green rounded-full animate-pulse" />
              <span className="text-xs text-white/70 font-medium">Available for Consultation</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4 flex items-center gap-2 text-white">
              <svg className="w-4 h-4 text-primary-light" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              Quick Navigation
            </h3>
            <div className="grid grid-cols-2 sm:flex sm:flex-col gap-2">
              <a
                href="#about"
                className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors py-0.5"
              >
                About
              </a>
              <a
                href="#education"
                className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors py-0.5"
              >
                Education
              </a>
              <a
                href="#experience"
                className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors py-0.5"
              >
                Experience
              </a>
              <a
                href="#interests"
                className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors py-0.5"
              >
                Specializations
              </a>
              <a
                href="#courses"
                className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors py-0.5"
              >
                Courses
              </a>
              <a
                href="#contact"
                className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors py-0.5"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4 flex items-center gap-2 text-white">
              <svg className="w-4 h-4 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Direct Contacts
            </h3>
            <div className="flex flex-col gap-2.5 text-xs sm:text-sm text-white/70">
              <a href="tel:01684200026" className="hover:text-white transition-colors flex items-center gap-2">
                <span>📞</span> 01684200026
              </a>
              <a href="mailto:khairulislam713@gmail.com" className="hover:text-white transition-colors flex items-center gap-2 break-all">
                <span>✉️</span> khairulislam713@gmail.com
              </a>
              <span className="text-white/40 text-xs">
                📍 Rajshahi Medical College Hospital, Bangladesh
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} Dr. Md. Khairul Islam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
