import './Hero.css';
import ActionsHero from './ActionsHero';
import TechStacks from './TechStacks';

export default function Hero() {
  return (
    <>  <div className="hero">
            <div className="hero-grid">
                <div className="hero-col-left">
                    <h1 className="hero-title">Full Stack Software Developer</h1>
                    <div className="hero-subtitle">
                        <p>
                            Hi! I'm Vitória Nazareth, a Computer Science student at the Federal
                            University of Rio de Janeiro (UFRJ). Early in my degree, I started
                            working on software development projects, which sparked my interest
                            in the field and encouraged me to explore new learning opportunities
                            both within and outside the university. As I approach graduation,
                            I've also become interested in data analytics as a way to expand my
                            skill set and explore different areas of tech while looking for my
                            first professional opportunity.
                        </p>
                    </div>
                    <ActionsHero />
                </div>
                <div className="hero-col-right">
                    <TechStacks />
                </div>
            </div>
        </div>
    </>
  );
}