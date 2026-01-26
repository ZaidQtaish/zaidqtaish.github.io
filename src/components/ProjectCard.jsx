export default function ProjectCard(props) {
  const { title, description, image, link, skills } = props;
  const toolsComponent = skills.map((skill) => (
    <span className="tool">{skill}</span>
  ));
  return (
    <a className={`item-link ${props.inProgress ? 'in-progress' : ''}`} target="_blank" href={link}>
      <div className={"proj-item"}>
        <img className="proj-img" src={image} />
        <div className="exp-info">
          <div className="title-container">
          <h2 className="title">
            {title} <i className="fa-solid fa-arrow-up-right-from-square fa-xs"></i>
          </h2>
          {props.inProgress && <span className="in-progress-badge">In Progress<div className="pulse-dot"></div></span>}
          </div>
          <p className="sub">{description}</p>
          <div className="tools">{toolsComponent}</div>
        </div>
      </div>
    </a>
  );
}