import { contacts } from '../data/contact';
import './style/contact.css';

export default function Contact() {
  const normalizeLink = (info: string, link: string) => {
    if (link && link !== '#') return link;
    if (info.includes('@') && !info.startsWith('http')) return `mailto:${info}`;
    if (/^\d[\d\s]+$/.test(info)) return `tel:${info.replace(/\s+/g, '')}`;
    if (info.startsWith('@')) return `https://t.me/${info.slice(1)}`;
    return info;
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-section__heading">
        <h2>Contact</h2>
        <p>
          Let&apos;s connect for collaboration, freelance work, or project
          ideas.
        </p>
      </div>

      <ul className="contact-list">
        {contacts.map((con) => (
          <li key={con.info} className="contact-list__item">
            <img src={con.icon} alt="" />
            <a href={normalizeLink(con.info, con.link)} target="_blank" rel="noreferrer">
              {con.info}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
