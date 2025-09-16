export default function Experience() {
  return (
    <section id="experience">
      <a className="item-link" target="_blank" href="https://jasaratech.com/">
        <div className="exp-item">
          <div className="date sub">01/2024 - 02/2024</div>
          <div className="exp-info">
            <h2 className="title">
              Software Developer Intern · Jasara{" "}
              <i className="fa-solid fa-arrow-up-right-from-square fa-xs"></i>
            </h2>
            <p className="sub">
              Developed and implemented <span className="hi">Stockpile</span>, a
              comprehensive inventory management system tailored for Amazon
              sellers, Responsible for the design and development within a
              one-month timeframe, Designed and implemented the{" "}
              <span className="hi">event sourcing architecture</span> pattern to
              track changes to inventory over time.
            </p>
            <div className="tools">
              <span className="tool">Javascript</span>
              <span className="tool">TypeScript</span>
              <span className="tool">Vue</span>
            </div>
          </div>
        </div>
      </a>
    </section>
  );
}
