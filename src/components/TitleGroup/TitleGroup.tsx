import './TitleGroup.scss';

interface ContentBoxProps {
  title?: string;
  subtitle?: string;
}

const TitleGroup = ({ title, subtitle }: ContentBoxProps) => {
  if (!title && !subtitle) return null;

  return (
    <div className="title-group">
      {title && <h1 className="title-group__title">{title}</h1>}
      {subtitle && <p className="title-group__subtitle">{subtitle}</p>}
    </div>
  );
};

export { TitleGroup };
