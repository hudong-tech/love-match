interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'primary' | 'secondary';
  fullScreen?: boolean;
  id?: string;
}

export function Section({ 
  children, 
  className = '', 
  background = 'primary',
  fullScreen = false,
  id
}: SectionProps) {
  return (
    <section 
      id={id}
      className={`
        relative
        ${fullScreen ? 'snap-section flex items-center justify-center' : ''}
        ${background === 'secondary' ? 'bg-background-secondary' : 'bg-background'}
        ${className}
      `}
    >
      <div className="w-full section-padding">
        {children}
      </div>
    </section>
  );
} 