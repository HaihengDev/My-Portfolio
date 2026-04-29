import Profile from '../assets/profile.png';
import './style/hero.css';

export default function Hero() {
  return (
    <section className="hero-wrapper" id="hero-wrapper">
      <aside>
        <h2>Lim Haiheng</h2>
        <p>Junior Backend Developer</p>
        <p>
          Passionate about building user-friendly web applications with clean,
          scalable, and maintainable code.
        </p>
      </aside>

      <img src={Profile} alt="profile image" />
    </section>
  );
}
