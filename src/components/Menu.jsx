export default function Menu() {
  return (
    <div className="menu">
      <h1 className="name">Zaid Qtaish</h1>
      <h2 className="title">Fullstack Software Developer</h2>
      <p className="sub">
        I'm a passionate Software Developer <br />
        specializing in dynamic web applications.
      </p>
      <br /> <br /> <br />
      <nav className="sub">
        <a className="list" href="#experience">
          <div className="line"></div>
          <span className="list-name">EXPERIENCE</span>
        </a>
        <a className="list" href="#projects">
          <div className="line"></div>
          <span className="list-name">PROJECTS</span>
        </a>
        <a className="list" href="#education">
          <div className="line"></div>
          <span className="list-name">EDUCATION</span>
        </a>
      </nav>
      <div className="social-flex sub">
        <a href="https://github.com/ZaidQtaish" target="_blank">
          <i className="fa-brands fa-github fa-2xl"></i>
        </a>
        <a href="https://www.linkedin.com/in/zaid-qtaish/" target="_blank">
          <i className="fa-brands fa-linkedin fa-2xl"></i>
        </a>
        <a href="https://leetcode.com/u/ZaidQtaish" target="_blank">
          <i className="fa-solid fa-code fa-xl"></i>
        </a>
        <a href="mailto: enderzaide@gmail.com" target="_blank">
          <i className="fa-solid fa-envelope fa-2xl"></i>
        </a>
      </div>
    </div>
  );
}
