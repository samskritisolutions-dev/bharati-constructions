import { Building2, Mail, MapPin, Phone } from 'lucide-react';
import { CONTACT } from '@/lib/data';

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-sky">
        <div className="contact-cloud contact-cloud-one" />
        <div className="contact-inner">
          <header className="contact-heading">
            <span className="contact-eyebrow">BHARATHI HORIZON · KOMPALLY</span>
            <h2>Visit Horizon</h2>
            <p>We’d love to show you around. Find us, or get in touch with our team.</p>
          </header>

          <div className="visit-layout">
            {/* Card 1: Call Us (Row 1 Left) */}
            <article className="visit-card visit-card-call">
              <div className="visit-card-icon" aria-hidden="true">
                <Phone size={20} />
              </div>
              <div className="visit-card-body">
                <span className="visit-card-eyebrow">CALL US</span>
                <div className="visit-card-phones">
                  {CONTACT.phones.map((p) => (
                    <a key={p} href={`tel:+91${p.replace(/\s/g, '')}`} className="visit-link">
                      {p}
                    </a>
                  ))}
                </div>
              </div>
            </article>

            {/* Card 2: Email (Row 2 Left) */}
            <article className="visit-card visit-card-email">
              <div className="visit-card-icon" aria-hidden="true">
                <Mail size={20} />
              </div>
              <div className="visit-card-body">
                <span className="visit-card-eyebrow">EMAIL</span>
                <a href={`mailto:${CONTACT.email}`} className="visit-link">
                  {CONTACT.email}
                </a>
                <p className="visit-card-hint">Sales inquiries, brochures &amp; builder meetings</p>
              </div>
            </article>

            {/* Center: Clean Horizon Address Marker (Spans Rows 1 & 2) */}
            <div className="visit-center">
              <div className="visit-pin-box">
                <svg className="visit-pin-svg" viewBox="0 0 280 340" fill="none" aria-hidden="true">
                  <defs>
                    <linearGradient id="pinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.98" />
                      <stop offset="100%" stopColor="#f4f9fd" stopOpacity="0.95" />
                    </linearGradient>
                    <filter id="pinShadow" x="-20%" y="-10%" width="140%" height="130%">
                      <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#1a3552" floodOpacity="0.16" />
                    </filter>
                  </defs>
                  {/* Geometric smooth drop pin */}
                  <path
                    d="M 140 325 L 224 185.5 A 98 98 0 1 0 56 185.5 Z"
                    fill="url(#pinGrad)"
                    stroke="#ffffff"
                    strokeWidth="2.5"
                    filter="url(#pinShadow)"
                  />
                  {/* Subtle inner decorative rim */}
                  <circle
                    cx="140"
                    cy="135"
                    r="90"
                    fill="#ffffff"
                    stroke="rgba(196, 130, 78, 0.22)"
                    strokeWidth="1"
                  />
                </svg>

                <div className="visit-pin-content">
                  <div className="visit-pin-icon-wrap" aria-hidden="true">
                    <MapPin size={17} />
                  </div>
                  <span className="visit-pin-tag">YOUR NEW ADDRESS</span>
                  <h3 className="visit-pin-brand">
                    BHARATHI
                    <span className="visit-pin-brand-sub">HORIZON</span>
                  </h3>
                </div>
              </div>
            </div>

            {/* Card 3: Corporate Office (Row 1 Right) */}
            <article className="visit-card visit-card-corp">
              <div className="visit-card-icon" aria-hidden="true">
                <Building2 size={20} />
              </div>
              <div className="visit-card-body">
                <span className="visit-card-eyebrow">CORPORATE OFFICE</span>
                <p className="visit-card-desc">
                  #2301, Plot No. 51 &amp; 52, Delight Square, 3rd Floor, Green Park Avenue, Suchitra X Roads, Hyderabad 500067
                </p>
              </div>
            </article>

            {/* Card 4: Project Site (Row 2 Right) */}
            <article className="visit-card visit-card-site">
              <div className="visit-card-icon" aria-hidden="true">
                <MapPin size={20} />
              </div>
              <div className="visit-card-body">
                <span className="visit-card-eyebrow">PROJECT SITE</span>
                <p className="visit-card-desc">
                  Sy. No. 93/A, 93/B, 93/U, Petbasheerabad Village, Kompally, Hyderabad 500067
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
