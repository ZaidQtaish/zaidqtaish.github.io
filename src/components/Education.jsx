export default function Education() {
  return (
    <section id="education">
      <a className="item-link" target="_blank" href="https://ju.edu.jo/Home.aspx">
        <fieldset className="edu-item">
          <legend className="date sub">2022 - Present</legend>
          <div className="edu-info">
            <h2 className="title">
              Bachelor of Computer Information Systems
              <i className="fa-solid fa-arrow-up-right-from-square fa-xs"></i>
            </h2>
            <p className="sub">
              I am currently pursuing my Bachelor's degree in Computer
              Information Systems at the
              <span className="hi"> University of Jordan</span>. I am acquiring a
              solid foundation in various areas of computer science, including
              programming, web development, databases, systems analysis, and
              more.
            </p>
          </div>
          <img
            className="uni-img"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/University_of_Jordan_Logo.svg/1200px-University_of_Jordan_Logo.svg.png"
          />
        </fieldset>
      </a>
    </section>
  );
}
