import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Users, Globe, Sparkles } from "lucide-react";
import volunteersImg from "@/assets/volunteers-1.jpeg";

const features = [
  {
    icon: Heart,
    title: "Compassionate Care",
    description: "Every action we take is driven by our deep commitment to helping families in our community.",
  },
  {
    icon: Users,
    title: "Community First",
    description: "We work alongside local volunteers to create sustainable, lasting support for those in need.",
  },
  {
    icon: Globe,
    title: "Local Impact",
    description: "Our programs serve families across multiple communities in the greater region.",
  },
  {
    icon: Sparkles,
    title: "Hand to Hand",
    description: "Direct support from community to community. Every donation goes directly to families.",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/50 -skew-x-12 translate-x-1/4" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Image Side */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="rounded-3xl overflow-hidden shadow-elevated">
                <img
                  src={volunteersImg}
                  alt="PryCare volunteers at food distribution event"
                  className="w-full h-[500px] object-cover"
                />
              </div>

              {/* Experience Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-8 -right-8 bg-primary text-primary-foreground rounded-2xl p-6 shadow-elevated"
              >
                <p className="font-heading text-5xl font-bold">10K+</p>
                <p className="text-primary-foreground/80">Families Served</p>
              </motion.div>

              {/* Decorative Element */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-4 border-accent rounded-2xl -z-10" />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              About Our Mission
            </span>

            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Community Helping Community,{" "}
              <span className="text-primary">Hand to Hand</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              PryCare is dedicated to serving families in need through 
              community food programs and volunteer support. We believe that 
              neighbors helping neighbors creates the strongest foundation 
              for lasting change.
            </p>

            <p className="text-muted-foreground mb-10">
              Our volunteer-driven approach ensures that every donation and 
              every hour of service goes directly to supporting families 
              in our community.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-semibold text-foreground mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
