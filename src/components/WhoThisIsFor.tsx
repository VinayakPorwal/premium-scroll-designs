
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import AnimatedSection from './AnimatedSection';
import { Check, Sparkles, Users, Briefcase, ArrowRight, VideoIcon, TrendingUp, Target, Camera, Youtube, Instagram, Building, PieChart, Megaphone, Facebook } from 'lucide-react';

const PricingPlans: React.FC = () => {
  const creatorFeatures = [
    "Struggling with consistent high-quality content?",
    "Want to grow your audience but don't have time for editing and strategy?", 
    "Need a professional team to handle everything while you focus on creating?"
  ];

  const businessFeatures = [
    "Want to be seen as an industry leader?",
    "Looking to generate high-quality organic leads through content?",
    "Need a complete content team that does it all while you focus on business?"
  ];

  // Floating icons animation variants
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
  const handleBookCall = () => {
    document.getElementById('calendly-container')?.scrollIntoView({ behavior: 'smooth' });
  }


  return (
    <section id="pricing" className="section-spacing relative overflow-hidden">
      {/* Content Creator Icons - Left Side */}
      <motion.div
        className="absolute left-[10%] top-[30%] text-agency-orange/20 hidden md:block"
        variants={floatingIconVariants}
        animate="animate"
      >
        <Instagram size={50} />
      </motion.div>

      <motion.div
        className="absolute left-[12%] top-[48%] text-agency-orange/20 hidden md:block"
        variants={floatingIconVariants}
        animate="animate"
        transition={{ delay: 0.5 }}
      >
        <Youtube size={60} />
      </motion.div>

      <motion.div
        className="absolute left-[8%] top-[65%] text-agency-orange/20 hidden md:block"
        variants={floatingIconVariants}
        animate="animate"
        transition={{ delay: 1 }}
      >
        <Facebook size={45} />
      </motion.div>

      {/* Business Icons - Right Side */}
      <motion.div
        className="absolute right-[10%] top-[30%] text-agency-orange/20 hidden md:block"
        variants={floatingIconVariants}
        animate="animate"
      >
        <Building size={55} />
      </motion.div>

      <motion.div
        className="absolute right-[13%] top-[50%] text-agency-orange/20 hidden md:block"
        variants={floatingIconVariants}
        animate="animate"
        transition={{ delay: 0.5 }}
      >
        <PieChart size={50} />
      </motion.div>

      <motion.div
        className="absolute right-[8%] top-[65%] text-agency-orange/20 hidden md:block"
        variants={floatingIconVariants}
        animate="animate"
        transition={{ delay: 1 }}
      >
        <Megaphone size={55} />
      </motion.div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          {/* <AnimatedSection>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 sm:px-5 py-1.5 sm:py-2 mb-4 border border-agency-orange/20 shadow-sm">
              <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-agency-orange" />
              <span className="text-agency-dark font-medium text-xs sm:text-sm">Pick Your Path</span>
            </div>
          </AnimatedSection> */}

          <AnimatedSection delay={200}>
            <h2 className="text-agency-dark mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl">Who's This For?</h2>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <p className="text-gray-600 text-base sm:text-lg">
              Are you one of these?
            </p>
          </AnimatedSection>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <AnimatedSection delay={300}>
          {/* SVG Tree Connection - Hide on very small screens, simplify on medium screens */}
          <motion.svg 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[120px] sm:h-[160px] md:h-[200px] z-0 hidden sm:block" 
            viewBox="0 0 800 200"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ opacity: 1, pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            <motion.path
              d="M400 20 L200 180 M400 20 L600 180"
              stroke="#F97316"
              strokeWidth="2"
              strokeDasharray="5,5"
              fill="none"
              className="opacity-50"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            {/* Circles at connection points */}
            <motion.circle 
              cx="400" 
              cy="20" 
              r="4" 
              fill="#F97316"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, duration: 0.3 }}
            />
            <motion.circle 
              cx="200" 
              cy="180" 
              r="4" 
              fill="#F97316"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.3, duration: 0.3 }}
            />
            <motion.circle 
              cx="600" 
              cy="180" 
              r="4" 
              fill="#F97316"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.3, duration: 0.3 }}
            />
          </motion.svg>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto pt-8 sm:pt-[80px] md:pt-[120px]">
            {/* Creator Plan - Remove rotation on small screens */}
            <div className='sm:rotate-3'>
              <AnimatedSection delay={400}>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6 text-agency-orange" />
                  <h3 className="text-xl sm:text-2xl font-bold text-agency-dark">Content Creators</h3>
                </div>
                <motion.div
                  className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-agency-orange/20 h-full"
                whileHover={{ y: -10, boxShadow: '0 10px 40px -10px rgba(249, 115, 22, 0.2)' }}
                transition={{ duration: 0.3 }}
              >

                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {creatorFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2 sm:gap-3">
                      <div className="mt-1 rounded-full bg-agency-orange/20 p-1">
                        <Check className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-agency-orange" />
                      </div>
                      <span className="text-gray-600 text-sm sm:text-base">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={handleBookCall}
                  className="w-full bg-agency-orange hover:bg-agency-orange/90 text-white rounded-xl h-10 sm:h-12 text-sm sm:text-base"
                >
                  Schedule a Call
                  <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </motion.div>
            </AnimatedSection>
            </div>

            {/* Business Plan - Remove rotation on small screens */}
            <div className='sm:-rotate-3'>
              <AnimatedSection delay={500}>
                  <div className="flex items-center justify-end gap-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-agency-dark">Business Owners</h3>
                    <Briefcase className="h-5 w-5 sm:h-6 sm:w-6 text-agency-orange" />
                  </div>
                <motion.div
                  className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-agency-orange/20 h-full"
                  whileHover={{ y: -10, boxShadow: '0 10px 40px -10px rgba(249, 115, 22, 0.2)' }}
                  transition={{ duration: 0.3 }}
                >

                  <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    {businessFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2 sm:gap-3">
                        <div className="mt-1 rounded-full bg-agency-orange/20 p-1">
                          <Check className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-agency-orange" />
                        </div>
                        <span className="text-gray-600 text-sm sm:text-base">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    onClick={handleBookCall}
                    className="w-full bg-agency-orange hover:bg-agency-orange/90 text-white rounded-xl h-10 sm:h-12 text-sm sm:text-base"
                  >
                    Schedule a Call
                    <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                </motion.div>
              </AnimatedSection>
            </div>
          </div>
        </div>

        {/* <div className="text-center mt-8 sm:mt-12">
          <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Not sure which path is right for you?</p>
          <Button
            className="bg-transparent hover:bg-agency-orange/10 text-agency-orange border border-agency-orange/30 rounded-full px-4 sm:px-6 py-1 sm:py-2 text-sm sm:text-base"
          >
            Schedule a Free Consultation
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default PricingPlans;
