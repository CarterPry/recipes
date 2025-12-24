import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Droplets, BookOpen, Stethoscope } from "lucide-react";

const causes = [
  {
    icon: Droplets,
    title: "Clean Water Access",
    description: "Providing clean, safe drinking water to communities facing water scarcity and contamination.",
    raised: 125000,
    goal: 150000,
    image: "https://images.unsplash.com/photo-1541544537156-7627a7a4aa1c?w=600&q=80",
    color: "from-blue-400 to-cyan-500",
  },
  {
    icon: BookOpen,
    title: "Education for All",
    description: "Building schools and providing resources to ensure every child has access to quality education.",
    raised: 89000,
    goal: 120000,
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80",
    color: "from-amber-400 to-orange-500",
  },
  {
    icon: Stethoscope,
    title: "Healthcare Programs",
    description: "Delivering essential medical care and building health facilities in underserved regions.",
    raised: 178000,
    goal: 200000,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
    color: "from-rose-400 to-pink-500",
  },
];

const CauseCard = ({ cause, index }: { cause: typeof causes[0]; index: number }) => {
  const progress = (cause.raised / cause.goal) * 100;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-2"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={cause.image}
          alt={cause.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
        
        {/* Icon Badge */}
        <div className={`absolute top-4 left-4 w-14 h-14 rounded-2xl bg-gradient-to-br ${cause.color} flex items-center justify-center shadow-lg`}>
          <cause.icon className="w-7 h-7 text-primary-foreground" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-heading text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {cause.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
          {cause.description}
        </p>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: `${progress}%` } : {}}
              transition={{ duration: 1, delay: 0.5 + index * 0.15 }}
              className="h-full bg-primary rounded-full"
            />
          </div>
          <div className="flex justify-between mt-2 text-sm">
            <span className="font-semibold text-foreground">
              ${cause.raised.toLocaleString()}
            </span>
            <span className="text-muted-foreground">
              Goal: ${cause.goal.toLocaleString()}
            </span>
          </div>
        </div>

        {/* CTA */}
        <Button variant="outline" className="w-full group/btn">
          Donate Now
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </div>
    </motion.div>
  );
};

const Causes = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="causes" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Causes
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured Campaigns
          </h2>
          <p className="text-lg text-muted-foreground">
            Join our ongoing campaigns and help us create lasting change in communities around the world.
          </p>
        </motion.div>

        {/* Causes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {causes.map((cause, index) => (
            <CauseCard key={cause.title} cause={cause} index={index} />
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button variant="default" size="lg">
            View All Campaigns
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Causes;