import { SPECS } from '@/lib/data';

export default function Specs() {
  return (
    <section className="plan" id="specs">
      <div className="wrap">
        <h2>Built with care, specified in detail</h2>
        <div className="spec">
          {SPECS.map(([title, items], i) => (
            <details key={title} open={i === 0}>
              <summary>{title}</summary>
              <ul>{items.map((x) => <li key={x}>{x}</li>)}</ul>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
