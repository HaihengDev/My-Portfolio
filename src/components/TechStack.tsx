import './style/techstack.css';
import { techCategories } from '../data/techCategories';

export default function TechStack() {
  return (
    <section className="tech-stack" id="tech-stack">
      <div className="tech-stack__heading">
        <h2>Tech Stack</h2>
        <p>Technologies I use to build reliable and modern web applications.</p>
      </div>

      <div className="tech-stack__grid">
        {techCategories.map((category) => (
          <article className="tech-stack__card" key={category.title}>
            <h3>{category.title}</h3>
            <ul>
              {category.items.map((tech) => (
                <li key={tech.name}>
                  <img src={tech.icon} alt={tech.name} />
                  <span>{tech.name}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
