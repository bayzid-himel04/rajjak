import { motion } from "framer-motion";

export function StethoscopeIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 8C20 5.79 21.79 4 24 4H28C30.21 4 32 5.79 32 8V8C32 10.21 30.21 12 28 12H24C21.79 12 20 10.21 20 8V8Z" fill="currentColor" opacity="0.2"/>
      <path d="M24 12V28C24 34.63 29.37 40 36 40H40C46.63 40 52 34.63 52 28V20" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <circle cx="52" cy="16" r="6" fill="currentColor" opacity="0.3"/>
      <circle cx="52" cy="16" r="3" fill="currentColor"/>
      <path d="M16 12V28C16 34.63 21.37 40 28 40" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <circle cx="12" cy="8" r="4" fill="currentColor" opacity="0.3"/>
      <circle cx="40" cy="8" r="4" fill="currentColor" opacity="0.3"/>
    </svg>
  );
}

export function HeartbeatIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32 56L8 32C4 28 4 20 8 16C12 12 20 12 24 16L32 24L40 16C44 12 52 12 56 16C60 20 60 28 56 32L32 56Z" fill="currentColor" opacity="0.2"/>
      <path d="M4 32H16L22 20L32 44L42 20L48 32H60" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function PillIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="24" width="48" height="16" rx="8" fill="currentColor" opacity="0.2"/>
      <rect x="8" y="24" width="24" height="16" rx="8" fill="currentColor" opacity="0.4"/>
      <line x1="32" y1="24" x2="32" y2="40" stroke="currentColor" strokeWidth="2"/>
      <rect x="8" y="24" width="48" height="16" rx="8" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
}

export function DNAIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 8C20 8 32 16 44 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <path d="M20 20C20 20 32 28 44 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <path d="M20 32C20 32 32 40 44 32" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <path d="M20 44C20 44 32 52 44 44" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <path d="M20 56C20 56 32 48 44 56" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <line x1="20" y1="8" x2="20" y2="56" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
      <line x1="44" y1="8" x2="44" y2="56" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
    </svg>
  );
}

export function SyringeIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="24" y="16" width="16" height="40" rx="2" fill="currentColor" opacity="0.2"/>
      <rect x="24" y="16" width="16" height="40" rx="2" stroke="currentColor" strokeWidth="2"/>
      <line x1="24" y1="24" x2="40" y2="24" stroke="currentColor" strokeWidth="2"/>
      <line x1="24" y1="32" x2="40" y2="32" stroke="currentColor" strokeWidth="2"/>
      <line x1="24" y1="40" x2="40" y2="40" stroke="currentColor" strokeWidth="2"/>
      <rect x="28" y="8" width="8" height="8" fill="currentColor" opacity="0.3"/>
      <rect x="28" y="8" width="8" height="8" stroke="currentColor" strokeWidth="2"/>
      <line x1="32" y1="56" x2="32" y2="60" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );
}

export function CaduceusIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="32" y1="12" x2="32" y2="56" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <path d="M32 12L28 8L32 4L36 8L32 12Z" fill="currentColor" opacity="0.3"/>
      <path d="M32 12L28 8L32 4L36 8L32 12Z" stroke="currentColor" strokeWidth="2"/>
      <path d="M20 20C20 20 26 24 32 20C38 16 44 20 44 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="currentColor" opacity="0.2"/>
      <path d="M20 32C20 32 26 36 32 32C38 28 44 32 44 32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="currentColor" opacity="0.2"/>
      <path d="M20 44C20 44 26 48 32 44C38 40 44 44 44 44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="currentColor" opacity="0.2"/>
      <circle cx="20" cy="20" r="2" fill="currentColor"/>
      <circle cx="44" cy="20" r="2" fill="currentColor"/>
    </svg>
  );
}

export function MedicalCrossIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="24" y="8" width="16" height="48" rx="2" fill="currentColor" opacity="0.2"/>
      <rect x="8" y="24" width="48" height="16" rx="2" fill="currentColor" opacity="0.2"/>
      <rect x="24" y="8" width="16" height="48" rx="2" stroke="currentColor" strokeWidth="2"/>
      <rect x="8" y="24" width="48" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
}

export function BandageIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="24" width="48" height="16" rx="8" fill="currentColor" opacity="0.2"/>
      <rect x="8" y="24" width="48" height="16" rx="8" stroke="currentColor" strokeWidth="2"/>
      <circle cx="20" cy="32" r="2" fill="currentColor"/>
      <circle cx="28" cy="32" r="2" fill="currentColor"/>
      <circle cx="36" cy="32" r="2" fill="currentColor"/>
      <circle cx="44" cy="32" r="2" fill="currentColor"/>
    </svg>
  );
}

export function FloatingMedicalStickers() {
  const stickers = [
    { Icon: StethoscopeIcon, x: "5%", y: "20%", delay: 0, size: "w-16 h-16" },
    { Icon: HeartbeatIcon, x: "85%", y: "15%", delay: 0.2, size: "w-14 h-14" },
    { Icon: PillIcon, x: "10%", y: "70%", delay: 0.4, size: "w-12 h-12" },
    { Icon: DNAIcon, x: "90%", y: "65%", delay: 0.6, size: "w-14 h-14" },
    { Icon: SyringeIcon, x: "15%", y: "45%", delay: 0.8, size: "w-10 h-10" },
    { Icon: CaduceusIcon, x: "80%", y: "40%", delay: 1, size: "w-12 h-12" },
    { Icon: BandageIcon, x: "5%", y: "90%", delay: 1.2, size: "w-10 h-10" },
  ];

  return (
    <>
      {stickers.map(({ Icon, x, y, delay, size }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ delay, duration: 0.5 }}
          className={`absolute ${size} text-primary pointer-events-none hidden lg:block`}
          style={{ left: x, top: y }}
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon className="w-full h-full" />
          </motion.div>
        </motion.div>
      ))}
    </>
  );
}
