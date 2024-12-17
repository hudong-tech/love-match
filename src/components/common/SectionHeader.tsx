import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  description: string;
  className?: string;
}

export function SectionHeader({ title, description, className = '' }: SectionHeaderProps) {
  return (
    <motion.div 
      className={`text-center mb-12 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl md:text-4xl font-semibold text-text-primary mb-4">
        {title}
      </h2>
      <p className="text-lg text-text-secondary max-w-2xl mx-auto">
        {description}
      </p>
    </motion.div>
  );
} 