import SkillCard from './SkillCard';
import './TechStacks.css';

export default function TechStacks() {
  return (
    <div className="tech-stacks">
      <div className="tech-stacks-glow" />

      <SkillCard
        variant="indigo"
        icon="terminal"
        title="Full Stack"
        subtitle="Frontend & Backend Development"
        badge="Active Core"
        blocks={[
          {
            label: 'FRONTEND',
            dotColor: 'indigo',
            tags: ['JavaScript', 'TypeScript', 'React'],
          },
          {
            label: 'BACKEND',
            dotColor: 'purple',
            tags: ['Python', 'Go', 'FastAPI', 'Node.js', 'Docker'],
            divider: true,
          },
        ]}
      />

      <SkillCard
        variant="sky"
        icon="query_stats"
        title="Data Analytics"
        subtitle="Business Intelligence & Data Insights"
        badge="Expansion"
        blocks={[
          {
            label: 'STACK DATA ANALYSIS',
            dotColor: 'sky',
            tags: ['PostgreSQL', 'SQL', 'Python', 'Power BI'],
          },
        ]}
      />
    </div>
  );
}