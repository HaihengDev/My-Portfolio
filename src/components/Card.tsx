import type { CSSProperties } from 'react';
import './style/card.css';

type Props = {
  name: string;
  imgUrl: string;
  description: Array<string>;
  tech: Array<string>;
  isCompleted: boolean;
  link: string;
  className?: string;
  delayMs?: number;
};

export default function Card({
  name,
  imgUrl,
  description,
  tech,
  isCompleted,
  link,
  className = '',
  delayMs = 0,
}: Props) {
  return (
    <article
      className={`project-card ${className}`.trim()}
      style={{ '--card-delay': `${delayMs}ms` } as CSSProperties}
    >
      <div className="project-card__media">
        <img src={imgUrl} alt={name} />
        <span className="project-card__badge">
          {isCompleted ? 'Completed' : 'Working'}
        </span>
      </div>

      <div className="project-card__content">
        <h3>{name}</h3>
        <ul className="project-card__tech">
          {tech.map((el, index) => (
            <li key={index}>
              <img src={el} alt="Image of tech Stack" />
            </li>
          ))}
        </ul>

        <ul className="project-card__description">
          {description.map((el, index) => (
            <li key={index}>{el}</li>
          ))}
        </ul>

        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="project-card__link"
        >
          View Project &#8594;
        </a>
      </div>
    </article>
  );
}
