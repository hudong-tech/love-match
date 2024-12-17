interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'primary' | 'secondary';
}

export function Section({ children, className = '', background = 'primary' }: SectionProps) {
  return (
    <section 
      className={`section-padding ${
        background === 'secondary' ? 'bg-background-secondary' : 'bg-background'
      } ${className}`}
    >
      {children}
    </section>
  );
} 