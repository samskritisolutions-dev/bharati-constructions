'use client';
import { useState } from 'react';
import { LOCATION } from '@/lib/data';

export default function Location() {
  const keys = Object.keys(LOCATION);
  const [tab, setTab] = useState(keys[0]);
  return (
    <section id="location">
      <div className="wrap">
        <h2>In the middle of Kompally&apos;s everyday</h2>
        <p className="lead">Right off NH 44 near Suchitra X Roads, with the Outer Ring Road, schools, hospitals and work hubs close by.</p>
        <div className="tabs" role="tablist">
          {keys.map((k) => (
            <button key={k} role="tab" aria-selected={tab === k} onClick={() => setTab(k)}>{k}</button>
          ))}
        </div>
        <ul className="chips">{LOCATION[tab].map((x) => <li key={x}>{x}</li>)}</ul>
      </div>
    </section>
  );
}
