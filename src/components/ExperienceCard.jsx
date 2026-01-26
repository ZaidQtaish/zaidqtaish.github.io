export default function ExperienceCard({ role, company, companyLink, duration, description, skills }) {
  const toolsComponent = skills.map((skill) => (
    <span className="tool">{skill}</span>
  ));
  return (
      <a className="item-link" target="_blank" href={companyLink}>
        <div className="exp-item">
          <div className="date sub">{duration}</div>
          <div className="exp-info">
            <h2 className="title">
              {role} · {company}{" "}
              <i className="fa-solid fa-arrow-up-right-from-square fa-xs"></i>
            </h2>
            <p className="sub">{description}</p>
            <div className="tools">{toolsComponent}</div>
          </div>
        </div>
      </a>
  );
}