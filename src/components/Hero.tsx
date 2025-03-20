
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import AnimatedSection from './AnimatedSection';
import { Play, ArrowRight, Sparkles, Calendar, Camera, Film, VideoIcon, Video, PlayCircle, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import data from '../data/data.json';

const Hero: React.FC = () => {

  // Floating icons animation
  const floatingIconVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section 
      className="relative overflow-hidden pt-32 pb-30 md:pt-36"
    >
      {/* Floating icons */}
      <motion.div 
        className="absolute left-[5%] top-[25%] text-agency-orange/50"
        variants={floatingIconVariants}
        animate="animate"
      >
        <Camera size={60} className='-rotate-12' />
      </motion.div>
      
      <motion.div 
        className="absolute right-[12%] top-[10%] text-agency-orange/40"
        variants={floatingIconVariants}
        animate="animate"
        transition={{ delay: 0.5 }}
      >
        <TrendingUp size={70}   />
      </motion.div>
      <motion.div 
        className="absolute right-[10%] top-[40%] text-agency-gold/40"
        variants={floatingIconVariants}
        animate="animate"
        transition={{ delay: 1 }}
      >
        <Film size={80} className='rotate-12' />
      </motion.div>
      
      <motion.div 
        className="absolute left-[15%] bottom-[40%] text-agency-orange/40"
        variants={floatingIconVariants}
        animate="animate"
        transition={{ delay: 0.5 }}
      >
        <VideoIcon size={70} />
      </motion.div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <AnimatedSection animation="fade-in">
            <div className="inline-flex items-center gap-2 rounded-full bg-white shadow-sm px-5 py-2 mb-6 border border-agency-orange/20">
              <Sparkles className="h-4 w-4 text-agency-orange" />
              <span className="text-agency-dark font-medium text-sm">Premium Content Creation Agency</span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200} animation="fade-up">
            <h1 className="font-bold text-agency-dark mb-6">
              <span className="text-agency-orange">C<PlayCircle className="inline-block" color="#F97316" size={40} />ntent </span>that Converts &<br className="hidden md:block" />
              Brands that <span className="text-agency-orange">Stand Out</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={400} animation="fade-up">
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
              {data.hero.subtitle}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={500} animation="fade-up" className="w-full max-w-5xl mx-auto mt-10">
            {/* Book a Call Button below VSL */}
            <motion.div 
              className="flex justify-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-agency-orange hover:bg-agency-orange/90 text-white font-medium px-8 rounded-full h-14 flex items-center gap-2"
              >
                <Calendar className="h-5 w-5" />
                Book a Free Strategy Call
              </Button>
            </motion.div>

            {/* VSL Section */}
            <div className="vsl-container bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-agency-orange/20">
              <div className="relative w-full h-0 pb-[56.25%] bg-gray-100 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-agency-dark text-center flex flex-col items-center">
                    <motion.div 
                      className="w-20 h-20 rounded-full bg-agency-orange/30 flex items-center justify-center mb-5 glass"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    >
                      <Play className="h-10 w-10 text-agency-dark" />
                    </motion.div>
                    <p className="text-xl font-medium">Watch Our Video Sales Letter</p>
                    <p className="text-sm text-gray-500 mt-2">Discover how we transform brands</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Hero;
