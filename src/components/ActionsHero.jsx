import './ActionsHero.css';

export default function ActionsHero() {
  return (
    <div className="hero-actions">
      <a href="#projetos" className="btn btn-primary">
        <span className="material-symbols-outlined btn-icon">folder_open</span>
        See My Projects
      </a>

      <a href="#contato" className="btn btn-secondary">
        <span className="material-symbols-outlined btn-icon btn-icon-muted">mail</span>
        Contact Me
      </a>
    </div>
  );
}