'use client';
import { useState } from 'react';
import { CONTACT } from '@/lib/data';

export default function Overview() {
  const [msg, setMsg] = useState('');

  const facts = [
    { num: '126', label: 'Homes' },
    { num: '8+2', label: 'Floors' },
    { num: '7,476', label: 'Sq. yds extent' },
    { num: '1,945–2,400', label: 'Sq. ft, 3 BHK' },
  ];

  function submit(e) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = (f.get('name') || '').toString().trim();
    const phone = (f.get('phone') || '').toString().trim();
    if (!name || phone.replace(/\D/g, '').length < 10) {
      setMsg('Please enter your name and a 10-digit phone number.');
      return;
    }
    const facing = f.get('facing') || 'Any';
    const email = f.get('email') || '';
    const body = `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nPreference: ${facing}`;
    setMsg(`Opening email app to submit request. You can also call us directly at +91 ${CONTACT.phones[0]}.`);
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent('Site visit enquiry: Bharathi Horizon')}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section id="overview" className="overview-sec">
      <div className="wrap split">
        <div className="overview-info">
          <h2>A spectacular abode, shaped to care</h2>
          <p className="lead">
            Horizon is a gated community of 3 BHK homes built for families who want space, greenery and easy connectivity. One block, 8+2 floors and 126 homes, with lifts, 100% power backup and a central landscape garden on every floor.
          </p>
          <div className="facts-grid">
            {facts.map((item) => (
              <div className="fact-card" key={item.label}>
                <b className="fact-num">{item.num}</b>
                <span className="fact-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="overview-form-wrap" id="enquire">
          <div className="overview-form-card">
            <span className="form-badge">PRIORITY BOOKING</span>
            <h3>Book a Site Visit</h3>
            <p className="form-sub">
              Experience Bharathi Horizon firsthand. Schedule a guided tour and receive detailed floor plans &amp; pricing.
            </p>
            <form onSubmit={submit} noValidate>
              <div className="form-row">
                <input
                  name="name"
                  type="text"
                  placeholder="Your full name *"
                  autoComplete="name"
                  aria-label="Full name"
                  required
                />
              </div>
              <div className="form-row">
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone number (10 digits) *"
                  autoComplete="tel"
                  aria-label="Phone number"
                  required
                />
              </div>
              <div className="form-row">
                <input
                  name="email"
                  type="email"
                  placeholder="Email address (optional)"
                  autoComplete="email"
                  aria-label="Email address"
                />
              </div>
              <div className="form-row">
                <select name="facing" aria-label="Preferred unit facing">
                  <option value="Any facing">Preferred facing: Any</option>
                  <option value="West facing (1,945–2,185 sq.ft)">West facing (flats 01–08 · 1,945–2,185 sq ft)</option>
                  <option value="East facing (2,290–2,400 sq.ft)">East facing (flats 09–13 · 2,290–2,400 sq ft)</option>
                </select>
              </div>
              <button className="btn form-submit" type="submit">
                Schedule Site Visit
              </button>
              {msg && <div className="form-status" role="status">{msg}</div>}
              <div className="form-trust">
                <span>Direct sales: <a href={`tel:+91${CONTACT.phones[0].replace(/\s/g, '')}`}>+91 {CONTACT.phones[0]}</a></span>
                <span>TS RERA No. P02200006340</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
