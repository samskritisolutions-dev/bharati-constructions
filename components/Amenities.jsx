'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

/* =====================================================================
   BESPOKE ARCHITECTURAL OUTLINE ICONS MATCHING BROCHURE SPECIFICATIONS
===================================================================== */

function GrandEntranceIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="23" y="10" width="18" height="11" rx="1" />
      <path d="M23 17h18" />
      <path d="M12 36h28v10H12z" />
      <path d="M12 28v8m28-8v8" />
      <path d="M8 32v14h36V32" />
      <path d="M8 40h4m32 0h4" />
      <path d="M46 30c3 0 6 3 6 8v8h-8v-8c0-3-2-5-5-5" />
      <path d="M44 46v4m6-4v4M10 46v4m32-4v4" />
      <path d="M22 47h20v-4H22z" />
    </svg>
  );
}

function YogaMeditationIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M32 7v5" />
      <circle cx="32" cy="18" r="4.5" />
      <path d="M23 28c0-6 6-12 9-16 3 4 9 10 9 16" />
      <path d="M27 28h10l-2 15h-6z" />
      <path d="M19 50c4-4 8-6 13-6s9 2 13 6" />
      <path d="M15 47c4-2 9 0 11 4m23-4c-4-2-9 0-11 4" />
      <line x1="13" y1="53" x2="51" y2="53" />
    </svg>
  );
}

function ChildrenPlayIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <line x1="10" y1="15" x2="54" y2="15" strokeWidth="2.2" />
      <path d="M14 15L7 51m14-36l-3 36m-11-13h11" />
      <path d="M50 15l7 51m-14-36l3 36m-2-13h11" />
      <line x1="25" y1="15" x2="25" y2="39" />
      <line x1="31" y1="15" x2="31" y2="39" />
      <rect x="23" y="39" width="10" height="3" rx="1.5" />
      <line x1="37" y1="15" x2="37" y2="39" />
      <line x1="43" y1="15" x2="43" y2="39" />
      <rect x="35" y="39" width="10" height="3" rx="1.5" />
    </svg>
  );
}

function LiftsIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="14" y="10" width="36" height="44" rx="1.5" />
      <rect x="19" y="18" width="26" height="36" />
      <line x1="32" y1="18" x2="32" y2="54" strokeWidth="1.8" />
      <rect x="25" y="12.5" width="14" height="4.5" rx="0.5" />
      <path d="M28.5 15.5l1.5-2 1.5 2m2 0l1.5-2 1.5 2" />
      <rect x="46.5" y="28" width="2.5" height="7" rx="0.5" />
    </svg>
  );
}

function MiniTheatreIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 14c12-3 26-3 38 0v15c-12-3-26-3-38 0z" />
      <rect x="15" y="35" width="8" height="8" rx="2" />
      <rect x="28" y="35" width="8" height="8" rx="2" />
      <rect x="41" y="35" width="8" height="8" rx="2" />
      <rect x="12" y="46" width="9" height="8" rx="2" />
      <rect x="23.5" y="46" width="9" height="8" rx="2" />
      <rect x="35" y="46" width="9" height="8" rx="2" />
      <rect x="46.5" y="46" width="6.5" height="8" rx="2" />
    </svg>
  );
}

function PlantationIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 32v12m16-16v16" />
      <path d="M20 28c-3 0-5-2-5-5 0-3 2-5 5-5 1-4 6-6 10-4 2-3 6-4 9-2 3-2 7 0 7 4 3 0 5 2 5 5 0 3-2 5-5 5-2 0-3-1-4-2-2 3-7 4-10 2-2 2-5 2-7 0z" />
      <rect x="13" y="44" width="38" height="9" rx="1" />
      <line x1="13" y1="47" x2="51" y2="47" />
      <path d="M17 44c0-3 3-5 5-5s5 2 5 5" />
    </svg>
  );
}

function PowerBackupIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="13" y="21" width="38" height="28" rx="2" />
      <line x1="11" y1="49" x2="53" y2="49" strokeWidth="2.5" />
      <path d="M43 21V13c0-2-2-3-4-3h-2" />
      <rect x="18" y="26" width="13" height="11" rx="1" />
      <circle cx="21.5" cy="31.5" r="1.5" />
      <circle cx="27.5" cy="31.5" r="1.5" />
      <line x1="36" y1="27" x2="46" y2="27" />
      <line x1="36" y1="31" x2="46" y2="31" />
      <line x1="36" y1="35" x2="46" y2="35" />
      <line x1="18" y1="42" x2="28" y2="42" />
      <line x1="36" y1="42" x2="46" y2="42" />
    </svg>
  );
}

function EvChargingIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 40c0-4 2-7 6-8l3-6c1-2 3-3 6-3h11c3 0 5 1 6 3l3 6c4 1 6 4 6 8v6h-4m-24 0h16" />
      <circle cx="17" cy="41" r="2" />
      <circle cx="39" cy="41" r="2" />
      <circle cx="15" cy="48" r="3" />
      <circle cx="41" cy="48" r="3" />
      <rect x="49" y="19" width="6.5" height="30" rx="1.5" />
      <path d="M49 26h-2c-2 0-3 2-3 4v8c0 2 2 3 4 3h1" />
      <path d="M29 11l-2.5 4.5h4.5l-2.5 4.5" strokeWidth="1.8" />
    </svg>
  );
}

function IndoorGamesIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="13" y="13" width="38" height="38" rx="2" />
      <rect x="17" y="17" width="30" height="30" />
      <circle cx="32" cy="32" r="6" />
      <circle cx="32" cy="32" r="2" />
      <circle cx="20.5" cy="20.5" r="1.5" />
      <circle cx="43.5" cy="20.5" r="1.5" />
      <circle cx="20.5" cy="43.5" r="1.5" />
      <circle cx="43.5" cy="43.5" r="1.5" />
      <line x1="23" y1="20.5" x2="41" y2="20.5" />
      <line x1="23" y1="43.5" x2="41" y2="43.5" />
      <line x1="20.5" y1="23" x2="20.5" y2="41" />
      <line x1="43.5" y1="23" x2="43.5" y2="41" />
    </svg>
  );
}

function GroceryStoreIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 17h6l5.5 23h24l4.5-17H22" />
      <line x1="27" y1="23" x2="27" y2="39" />
      <line x1="33" y1="23" x2="33" y2="39" />
      <line x1="39" y1="23" x2="39" y2="39" />
      <line x1="45" y1="23" x2="45" y2="39" />
      <circle cx="26" cy="48" r="3" />
      <circle cx="44" cy="48" r="3" />
      <path d="M23 45h23" />
    </svg>
  );
}

function InfinityPoolIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 23c0-6.5 6-11 13-11s13 4.5 13 11z" />
      <line x1="32" y1="12" x2="32" y2="36" />
      <path d="M15 39l13-4 16 6h6" />
      <path d="M19 38v7m14-5v5m12-3v3" />
      <path d="M12 51c3-1 6 1 9 1s6-2 9-2 6 2 9 2 6-2 9-2" />
      <path d="M16 56c3-1 6 1 9 1s6-2 9-2 6 2 9 2" />
    </svg>
  );
}

function OfficeIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="33" y="15" width="20" height="13" rx="1.5" />
      <path d="M43 28v5m-4 0h8" />
      <line x1="29" y1="33" x2="55" y2="33" strokeWidth="2.2" />
      <line x1="53" y1="33" x2="53" y2="50" />
      <path d="M17 23c0-3 3-5 6-5h2v14h-6c-1.5 0-2-1-2-2v-7z" />
      <path d="M17 32h10v3H17z" />
      <path d="M22 35v8m-5 4l5-4 5 4" />
      <circle cx="17" cy="49" r="1" />
      <circle cx="27" cy="49" r="1" />
    </svg>
  );
}

function GymnasiumIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" y1="20" x2="19" y2="48" strokeWidth="2.2" />
      <line x1="45" y1="20" x2="45" y2="48" strokeWidth="2.2" />
      <line x1="11" y1="24" x2="53" y2="24" strokeWidth="2.2" />
      <rect x="13" y="18" width="3" height="12" rx="1" />
      <rect x="16" y="20" width="2" height="8" rx="0.5" />
      <rect x="48" y="18" width="3" height="12" rx="1" />
      <rect x="46" y="20" width="2" height="8" rx="0.5" />
      <rect x="23" y="34" width="18" height="5" rx="1" />
      <line x1="32" y1="39" x2="32" y2="48" strokeWidth="2.2" />
      <line x1="15" y1="48" x2="23" y2="48" strokeWidth="2.2" />
      <line x1="41" y1="48" x2="49" y2="48" strokeWidth="2.2" />
      <line x1="28" y1="48" x2="36" y2="48" strokeWidth="2.2" />
    </svg>
  );
}

function CcCamerasIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <line x1="15" y1="43" x2="25" y2="49" strokeWidth="2.5" />
      <path d="M20 46l6-6" strokeWidth="2.2" />
      <path d="M23 34l18-10 6 10-18 10z" />
      <path d="M20 34l21-12" strokeWidth="2.2" />
      <ellipse cx="44.5" cy="29" rx="3.5" ry="5.5" transform="rotate(-30 44.5 29)" />
      <circle cx="34" cy="36" r="1.4" fill="currentColor" />
    </svg>
  );
}

function MaidLockerIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="20" cy="19" r="3.5" />
      <path d="M15 48v-12c0-3 2-6 5-6s5 3 5 6v12" />
      <path d="M15 34l-3 8m13-8l3 5" />
      <rect x="32" y="13" width="21" height="37" rx="1" />
      <line x1="42.5" y1="13" x2="42.5" y2="50" />
      <line x1="35" y1="18" x2="39" y2="18" />
      <line x1="35" y1="21" x2="39" y2="21" />
      <circle cx="39" cy="30" r="1" />
      <line x1="46" y1="18" x2="50" y2="18" />
      <line x1="46" y1="21" x2="50" y2="21" />
      <circle cx="46" cy="30" r="1" />
    </svg>
  );
}

function WalkingTrackIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="11" y="17" width="42" height="30" rx="15" />
      <rect x="16" y="21" width="32" height="22" rx="11" />
      <rect x="21" y="25" width="22" height="14" rx="7" />
    </svg>
  );
}

function CentralGardenIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" y1="13" x2="19" y2="51" strokeWidth="2.2" />
      <line x1="45" y1="13" x2="45" y2="51" strokeWidth="2.2" />
      <line x1="15" y1="15" x2="49" y2="15" strokeWidth="2.5" />
      <line x1="19" y1="25" x2="45" y2="25" />
      <line x1="19" y1="35" x2="45" y2="35" />
      <line x1="19" y1="45" x2="45" y2="45" />
      <path d="M21 49c4-6-2-12 5-18s1-10 8-14" />
      <path d="M43 49c-3-8 3-14-3-20" />
      <path d="M25 33c3-2 5 0 4 3-2 2-4 0-4-3z" fill="currentColor" opacity="0.35" />
      <path d="M33 23c3-2 5 0 4 3-2 2-4 0-4-3z" fill="currentColor" opacity="0.35" />
      <path d="M39 37c-3-2-5 0-4 3 2 2 4 0 4-3z" fill="currentColor" opacity="0.35" />
    </svg>
  );
}

/* =====================================================================
   AMENITIES BROCHURE DATA (17 ITEMS IN 4 ROWS)
===================================================================== */

const ROW_1 = [
  {
    icon: GrandEntranceIcon,
    title: 'GRAND ENTRANCE\nWITH WAITING AREA\nLOUNGE',
  },
  {
    icon: YogaMeditationIcon,
    title: 'YOGA / MULTIPURPOSE\nHALL / MEDITATION\nHALL',
  },
  {
    icon: ChildrenPlayIcon,
    title: "CHILDREN'S\nPLAY AREA",
  },
  {
    icon: LiftsIcon,
    title: 'LIFTS',
  },
  {
    icon: MiniTheatreIcon,
    title: 'MINI\nTHEATRE',
  },
];

const ROW_2 = [
  {
    icon: PlantationIcon,
    title: 'PLANTATION',
  },
  {
    icon: PowerBackupIcon,
    title: '100% POWER\nBACKUP',
  },
  {
    icon: EvChargingIcon,
    title: 'EV CHARGING',
  },
  {
    icon: IndoorGamesIcon,
    title: 'INDOOR\nGAMES',
  },
  {
    icon: GroceryStoreIcon,
    title: 'GROCERY\nSTORE',
  },
];

