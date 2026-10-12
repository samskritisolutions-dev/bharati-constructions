# Bharathi Horizon – Next.js + React + three.js landing page

## Run
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Structure
- `components/HeroSequence.jsx` – three.js hero. A full-screen shader plane crossfades between the 60 frames in `public/frames/` as you scroll (camera descent from space to the tower). Frames load progressively.
- `components/*` – Nav, Overview, FloorPlans (interactive), Amenities, Specs, Location, Contact, Footer.
- `lib/data.js` – all brochure data (areas, amenities, specs, location, contact). Edit content here.
- `app/globals.css` – styling, light/dark theme tokens.

## Notes
- The enquiry form opens a pre-filled email (no backend). Replace the `mailto:` in `components/Contact.jsx` with an API route when ready.
- To change the sequence, replace `public/frames/frame_001.webp … frame_060.webp` (same naming, 16:9) and update `N` in `HeroSequence.jsx` if the count changes.
- Fonts (Cormorant Garamond, Jost) load from Google Fonts in `app/layout.js`.
