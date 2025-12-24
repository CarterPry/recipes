import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Heart, ArrowRight } from "lucide-react";

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 bg-secondary/50 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1920&q=80"
          alt="Volunteers working together"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/80" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary mb-8"
          >
            <Heart className="w-10 h-10 text-primary-foreground fill-current" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6"
          >
            Ready to Make a Difference?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-primary-foreground/80 mb-10 max-w-xl mx-auto"
          >
            Your donation, no matter the size, creates ripples of change. Join thousands of supporters who are transforming lives every day.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="coral" size="xl" className="group">
              Donate Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground"
            >
              Become a Volunteer
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap justify-center gap-6 mt-12"
          >
            {["🔒 Secure Donation", "💯 100% Transparent", "🌍 Tax Deductible"].map(
              (badge) => (
                <span
                  key={badge}
                  className="text-sm text-primary-foreground/70 bg-primary-foreground/10 px-4 py-2 rounded-full"
                >
                  {badge}
                </span>
              )
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;