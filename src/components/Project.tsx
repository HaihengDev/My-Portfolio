import { projects } from '../data/projects';
import Card from './Card';
import './style/project.css';

export default function Project() {
  return (
    <section id="project" className="project-section">
      <div className="project-section__heading">
        <h2>Projects</h2>
        <p>
          Selected projects that showcase practical full-stack development and
          problem-solving.
        </p>
      </div>

      <div className="project-section__grid">
        {projects.map((p) => (
          <Card
            key={p.id}
            name={p.name}
            imgUrl={p.image}
            description={p.description}
            tech={p.tech}
            isCompleted={p.isCompleted}
            link={p.link}
          />
        ))}
      </div>
    </section>
  );
}
