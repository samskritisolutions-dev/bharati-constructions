'use client';
import { useEffect, useState } from 'react';

export default function Nav() {
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const on = () => setSolid(window.scrollY > 40);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  return (
    <nav className={solid ? 'solid' : ''}>
      <div className="wrap">
        <a className="logo" href="#top" aria-label="Bharathi Horizon">
          <img src="/white-logo.png" alt="Bharathi Constructions" className="logo-builder" />
          <span className="logo-sep" aria-hidden="true" />
          <img src="/horizon-logo.webp" alt="Horizon" className="logo-horizon" />
        </a>
        <ul>
          {[['overview', 'Overview'], ['plans', 'Floor plans'], ['amenities', 'Amenities'], ['specs', 'Specifications']].map(([id, t]) => (
            <li key={id}><a href={`#${id}`}>{t}</a></li>
          ))}
        </ul>
        <a className="btn" href="#enquire">Enquire</a>
      </div>
    </nav>
  );
}
