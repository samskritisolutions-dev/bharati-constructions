'use client';
import { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Building2,
  Paintbrush,
  DoorClosed,
  Layers,
  Droplets,
  Zap,
  UtensilsCrossed,
  Wifi,
  Waves,
  ShieldCheck,
  ArrowUpDown,
  Car,
  Flame,
  BatteryCharging,
  Search,
  ChevronUp,
  ChevronDown,
  Play,
  Pause,
  Grid3X3,
  SlidersHorizontal,
} from 'lucide-react';

const CATEGORIES = [
  'All',
  'Civil & Finishes',
  'Plumbing & Electrical',
  'Infrastructure & Utilities',
  'Security & Mobility',
];

const SPEC_DATA = [
  {
    id: 1,
    num: '01',
    group: 'Civil & Finishes',
    title: 'STRUCTURE',
    badge: 'Wind & Seismic Loads',
    icon: Building2,
    items: [
      'R.C.C framed structure to withstand wind & seismic loads.',
      'Superstructure: 9" thick lightweight red bricks/concrete blocks for external walls & 4" thick lightweight red bricks/concrete blocks for internal walls.',
      'Plastering: External and internal wall cement plaster with smooth finish excluding the plastering of internal ceiling and parking ceiling. Joint of the R.C.C. structure and brick wall will be covered with mesh before commencing of the internal wall plastering.',
    ],
  },
  {
    id: 2,
    num: '02',
    group: 'Civil & Finishes',
    title: 'WALL FINISHES',
    badge: 'Weatherproof & Putty',
    icon: Paintbrush,
    items: [
      'External: Textured finish with 2 coats of weather proof external emulsion paint of reputed make.',
      'Internal: Smooth putty finish with 2 coats of premium acrylic emulsion paint of reputed make over a coat of primer.',
    ],
  },
  {
    id: 3,
    num: '03',
    group: 'Civil & Finishes',
    title: 'DOORS & WINDOWS',
    badge: 'Teak Wood & uPVC',
    icon: DoorClosed,
    items: [
      'Main Door: Manufactured teak wood frame & melamine spray finish on veneered flush shutters with hardware of reputed make.',
      'Internal Doors: Engineered hardwood frame with PU polish & laminate shutter with hardware of reputed make.',
      'Toilet Door: Same as internal door/granite frame with laminated flush shutter.',
      'Utility Doors: Same as internal doors or uPVC door frame of reputed profile sections with combination of tinted float glass & laminated MDF panel.',
      'Sliding Doors: uPVC/Aluminium door frames with tinted toughened glass panelled sliding shutters with hardware of reputed make.',
      'Windows: uPVC/Aluminium window of reputed profile sections with tinted toughened/HS glass with suitable finishes as per design with mosquito mesh track.',
      'Windows Grills: Aesthetically designed Mild Steel (M.S) window grills with enamel paint finish.',
    ],
  },
  {
    id: 4,
    num: '04',
    group: 'Civil & Finishes',
    title: 'FLOOR FINISHES & WALL CLADDING',
    badge: '800×800mm Vitrified',
    icon: Layers,
    items: [
      'The drawing, dining, living, bedrooms, and kitchen are of minimum 800x800 mm size vitrified tiles of reputed make.',
      'The balcony, bathrooms, and utility areas are of acid resistant, and anti-skid vitrified tiles of reputed make.',
      'The corridor & lift lobbies flooring are with vitrified tiles of reputed make.',
      'Staircase with natural stone/granite flooring as per architectural design.',
      'Glazed/Matt finish ceramic tiles dado of reputed make up to 2ft height above kitchen platform and upto lintel height in bathrooms and upto 4ft height in utility area.',
    ],
  },
  {
    id: 5,
    num: '05',
    group: 'Plumbing & Electrical',
    title: 'PLUMBING & CP FITTINGS',
    badge: 'Pressure Booster & Concealed',
    icon: Droplets,
    items: [
      'Municipal water supply along with borewells for backup.',
      'Water gravity supply with pressure booster for the top floors.',
      'Wall mounted EWC with concealed flush tank/flush valve of reputed make.',
      'Counter top/undercounter washbasin in all toilets as per architectural design.',
      'Concealed diverter with spout/wall mixture along with over head shower of reputed make in all the units.',
      'Premium quality chrome plated taps and health faucets along with white sanitaryware of superior make.',
      'Provision for geyser in all bathrooms.',
    ],
  },
  {
    id: 6,
    num: '06',
    group: 'Plumbing & Electrical',
    title: 'ELECTRICAL',
    badge: '3-Phase & Modular',
    icon: Zap,
    items: [
      'Three phase power supply for all units.',
      'Concealed copper wiring of premium brands.',
      'Elegant designer modular switches of reputed brands.',
      'Double door DB with spares in each apartment.',
      'MCB with earth leakage protection of reputed make for all units.',
      'Power outlets for AC in bedrooms, living and drawing rooms for all units.',
      'Plug points for TV in drawing, living and master bedroom in all units.',
      'Power outlets for geysers & exhaust fans in all bathrooms.',
      'Power outlets in corridors for cleaning of common areas.',
      'Separate DG meter is given for each unit and the power usage charges are to be paid.',
    ],
  },
  {
    id: 7,
    num: '07',
    group: 'Plumbing & Electrical',
    title: 'KITCHEN & UTILITY',
    badge: 'Modular Provisions',
    icon: UtensilsCrossed,
    items: [
      'Modular kitchen provisions with water supply and power points for chimney, refrigerator, water purifier, microwave, mixer and grinder.',
      'Granite platform with stainless steel sink shall be provided with an extra cost.',
      'Water supply in utility along with power supply for washing machine and dryer units.',
    ],
  },
  {
    id: 8,
    num: '08',
    group: 'Infrastructure & Utilities',
    title: 'TELECOM, CABLE TV & INTERNET',
    badge: 'Intercom & Wi-Fi',
    icon: Wifi,
    items: [
      'Telephone points in master bedroom and drawing room.',
      'Intercom facility to all units connecting security cabin and main gate are provided.',
      'Provision for DTH with master dish facility provider with TV points in living, drawing and master bedroom.',
      'Wired/Wi-Fi internet facility is provided for all units.',
    ],
  },
  {
    id: 9,
    num: '09',
    group: 'Infrastructure & Utilities',
    title: 'WTP/STP',
    badge: 'Water Softening Plant',
    icon: Waves,
    items: [
      'Treated water made available through an exclusive water softening plant (not RO plant) with water meters to each unit.',
      'Sewage treatment plant of adequate capacity as per norms will be provided.',
    ],
  },
  {
    id: 10,
    num: '10',
    group: 'Security & Mobility',
    title: 'SECURITY SERVICES',
    badge: '24/7 CCTV & Biometrics',
    icon: ShieldCheck,
    items: [
      'Round the clock security system with CCTV surveillance in all important locations.',
      'Biometric access control for maids and staff.',
      'Panic button & intercom are provided in the lifts that are connected to security rooms.',
      'Driveway marking, signage boards at the strategic locations for ease of driving.',
    ],
  },
  {
    id: 11,
    num: '11',
    group: 'Security & Mobility',
    title: 'ELEVATORS/LIFTS',
    badge: 'Schindler / Kone V3F',
    icon: ArrowUpDown,
    items: [
      'High-Speed automatic passenger lifts with emergency rescue devices and V3F for energy efficiency of Schindler/Johnson/Kone or any equivalent make.',
      'Granite or marble flooring inside lifts.',
    ],
  },
  {
    id: 12,
    num: '12',
    group: 'Security & Mobility',
    title: 'EV CHARGING',
    badge: 'Stilt Floor Stations',
    icon: Car,
    items: [
      'EV charging facility at stilt floor.',
    ],
  },
  {
    id: 13,
    num: '13',
    group: 'Infrastructure & Utilities',
    title: 'LPG SERVICES',
    badge: 'Piped Gas Provision',
    icon: Flame,
    items: [
      'Gas supply system provisions for piped gas systems.',
      '(Note: Subject to the availability of service provider.)',
    ],
  },
  {
    id: 14,
    num: '14',
    group: 'Infrastructure & Utilities',
    title: 'POWER BACKUP',
    badge: '100% DG & Solar PV',
    icon: BatteryCharging,
    items: [
      'Three phase power supply with dual source prepaid energy meter for all the units.',
      'HT power supply along with 100% DG set backup with enclosure and AMF panel for all the units and common areas, except AC and Geyser.',
      'Solar PV system for common area lighting as per statutory norms.',
    ],
  },
];

