import './Nav.css';

const links = [
  { path: 'inicio', label: 'Home', href: '#' },
  { path: 'projetos', label: 'Projects', href: '#projetos' },
  { path: 'contato', label: 'Contact', href: '#contato' },
];

export default function Nav() {
  return (
    <nav className="nav">
      {links.map((link) => (
        <a
          key={link.path}
          className="nav-link"
          data-path={link.path}
          href={link.href}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}