import Carousel from './Carousel';
import './Projects.css';


const PROJECTS = [
  {
    id: '01',
    category: 'Academic Project',
    title: 'Sokrates.AI - Full-Stack Development',
    description:
      'AI platform that provides personalized learning experiences based on the socratic method.',
    tags: ['Python', 'FlutterFlow', 'SQL'],
    demoUrl: 'https://sokrates.com.br/',  
    githubUrl: '',
  },
  {
    id: '02',
    category: 'Full-Stack Development',
    title: 'Github Dashboard',
    description:
      'Dashboard that provides insights and analytics for GitHub repositories.',
    tags: ['Python', 'API', 'React.js'],
    demoUrl: 'https://github-dashboard-zeta-three.vercel.app/',
    githubUrl: 'https://github.com/thenazareth/github-dashboard',
  },
  {
    id: '03',
    category: 'Academic Project',
    title: 'BandejApp - Frontend Development',
    description:
      'A PWA that allows UFRJ students to view the daily menu of the university restaurants by campus.',
    tags: ['TypeScript', 'HTML', 'CSS'],
    demoUrl: 'https://devmobufrj.github.io/BandejApp/#/Restaurante',
    githubUrl: 'https://github.com/DevMobUFRJ/BandejApp',
  },
  {
    id: '04',
    category: 'Classroom Activity',
    title: 'Zero-Dividas',
    description:
      'Academic project prototype of a mobile app that helps users manage their debts and finances.',
    tags: ['TypeScript', 'Classroom'],
    demoUrl: 'https://leobardineo.github.io/zero-dividas/',
    githubUrl: 'https://github.com/LeoBardineo/zero-dividas',
  },
  {
    id: '05',
    category: 'Full-Stack Development',
    title: 'Kanban Board',
    description:
      'Local Kanban board app with simple CRUD operations and drag-and-drop functionality.',
    tags: ['React.js', 'Go', 'CSS', 'HTML'],
    demoUrl: '',
    githubUrl: 'https://github.com/thenazareth/kanban-board',
  },
  {
    id: '06',
    category: 'Academic Project',
    title: 'Unseen',
    description:
      'A serious game made in Unity aimed to evaluate the potential of the binaural (3D) audio for accessibility for visually impaired people.',
    tags: ['Unity', 'C#', 'Academic'],
    demoUrl: 'https://sol.sbc.org.br/index.php/wiplay/article/view/26852',
    githubUrl: '',
  },
  {
    id: '07',
    category: 'Web development',
    title: 'My Portfolio',
    description:
      'Development of this cutie you looking at right now.',
    tags: ['React.js', 'CSS', 'HTML'],
    demoUrl: '',
    githubUrl: '',
  },
  {
    id: '08',
    category: 'Academic Project',
    title: 'Anátema - Game Designer',
    description:
      'Development of a visual novel game with a focus on storytelling and character development.',
    tags: ['Godot'],
    demoUrl: 'https://gdpufrj.itch.io/anatema',
    githubUrl: '',
  },
  {
    id: '09',
    category: 'Academic Project',
    title: 'Buffoons - Game Designer',
    description:
      'Development of a boss rush game with a focus on fast-paced action and challenging gameplay.',
    tags: ['Godot', 'Academic'],
    demoUrl: 'https://urutau.itch.io/buffoons',
    githubUrl: '',
  },
  {
    id: '10',
    category: 'Academic Project',
    title: 'ReqJourney',
    description:
      'A game developed on top of GatherTown platform. Reqjourney is a gamified experience that aims to teach the basics of requirements engineering to students in interactive way.',
    tags: ['GatherTown', 'Academic'],
    demoUrl: 'https://sol.sbc.org.br/index.php/wiplay/article/view/31180',
    githubUrl: '',
  },

];

export default function Projects() {
  return (
    <section className="projects" id="projetos">
      <div className="projects-header">
        <div>
          <div className="projects-eyebrow">// PORTFOLIO</div>
          <h2 className="projects-title">Projects</h2>
          <p className="projects-subtitle">
            Academic and personal projects throughout my graduation
          </p>
        </div>
      </div>

      {/* Carrossel */}
      <Carousel projects={PROJECTS} itemsPerPage={4} />
    </section>
  );
}