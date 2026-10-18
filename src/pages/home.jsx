import "./home.css";
import './Glows.css';
import  Hero from "../components/Hero";
import Nav from "../components/Nav";
import Projects from "../components/projects/Projects";
import Contact from "../components/Contact";

function Home() {

  return (
    <>
      <header className="header">
        <div className="header-inner">
          <div className="header-brand">
            <div className="header-brand-name">
              <span className="header-brand-dot" />
              Vitória Nazareth
            </div>
          </div>
          <Nav />
        </div>
      </header>

      <main className="page">
        <div className="glows-container">
          {/*  Glows */}
          <div className="glow glow-top" />
          <div className="glow glow-middle-left" />
          <div className="glow glow-bottom-right" />
        </div>

        <div className="page-content">
          <Hero />
          <Projects/>
          <Contact />
        </div>
      </main>     
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-info">
            <span className="footer-line footer-line--primary">
              © 2026 Vitória Nazareth. All rights reserved.
            </span>
            <span className="footer-line footer-line--muted">
              Built with React.js + CSS; Clean Light Slate Theme
            </span>
          </div>

          <div className="footer-links">
            <a
              className="footer-link"
              href="https://github.com/thenazareth"
              target="_blank"
              rel="noreferrer">
              <span className="material-symbols-outlined footer-link-icon">
                code
              </span>
              GitHub
            </a>
            <a
              className="footer-link"
              href="https://www.linkedin.com/in/vit%C3%B3ria-nazareth"
              target="_blank"
              rel="noreferrer">
              <span className="material-symbols-outlined footer-link-icon">
                link
              </span>
              LinkedIn
            </a>
          </div>
        </div>
      </footer>

    </>
  );
}

export default Home;