import SkillTag from './SkillTag';
import './SkillCard.css';

export default function SkillCard({
  variant = 'indigo',
  icon,
  title,
  subtitle,
  badge,
  blocks = [],
}) {
  return (
    <div className={`skill-card skill-card--${variant}`}>
      {/* Header */}
      <div className="skill-card-header">
        <div className="skill-card-header-left">
          <div className="skill-card-icon">
            <span className="material-symbols-outlined skill-card-icon-symbol">
              {icon}
            </span>
          </div>
          <div>
            <h3 className="skill-card-title">{title}</h3>
            <span className="skill-card-subtitle">{subtitle}</span>
          </div>
        </div>
        <span className="skill-card-badge">{badge}</span>
      </div>

      {/* Blocks */}
      {blocks.map((block, i) => (
        <div
          key={i}
          className={`skill-block ${block.divider ? 'skill-block--divider' : ''}`}
        >
          <div className="skill-block-label">
            <span className={`skill-dot skill-dot--${block.dotColor}`} />
            <span>{block.label}</span>
          </div>
          <div className="skill-block-tags">
            {block.tags.map((tag) => (
              <SkillTag key={tag} variant={variant}>
                {tag}
              </SkillTag>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}