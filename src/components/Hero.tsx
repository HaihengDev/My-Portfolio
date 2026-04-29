import Profile from '../assets/profile.png';
import './style/hero.css';

export default function Hero() {
  return (
    <section className="hero-wrapper">
      <aside>
        <h2>Lim Haiheng</h2>
        <p>Fullstack web development</p>
        <p>Passionate to build and develop modern web application.</p>
      </aside>

      <img src={Profile} alt="profile image" />
    </section>
  );
}
