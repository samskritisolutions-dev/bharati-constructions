export default function FloorPlans() {
  return (
    <section className="elevation-fullscreen" id="plans">
      {/* Top Sky Header with Brand & Project Overview */}
      <div className="elevation-fs-header">
        <div className="elevation-brand-side">
          <div className="elevation-sub-tag">
            <span>A PROJECT BY</span>
            <strong>BHARATHI CONSTRUCTIONS</strong>
          </div>
          <h2 className="elevation-headline">
            A Spectacular Abode<br />Shaped To Care
          </h2>
          <div className="elevation-logo-box">
            <img
              src="/horizon-logo.webp"
              alt="Bharathi Horizon"
              className="elevation-horizon-logo"
            />
          </div>
        </div>

        <div className="elevation-specs-side">
          <h3 className="elevation-table-heading">Project Overview</h3>
          <table className="elevation-specs-table">
            <tbody>
              <tr>
                <td className="spec-label">Extent</td>
                <td className="spec-colon">:</td>
                <td className="spec-value">7476 sq.yds</td>
              </tr>
              <tr>
                <td className="spec-label">Blocks</td>
                <td className="spec-colon">:</td>
                <td className="spec-value">1</td>
              </tr>
              <tr>
                <td className="spec-label">Number of Floors</td>
                <td className="spec-colon">:</td>
                <td className="spec-value">8+2</td>
              </tr>
              <tr>
                <td className="spec-label">Number of Units</td>
                <td className="spec-colon">:</td>
                <td className="spec-value">126</td>
              </tr>
              <tr>
                <td className="spec-label">Type of Flats</td>
                <td className="spec-colon">:</td>
                <td className="spec-value">3 BHK</td>
              </tr>
              <tr>
                <td className="spec-label">3 BHK (sft)</td>
                <td className="spec-colon">:</td>
                <td className="spec-value">1945 - 2400</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Full-bleed Building Elevation Render: frame_25.webp */}
      <div className="elevation-fs-photo">
        <img
          src="/frames/frame_25.webp"
          alt="Bharathi Horizon 3D Architectural Elevation"
          className="elevation-photo"
        />
      </div>
    </section>
  );
}
