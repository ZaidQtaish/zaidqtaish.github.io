import ExperienceCard from "./ExperienceCard"
import experienceList from "../data/experience.json"

export default function Experience() {
  return (
    <section id="experience">
      {experienceList.map((exp) => (
        <ExperienceCard
          key={exp.id}
          company={exp.company.name}
          companyLink={exp.company.link}
          role={exp.role}
          duration={exp.duration}
          description={exp.description}
          skills={exp.skills}
        />
      ))}
    </section>
  );
}
