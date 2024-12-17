interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'primary' | 'secondary';
  fullScreen?: boolean;
}

export function Section({ 
  children, 
  className = '', 
  background = 'primary',
  fullScreen = false
}: SectionProps) {
  return (
    <section 
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