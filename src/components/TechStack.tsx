import { useEffect, useRef, useState, type CSSProperties } from 'react';
import './style/techstack.css';
import { techCategories } from '../data/techCategories';

export default function TechStack() {
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
    <section className="tech-stack" id="tech-stack" ref={sectionRef}>
      <div className="tech-stack__heading">
        <h2>Tech Stack</h2>
        <p>Technologies I use to build reliable and modern web applications.</p>
      </div>

      <div className="tech-stack__grid">
        {techCategories.map((category, index) => (
          <article
            className={`tech-stack__card ${isVisible ? 'is-visible' : ''}`.trim()}
            style={{ '--card-delay': `${70 + index * 70}ms` } as CSSProperties}
            key={category.title}
          >
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
