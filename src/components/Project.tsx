import { useEffect, useRef, useState } from 'react';
import { projects } from '../data/projects';
import Card from './Card';
import './style/project.css';

export default function Project() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsVisible(true);
        observer.disconnect();
      },
      { threshold: 0.2 }
    );

    observer.observe(sectionEl);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="project" className="project-section" ref={sectionRef}>
      <div className="project-section__heading">
        <h2>Projects</h2>
        <p>
          Selected projects that showcase practical full-stack development and
          problem-solving.
        </p>
      </div>

      <div className="project-section__grid">
        {projects.map((p, index) => (
          <Card
            key={p.id}
            name={p.name}
            imgUrl={p.image}
            description={p.description}
            tech={p.tech}
            isCompleted={p.isCompleted}
            link={p.link}
            className={isVisible ? 'is-visible' : ''}
            delayMs={70 + index * 70}
          />
        ))}
      </div>
    </section>
  );
}
