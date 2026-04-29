import './style/navbar.css';

export default function NavBar() {
  return (
    <nav className="site-nav">
      <a className="site-nav__brand" href="#hero-wrapper">
        LH
      </a>

      <div className="site-nav__links">
        <a href="#hero-wrapper">Home</a>
        <a href="#tech-stack">Tech Stack</a>
        <a href="#project">Project</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
