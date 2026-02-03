"use client";

import { useEffect, useState } from 'react';
import { LiquidMetal, liquidMetalPresets } from '@paper-design/shaders-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';

interface LiquidMetalHeroProps {
  badge?: string;
  title: string;
  subtitle: string;
  primaryCtaLabel: string;
  secondaryCtaLabel?: string;
  onPrimaryCtaClick: () => void;
  onSecondaryCtaClick?: () => void;
  features?: string[];
}

export default function LiquidMetalHero({
  badge,
  title,
  subtitle,
  primaryCtaLabel,
  secondaryCtaLabel,
  onPrimaryCtaClick,
  onSecondaryCtaClick,
  features = [],
}: LiquidMetalHeroProps) {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    if (typeof document === 'undefined') {
      return;
    }

    const updateTheme = () => {
      setIsLightMode(document.body.classList.contains('light-mode'));
    };

    updateTheme();
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1
    }
  };

  // Split title for styling
  const titleParts = title.split(' ');
  const firstWord = titleParts[0];
  const restOfTitle = titleParts.slice(1).join(' ');

  return (
    <section className="relative min-h-[100vh] w-full overflow-hidden bg-background text-foreground flex items-center justify-center py-20">
      <LiquidMetal
        {...liquidMetalPresets[2]}
        colorBack={isLightMode ? '#ffffff' : '#000000'}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />
      
      <div className="relative z-10 container mx-auto px-8 lg:px-16 max-w-[1400px]">
        <motion.div 
          className="text-center space-y-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {badge && (
            <motion.div 
              className="flex justify-center"
              variants={itemVariants}
            >
              <Badge 
                variant="secondary" 
                className="bg-foreground/10 text-foreground border-foreground/20 hover:bg-foreground/15 transition-colors duration-300 backdrop-blur-sm text-sm px-4 py-2"
              >
                {badge}
              </Badge>
            </motion.div>
          )}
          
          <motion.div 
            className="space-y-10"
            variants={itemVariants}
          >
            <motion.h1 
              role="heading" 
              aria-level={1}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[1.15] tracking-tight px-4"
              variants={itemVariants}
            >
              <span className="text-foreground">{firstWord} </span>
              <span className="text-foreground/50">{restOfTitle}</span>
            </motion.h1>
            
            <motion.p 
              className="max-w-6xl mx-auto text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/70 leading-[1.7] px-8"
              variants={itemVariants}
            >
              {subtitle}
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="flex flex-row gap-5 justify-center items-center"
            variants={buttonVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={onPrimaryCtaClick}
                className="bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 text-lg font-semibold h-16 px-12 rounded-lg min-w-[220px]"
              >
                {primaryCtaLabel}
              </Button>
            </motion.div>
            
            {secondaryCtaLabel && onSecondaryCtaClick && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  onClick={onSecondaryCtaClick}
                  className="bg-background text-foreground border-2 border-foreground/20 hover:bg-foreground/10 hover:border-foreground/30 transition-all duration-300 text-lg font-semibold h-16 px-12 rounded-lg min-w-[220px]"
                >
                  {secondaryCtaLabel}
                </Button>
              </motion.div>
            )}
          </motion.div>
          
          {features.length > 0 && (
            <motion.div 
              className="pt-6"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="rounded-3xl bg-foreground/[0.2] border-foreground/30 backdrop-blur-2xl shadow-2xl overflow-hidden">
                  <div className="px-12 py-14">
                    <div className="grid grid-cols-3 gap-16">
                      {features.map((feature, index) => (
                        <motion.div 
                          key={index}
                          className="flex items-center justify-center text-center"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ 
                            duration: 0.6, 
                            delay: 0.8 + (index * 0.1)
                          }}
                        >
                          <p className="text-foreground/80 font-medium text-xl lg:text-2xl whitespace-nowrap">
                            {feature}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}