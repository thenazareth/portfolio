import './SkillTag.css';

export default function SkillTag({ variant = 'indigo', children }) {
  return <span className={`skill-tag skill-tag--${variant}`}>{children}</span>;
}