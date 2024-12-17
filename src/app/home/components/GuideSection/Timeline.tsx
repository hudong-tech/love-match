import { motion } from 'framer-motion'

interface TimelineStep {
  title: string;
  description: string;
  icon: string;
  step: number;
  duration?: string;
  details?: string;
}

interface TimelineProps {
  steps: TimelineStep[];
}

export function Timeline({ steps }: TimelineProps) {
  return (
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="grid md:grid-cols-3 gap-8 md:gap-16 relative">
        <div className="hidden md:block absolute top-[88px] left-[35%] right-[15%] h-[2px]">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-primary/30 to-transparent blur-[2px]" />
        </div>

        {steps.map((step, index) => (
          <div key={step.step} className="relative">
            {index !== steps.length - 1 && (
              <motion.div 
                className="hidden md:flex absolute top-[84px] -right-8 transform z-10"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.3 + 0.2 }}
              >
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-primary/60 to-primary/40 rotate-45 transform translate-x-1/2 blur-[1px]" />
              </motion.div>
            )}

            <div className="md:grid md:grid-cols-[1fr,auto] md:gap-6 items-start">
              <motion.div 
                className="text-right hidden md:block"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="space-y-2 mb-4">
                  <span className="text-sm font-medium text-primary/90">
                    STEP {step.step}
                  </span>
                  <h4 className="text-lg font-semibold text-text-primary">
                    {step.title}
                  </h4>
                  {step.duration && (
                    <p className="text-sm text-text-secondary/80">
                      预计用时: {step.duration}
                    </p>
                  )}
                </div>
                <p className="text-sm text-text-secondary/90 leading-relaxed">
                  {step.details || step.description}
                </p>
              </motion.div>

              <motion.div
                className="relative flex flex-col items-center text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <motion.div
                  className="relative mb-8"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 260,
                    damping: 20 
                  }}
                >
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary/90 to-primary/70 flex items-center justify-center shadow-lg shadow-primary/10">
                    <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/30 to-transparent" />
                    <span className="relative text-2xl font-bold text-white">
                      {step.step}
                    </span>
                  </div>
                </motion.div>

                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative text-4xl mb-4 block transform group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </span>
                </div>
                
                <div className="space-y-3 relative md:hidden">
                  <h3 className="text-xl font-semibold text-text-primary">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary/90 leading-relaxed">
                    {step.description}
                  </p>
                  {step.duration && (
                    <p className="text-sm text-text-secondary/80">
                      预计用时: {step.duration}
                    </p>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 