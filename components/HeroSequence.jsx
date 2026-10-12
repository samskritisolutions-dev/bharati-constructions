'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitText from '@/components/SplitText';

const N = 25;
const src = (i) => `/frames/frame_${String(i + 1).padStart(2, '0')}.webp`;

export default function HeroSequence() {
  const seq = useRef(null);
  const intro = useRef(null);
  const outro = useRef(null);
  const bar = useRef(null);
  const image = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const playhead = { frame: 0 };
    const context = gsap.context(() => {
      gsap.set(intro.current, { opacity: 1, y: 0 });
      gsap.set(outro.current, { opacity: 0, y: 30, pointerEvents: 'none' });
      gsap.set(bar.current, { scaleX: 0, transformOrigin: 'left center' });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: seq.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.5,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            outro.current.style.pointerEvents = self.progress > 0.75 ? 'auto' : 'none';
          },
        },
      });

      timeline.to(playhead, {
        frame: N - 1,
        duration: 0.85,
        ease: 'none',
        onUpdate: () => {
          const nextFrame = Math.min(N - 1, Math.round(playhead.frame));
          const nextSrc = src(nextFrame);
          if (image.current.src.endsWith(nextSrc)) return;
          image.current.src = nextSrc;
        },
      }, 0);
      timeline.to(intro.current, { opacity: 0, y: -40, duration: 0.14, ease: 'none' }, 0);
      timeline.to(outro.current, { opacity: 1, y: 0, duration: 0.15, ease: 'none' }, 0.7);
      timeline.to(bar.current, { scaleX: 1, duration: 1, ease: 'none' }, 0);
    }, seq);

    return () => context.revert();
  }, []);

  return (
    <header className="seq" id="top" ref={seq}>
      <div className="stick">
        <div className="gl" role="img" aria-label="Camera descends through the Horizon tower frames">
          <img ref={image} src={src(0)} alt="" />
        </div>
        <div className="intro" ref={intro}>
          <div className="tag">A PROJECT BY BHARATHI CONSTRUCTIONS</div>
          <SplitText className="word" data-t="HORIZON" aria-label="Horizon" text="HORIZON" />
          <div className="cue">Scroll to descend</div>
        </div>
        <div className="outro" ref={outro}>
          <h1>The modern marvel you can call home</h1>
          <p>3 BHK premium apartments at Petbasheerabad, near Suchitra Circle, Kompally. 1,945 to 2,400 sq ft with a rooftop infinity pool and a garden on every floor.</p>
          <div className="cta">
            <a className="btn" href="#enquire">Book a site visit</a>
            <a className="btn ghost" href="#plans">Explore floor plans</a>
          </div>
        </div>
        <div className="prog"><i ref={bar} /></div>
      </div>
    </header>
  );
}
