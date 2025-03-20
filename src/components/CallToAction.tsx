
import React, { useRef, useEffect } from 'react';
import AnimatedSection from './AnimatedSection';
import { Button } from '@/components/ui/button';
import { ArrowRight, VideoIcon, TrendingUp, Target, Sparkles, Users, Phone, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

const CallToAction: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const circleOneRef = useRef<HTMLDivElement>(null);
  const circleTwoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!parallaxRef.current) return;

      const container = parallaxRef.current;
      const rect = container.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const deltaX = (mouseX - centerX) / centerX;
      const deltaY = (mouseY - centerY) / centerY;

      if (circleOneRef.current) {
        circleOneRef.current.style.transform = `translate(${deltaX * -30}px, ${deltaY * -30}px)`;
      }

      if (circleTwoRef.current) {
        circleTwoRef.current.style.transform = `translate(${deltaX * 20}px, ${deltaY * 20}px)`;
      }
    };

    const container = parallaxRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

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

  return (
    <section id="contact" className="section-spacing relative overflow-hidden" ref={parallaxRef}>
      {/* Floating icons */}
      <motion.div
        className="absolute right-[55%] top-[10%] text-agency-orange/20"
        variants={floatingIconVariants}
        animate="animate"
      >
        <VideoIcon size={60} />
      </motion.div>

      <motion.div
        className="absolute left-[10%] bottom-[10%] text-agency-orange/20"
        variants={floatingIconVariants}
        animate="animate"
        transition={{ delay: 1 }}
      >
        <TrendingUp size={50} />
      </motion.div>

      <motion.div
        className="absolute right-[10%] bottom-[30%] text-agency-orange/20"
        variants={floatingIconVariants}
        animate="animate"
        transition={{ delay: 0.5 }}
      >
        <Target size={70} />
      </motion.div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 mb-4 border border-agency-orange/20 shadow-sm">
              <Sparkles className="h-4 w-4 text-agency-orange" />
              <span className="text-agency-dark font-medium text-sm">Book a Call</span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <h2 className="text-agency-dark mb-6">Still Haven't booked?
              <span className="text-agency-orange"> Oh!</span></h2>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <p className="text-gray-600 text-lg">
              Book a call with us to discuss how we can help you transform your content.
            </p>
          </AnimatedSection>
        </div>
         {/* CTA Button */}
         <AnimatedSection delay={400} className="text-center mb-10">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-agency-orange hover:bg-agency-orange/90 text-white px-12 rounded-full h-14 text-lg font-medium"
                >
                  Schedule Your Discovery Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </AnimatedSection>

        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border border-agency-orange/20 p-12">
          <div className="max-w-6xl mx-auto">
            {/* Section Title */}
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-agency-dark flex items-center justify-center gap-3">
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Settings className="h-8 w-8 text-agency-orange" />
                </motion.div>
                What Will Happen Next?
              </h2>
            </AnimatedSection>

            {/* Horizontal Timeline */}
            <AnimatedSection delay={200} className="relative mb-16">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="relative"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-14 bg-white rounded-full border-2 border-agency-orange flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 1 }}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-agency-orange font-bold text-2xl"
                    >
                      1
                    </motion.div>
                  </div>
                  <div className="pt-20 bg-gray-50/80 p-6 rounded-lg border border-agency-orange/10 h-full">
                    <h3 className="text-agency-orange text-lg font-medium mb-2">Discovery Call</h3>
                    <p className="text-gray-600 text-sm">We understand your goals, content vision, and expectations. If it's a good fit, we move forward.</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="relative"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-14 bg-white rounded-full border-2 border-agency-orange flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 1 }}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-agency-orange font-bold text-2xl"
                    >
                      2
                    </motion.div>
                  </div>
                  <div className="pt-20 bg-gray-50/80 p-6 rounded-lg border border-agency-orange/10 h-full">
                    <h3 className="text-agency-orange text-lg font-medium mb-2">Onboarding Call</h3>
                    <p className="text-gray-600 text-sm">Once we sign the deal, we dive deep into your business and content strategy.</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="relative"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-14 bg-white rounded-full border-2 border-agency-orange flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 1 }}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-agency-orange font-bold text-2xl"
                    >
                      3
                    </motion.div>
                  </div>
                  <div className="pt-20 bg-gray-50/80 p-6 rounded-lg border border-agency-orange/10 h-full">
                    <h3 className="text-agency-orange text-lg font-medium mb-2">Strategy & Execution</h3>
                    <p className="text-gray-600 text-sm">We create a structured content plan and kickstart the production process.</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="relative"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-14 bg-white rounded-full border-2 border-agency-orange flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 1 }}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-agency-orange font-bold text-2xl"
                    >
                      4
                    </motion.div>
                  </div>
                  <div className="pt-20 bg-gray-50/80 p-6 rounded-lg border border-agency-orange/10 h-full">
                    <h3 className="text-agency-orange text-lg font-medium mb-2">Content Launch</h3>
                    <p className="text-gray-600 text-sm">Your high-quality videos go live with continuous optimization and analysis.</p>
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