const ROW_3 = [
  {
    icon: InfinityPoolIcon,
    title: 'TERRACE INFINITY\nPOOL WITH DECKS',
  },
  {
    icon: OfficeIcon,
    title: 'OFFICE',
  },
  {
    icon: GymnasiumIcon,
    title: 'GYMNASIUM',
  },
  {
    icon: CcCamerasIcon,
    title: 'CC CAMERAS',
  },
  {
    icon: MaidLockerIcon,
    title: "MAID'S\nLOCKER ROOM",
  },
];

const ROW_4 = [
  {
    icon: WalkingTrackIcon,
    title: 'WALKING\nTRACK',
  },
  {
    icon: CentralGardenIcon,
    title: 'CENTRAL\nLANDSCAPE GARDEN\nON EVERY FLOOR',
  },
];

function HighlightCard({ item, index, isBottomRow }) {
  const Icon = item.icon;
  return (
    <motion.div
      className={`highlight-card ${isBottomRow ? 'bottom-card' : ''}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: (index % 5) * 0.05 }}
      whileHover={{ y: -3 }}
    >
      <div className="highlight-icon-wrap">
        <Icon />
      </div>
      <span className="highlight-label">
        {item.title.split('\n').map((line, i) => (
          <span key={i} className="highlight-label-line">
            {line}
          </span>
        ))}
      </span>
    </motion.div>
  );
}

export default function Amenities() {
  return (
    <section id="amenities" className="highlights-section">
      {/* Decorative Horizon wave-globe on the left */}
      <div className="highlights-globe-wrap" aria-hidden="true">
        <svg viewBox="0 0 500 500" className="highlights-globe-svg">
          <defs>
            <linearGradient id="globeSkyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#12a4b8" />
              <stop offset="24%" stopColor="#2cb7c9" />
              <stop offset="48%" stopColor="#67cad6" />
              <stop offset="68%" stopColor="#aee0e4" />
              <stop offset="84%" stopColor="#edd8c5" />
              <stop offset="93%" stopColor="#f3e4d5" />
              <stop offset="100%" stopColor="#f8eee5" />
            </linearGradient>
            <mask id="globeWaveSlits">
              <rect width="500" height="500" fill="white" />
              <path d="M 40,118 C 130,96 270,138 460,116" stroke="black" strokeWidth="15" strokeLinecap="round" fill="none" />
              <path d="M 18,172 C 120,146 290,196 482,170" stroke="black" strokeWidth="15" strokeLinecap="round" fill="none" />
              <path d="M 8,228 C 110,198 310,256 492,226" stroke="black" strokeWidth="15" strokeLinecap="round" fill="none" />
              <path d="M 8,284 C 110,254 310,312 492,282" stroke="black" strokeWidth="15" strokeLinecap="round" fill="none" />
              <path d="M 18,340 C 120,312 290,366 482,338" stroke="black" strokeWidth="15" strokeLinecap="round" fill="none" />
              <path d="M 40,394 C 130,370 270,418 460,392" stroke="black" strokeWidth="15" strokeLinecap="round" fill="none" />
            </mask>
          </defs>
          <circle cx="250" cy="250" r="225" fill="url(#globeSkyGrad)" mask="url(#globeWaveSlits)" />
        </svg>
      </div>

      <div className="highlights-container">
        {/* Brand Header */}
        <div className="highlights-header">
          <div className="highlights-brand-logo">
            <Image
              src="/horizon-logo.webp"
              alt="Bharathi Horizon"
              width={260}
              height={62}
              className="highlights-logo-img"
              priority
            />
          </div>
          <h2 className="highlights-title">Project Highlights</h2>
        </div>

        {/* 5-Column Grid Rows */}
        <div className="highlights-grid">
          {/* Row 1 */}
          <div className="highlights-row">
            {ROW_1.map((item, idx) => (
              <HighlightCard key={item.title} item={item} index={idx} />
            ))}
          </div>

          {/* Row 2 */}
          <div className="highlights-row">
            {ROW_2.map((item, idx) => (
              <HighlightCard key={item.title} item={item} index={idx + 5} />
            ))}
          </div>

          {/* Row 3 */}
          <div className="highlights-row">
            {ROW_3.map((item, idx) => (
              <HighlightCard key={item.title} item={item} index={idx + 10} />
            ))}
          </div>

          {/* Row 4 (Centered pair) */}
          <div className="highlights-row highlights-row-bottom">
            {ROW_4.map((item, idx) => (
              <HighlightCard key={item.title} item={item} index={idx + 15} isBottomRow />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
