export default function Project(props) {
  const { title, description, image, link, skills } = props;
  const toolsComponent = skills.map((skill) => (
    <span classNameName="tool">{skill}</span>
  ));
  return (
    <a className="item-link" target="_blank" href={link}>
      <div className="proj-item">
        <img className="proj-img" src={image} />
        <div className="exp-info">
          <h2 className="title">
            {title} <i className="fa-solid fa-arrow-up-right-from-square fa-xs"></i>
          </h2>
          <p className="sub">{description}</p>
          <div className="tools">{toolsComponent}</div>
        </div>
      </div>
    </a>
  );
}
