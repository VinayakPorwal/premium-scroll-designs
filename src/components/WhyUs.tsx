import React, { useRef, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

// Content data (unchanged)
const reasons = [
    {
        title: "Reason 1",
        description:
            "Anyone can hire an editor or a designer, and most agencies focus purely on management—video editing, thumbnails, and scheduling. But we're different. Our focus isn't just on content production; it's on delivering real results—more views, higher engagement, and actual brand growth. And that doesn't come from just editing—it starts with the right content strategy and ideas. That's where we excel.",
        position: [-350, 0],
    },
    {
        title: "Reason 2",
        description:
            "We've worked with 50+ clients, refining and perfecting our system over time. Experience is everything. Of course, you've heard that beginners should get a chance—but let's be real, 90% of them fail. Why take that risk when you have a proven team that knows exactly what works? We eliminate the guesswork.",
        position: [350, 0],
    },
    {
        title: "Reason 3",
        description:
            "Your convenience and satisfaction are our top priorities. We make the entire process seamless, from ideation to execution, ensuring that all you have to do is shoot the content while we handle the rest. No stress, no guesswork—just results.",
        position: [0, 360],
    },
];

// Animation variants for floating cards
const floatingAnimation = {
    initial: { y: 0 },
    animate: {
        y: [-10, 10, -10],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};

// Mobile Reason Card Component
interface MobileReasonCardProps {
    title: string;
    description: string;
    index: number;
    progress: number;
    maxHeight?: number;
    className?: string;
}

const MobileReasonCard: React.FC<MobileReasonCardProps> = ({ title, description, index, progress, maxHeight, className }) => {
    const isActive = progress >= index / reasons.length;
    const cardRef = useRef(null);
    
    return (
        <motion.div
            ref={cardRef}
            className={cn(
                "p-6 bg-white rounded-xl shadow-lg border border-agency-orange/30",
                "transition-all duration-800 ease-out",
                "sticky",
                isActive ? "opacity-100" : "opacity-50 translate-y-[100px]",
                className
            )}
            style={{
                top: `${index*10 + 80}px`,
                zIndex: index
            }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            <div className="mb-4 h-full flex flex-col">
                <span className="text-agency-orange font-bold text-lg bg-agency-orange/10 rounded-full py-2 px-3 m-2">{index + 1}</span>
                <div className="flex-grow">{description}</div>
            </div>
        </motion.div>
    );
};

// Desktop Reason Card Component
const DesktopReasonCard = ({ title, description, index }) => (
    <motion.div
        className="p-6 bg-white rounded-xl shadow-lg border border-agency-orange/30 cursor-pointer"
        variants={floatingAnimation}
        initial="initial"
        animate="animate"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
        <div className="mb-4">
            <span className="text-agency-orange font-bold text-lg bg-agency-orange/10 rounded-full py-2 px-3 m-2">{index + 1}</span>
            {description}
        </div>
    </motion.div>
);

// This component creates a 500x500 container for desktop, but stacks cards vertically on mobile
const CircleLayout = () => {
    const containerRef = useRef(null);
    const headingRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });
    const [progressValue, setProgressValue] = useState(0);
    const [maxCardHeight, setMaxCardHeight] = useState(0);
    const [headingVisible, setHeadingVisible] = useState(true);

    React.useEffect(() => {
        const unsubscribe = scrollYProgress.onChange(value => {
            setProgressValue(value);
            // Hide heading when last card is in view (progress > 0.8)
            setHeadingVisible(value < 0.7);
        });
        
        return () => unsubscribe();
    }, [scrollYProgress]);

    // Calculate max height of cards on mount and resize
    React.useEffect(() => {
        const calculateMaxHeight = () => {
            if (window.innerWidth >= 768) return; // Only for mobile view
            
            const cards = document.querySelectorAll('.mobile-reason-card');
            let maxHeight = 0;
            
            cards.forEach(card => {
                const height = card.getBoundingClientRect().height;
                maxHeight = Math.max(maxHeight, height);
            });
            
            setMaxCardHeight(maxHeight);
        };

        calculateMaxHeight();
        window.addEventListener('resize', calculateMaxHeight);
        
        return () => window.removeEventListener('resize', calculateMaxHeight);
    }, []);

    // Dimensions of container and circle
    const containerSize = 500;
    const centerX = containerSize / 2;
    const centerY = containerSize / 2;
    const radius = 180;

    return (
        <>
            {/* Desktop layout - Hidden on mobile */}
            <div className="relative w-[500px] h-[500px] mx-auto my-8 hidden md:block">
                {/* Animated rotating SVG circle */}
                <motion.svg 
                    width={containerSize} 
                    height={containerSize} 
                    className="absolute top-0 left-0"
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    <circle
                        cx={centerX}
                        cy={centerY}
                        r={radius}
                        fill="none"
                        stroke="#FFA500"
                        strokeWidth="2"
                        strokeDasharray="10,10"
                        className="opacity-50"
                    />
                </motion.svg>

                {/* Position each card at the computed (x, y) points */}
                {reasons.map((reason, index) => {
                    return (
                        <motion.div
                            key={index}
                            style={{ left: `${reason.position[0]}px`, top: `${reason.position[1]}px` }}
                            className="absolute max-w-lg w-max"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <DesktopReasonCard index={index} title={reason.title} description={reason.description} />
                        </motion.div>
                    );
                })}

                <motion.div 
                    className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <span className="text-agency-orange font-bold text-5xl">3</span>
                    <p className="text-gray-600 px-2 text-lg font-medium">Reasons</p>
                </motion.div>
            </div>

            {/* Mobile layout - Shown only on mobile */}
            <div ref={containerRef} className="md:hidden space-y-3 px-4 py-6">
                <motion.div 
                    ref={headingRef}
                    className={cn(
                        "sticky top-0 z-40 bg-transparent py-4 flex items-center justify-center mb-8",
                        "transition-all duration-300",
                        headingVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
                    )}
                >
                    <span className="text-agency-orange font-bold text-4xl">3</span>
                    <p className="text-gray-600 px-2 text-lg font-medium">Reasons</p>
                </motion.div>
                
                <div className='space-y-3'>
                    {reasons.map((reason, index) => (
                        <MobileReasonCard
                            key={index}
                            index={index}
                            title={reason.title}
                            description={reason.description}
                            progress={progressValue}
                            maxHeight={maxCardHeight}
                            className="mobile-reason-card"
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

const WhyUs = () => (
    <section className="py-16 bg-transparent">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                {/* <AnimatedSection>
                    <div className="inline-flex items-center gap-2 rounded-full bg-white shadow px-5 py-2 mb-4 border border-agency-orange">
                        <Sparkles className="h-5 w-5 text-agency-orange" />
                        <span className="text-gray-800 font-medium text-sm">Why Choose Us</span>
                    </div>
                </AnimatedSection> */}
                <AnimatedSection delay={150}>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Why Choose <span className="text-agency-orange">Us?</span>
                    </h2>
                </AnimatedSection>
                {/* <AnimatedSection delay={300}>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Here's why clients should choose Content Finix, written professionally without mentioning <span className="text-agency-orange">
                            'money'
                        </span> directly, as you requested, and with added ideas for impact.
                    </p>
                </AnimatedSection> */}
            </div>
            <CircleLayout />
        </div>
    </section>
);

export default WhyUs;