function formatSpecText(text) {
  const colonIndex = text.indexOf(':');
  if (colonIndex > 0 && colonIndex < 28 && !text.includes('http')) {
    const prefix = text.substring(0, colonIndex + 1);
    const remainder = text.substring(colonIndex + 1);
    return (
      <>
        <strong className="spec-bullet-lead">{prefix}</strong>
        {remainder}
      </>
    );
  }
  return text;
}

function SpecCard({ spec }) {
  const Icon = spec.icon;
  return (
    <article className="spec-card">
      <div className="spec-card-head">
        <div className="spec-card-top-row">
          <div className="spec-card-num-box">
            <span className="spec-card-num">{spec.num}</span>
            <div className="spec-card-icon-circle">
              <Icon size={19} />
            </div>
          </div>
          <span className="spec-card-badge">{spec.badge}</span>
        </div>

        <div className="spec-card-title-box">
          <span className="spec-card-group-tag">{spec.group}</span>
          <h3 className="spec-card-title">{spec.title}</h3>
        </div>
      </div>

      <div className="spec-card-body">
        <ul className="spec-bullet-list">
          {spec.items.map((item, idx) => (
            <li key={idx} className="spec-bullet-item">
              <span className="spec-bullet-marker" aria-hidden="true" />
              <p className="spec-bullet-text">{formatSpecText(item)}</p>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

const slideVariants = {
  enter: (dir) => ({
    y: dir > 0 ? 55 : -55,
    opacity: 0,
    scale: 0.98,
  }),
  center: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      y: { type: 'spring', stiffness: 280, damping: 28 },
      opacity: { duration: 0.35 },
      scale: { duration: 0.35 },
    },
  },
  exit: (dir) => ({
    y: dir > 0 ? -55 : 55,
    opacity: 0,
    scale: 0.98,
    transition: {
      y: { type: 'spring', stiffness: 280, damping: 28 },
      opacity: { duration: 0.25 },
      scale: { duration: 0.25 },
    },
  }),
};

export default function ProjectSpecs() {
  const [activeGroup, setActiveGroup] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [viewMode, setViewMode] = useState('slider'); // 'slider' | 'grid'

  const filteredSpecs = useMemo(() => {
    return SPEC_DATA.filter((spec) => {
      const matchesGroup =
        activeGroup === 'All' || spec.group === activeGroup;
      if (!matchesGroup) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      const inTitle = spec.title.toLowerCase().includes(q);
      const inBadge = spec.badge.toLowerCase().includes(q);
      const inItems = spec.items.some((it) => it.toLowerCase().includes(q));
      return inTitle || inBadge || inItems;
    });
  }, [activeGroup, searchQuery]);

  // Group filtered specs into pairs (2 per slide) for desktop
  const slides = useMemo(() => {
    const chunks = [];
    for (let i = 0; i < filteredSpecs.length; i += 2) {
      chunks.push(filteredSpecs.slice(i, i + 2));
    }
    return chunks;
  }, [filteredSpecs]);

  const totalSlides = slides.length;

  // Reset to first slide when category or search changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeGroup, searchQuery]);

  const paginate = useCallback(
    (newDirection) => {
      if (totalSlides <= 1) return;
      setDirection(newDirection);
      setCurrentIndex((prev) => {
        let next = prev + newDirection;
        if (next >= totalSlides) next = 0;
        if (next < 0) next = totalSlides - 1;
        return next;
      });
    },
    [totalSlides]
  );

  // Auto-slide interval effect
  useEffect(() => {
    if (!isAutoPlay || isHovered || viewMode !== 'slider' || totalSlides <= 1) {
      return;
    }
    const timer = setInterval(() => {
      paginate(1);
    }, 4500);
    return () => clearInterval(timer);
  }, [isAutoPlay, isHovered, viewMode, totalSlides, paginate]);

  // Throttled mouse-wheel navigation within slider
  const lastWheelRef = useRef(0);
  const handleWheel = (e) => {
    if (viewMode !== 'slider' || totalSlides <= 1) return;
    const now = Date.now();
    if (now - lastWheelRef.current < 650) return;
    if (Math.abs(e.deltaY) > 30) {
      lastWheelRef.current = now;
      if (e.deltaY > 0) paginate(1);
      else paginate(-1);
    }
  };

  const currentPair = slides[currentIndex] || [];

  return (
    <section id="specs" className="project-specs-section">
      <span id="location" style={{ display: 'none' }} aria-hidden="true" />

      {/* Subtle blueprint grid backdrop */}
      <div className="project-specs-bg" aria-hidden="true" />

      <div className="wrap specs-container">
        {/* Section Header */}
        <div className="project-specs-header">
          <div className="specs-eyebrow">
            <span className="specs-eyebrow-line" />
            <span className="specs-eyebrow-text">ENGINEERING EXCELLENCE</span>
            <span className="specs-eyebrow-line" />
          </div>
          <h2 className="project-specs-title">Project Specifications & Amenities</h2>
          <p className="project-specs-sub">
            14 comprehensive architectural and engineering benchmarks — built with meticulous care and premium branded materials from foundation to final finish.
          </p>
        </div>

        {/* Toolbar: Category Tabs & Search Bar */}
        <div className="specs-toolbar">
          <div className="specs-tabs-list" role="tablist" aria-label="Specification categories">
            {CATEGORIES.map((cat) => {
              const count =
                cat === 'All'
                  ? SPEC_DATA.length
                  : SPEC_DATA.filter((s) => s.group === cat).length;
              const isSelected = activeGroup === cat;
              return (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={isSelected}
                  className={`specs-tab-btn ${isSelected ? 'active' : ''}`}
                  onClick={() => setActiveGroup(cat)}
                >
                  <span>{cat}</span>
                  <span className="specs-tab-count">{count}</span>
                </button>
              );
            })}
          </div>

          <div className="specs-toolbar-right">
            <div className="specs-search-wrap">
              <Search className="specs-search-icon" size={17} />
              <input
                type="text"
                className="specs-search-input"
                placeholder="Search specifications (e.g. tiles, lift, backup)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search specifications"
              />
              {searchQuery && (
                <button
                  className="specs-search-clear"
                  onClick={() => setSearchQuery('')}
                  title="Clear search"
                >
                  ✕
                </button>
              )}
            </div>

            {/* View Mode Toggle: Auto Slide vs Full Grid */}
            <div className="specs-mode-toggle" role="group" aria-label="Display mode">
              <button
                className={`specs-mode-btn ${viewMode === 'slider' ? 'active' : ''}`}
                onClick={() => setViewMode('slider')}
                title="Vertical Auto-Slide Mode"
              >
                <SlidersHorizontal size={15} />
                <span>Auto Slide</span>
              </button>
              <button
                className={`specs-mode-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
                title="View All Cards in Grid"
              >
                <Grid3X3 size={15} />
                <span>All Grid</span>
              </button>
            </div>
          </div>
        </div>

        {/* Search Counter */}
        {searchQuery && (
          <div className="specs-search-meta">
            Showing <strong>{filteredSpecs.length}</strong> of {SPEC_DATA.length} specifications matching &ldquo;{searchQuery}&rdquo;
          </div>
        )}

        {/* ==============================================================
            VERTICAL AUTO-SLIDING CAROUSEL VIEW
        ============================================================== */}
        {viewMode === 'slider' && totalSlides > 0 && (
          <div className="specs-slider-wrapper">
            {/* Slider Top Controller Bar */}
            <div className="specs-slider-bar">
              <div className="specs-slider-info">
                <button
                  className={`specs-play-btn ${isAutoPlay ? 'playing' : ''}`}
                  onClick={() => setIsAutoPlay(!isAutoPlay)}
                  title={isAutoPlay ? 'Pause auto-sliding' : 'Resume auto-sliding'}
                  aria-label={isAutoPlay ? 'Pause auto-sliding' : 'Resume auto-sliding'}
                >
                  {isAutoPlay ? <Pause size={14} /> : <Play size={14} />}
                  <span>{isAutoPlay ? (isHovered ? 'Paused on hover' : 'Auto sliding') : 'Paused'}</span>
                </button>

                <div className="specs-slide-step">
                  <span>Row <strong>{currentIndex + 1}</strong> of {totalSlides}</span>
                  <div className="specs-pills-row">
                    {slides.map((_, idx) => (
                      <button
                        key={idx}
                        className={`specs-pill-indicator ${idx === currentIndex ? 'active' : ''}`}
                        onClick={() => {
                          setDirection(idx > currentIndex ? 1 : -1);
                          setCurrentIndex(idx);
                        }}
                        aria-label={`Jump to specifications row ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Up & Down Vertical Nav Arrows */}
              <div className="specs-nav-arrows">
                <button
                  className="specs-nav-arrow-btn"
                  onClick={() => paginate(-1)}
                  title="Previous row (Scroll up)"
                  aria-label="Previous row"
                >
                  <ChevronUp size={20} />
                </button>
                <button
                  className="specs-nav-arrow-btn"
                  onClick={() => paginate(1)}
                  title="Next row (Scroll down)"
                  aria-label="Next row"
                >
                  <ChevronDown size={20} />
                </button>
              </div>
            </div>

            {/* Slider Stage (Viewport with smooth vertical slide transitions) */}
            <div
              className="specs-slider-stage"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onWheel={handleWheel}
            >
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="specs-slider-pair"
                >
                  {currentPair.map((spec) => (
                    <SpecCard key={spec.id} spec={spec} />
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Hint below slider */}
            <div className="specs-slider-footer-hint">
              <span>Scroll with mouse wheel or hover to pause · Auto-advancing every 4.5s</span>
            </div>
          </div>
        )}

        {/* ==============================================================
            FULL GRID VIEW (OPTIONAL EXPANDED VIEW)
        ============================================================== */}
        {viewMode === 'grid' && totalSlides > 0 && (
          <div className="specs-grid">
            <AnimatePresence mode="popLayout">
              {filteredSpecs.map((spec, index) => (
                <motion.div
                  key={spec.id}
                  layout
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3, delay: (index % 4) * 0.04 }}
                >
                  <SpecCard spec={spec} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {filteredSpecs.length === 0 && (
          <div className="specs-empty-box">
            <p>No specifications matched your search query.</p>
            <button
              className="specs-reset-btn"
              onClick={() => {
                setSearchQuery('');
                setActiveGroup('All');
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
