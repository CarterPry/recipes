import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Monthly Donor",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    quote: "Being part of Hapi's mission has been incredibly rewarding. Seeing the direct impact of my contributions on communities around the world gives me hope for a better future.",
    date: "December 2024",
  },
  {
    name: "David Chen",
    role: "Corporate Partner",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    quote: "Partnering with Hapi was one of the best decisions our company made. Their transparency and dedication to creating sustainable change aligned perfectly with our values.",
    date: "November 2024",
  },
  {
    name: "Maria Rodriguez",
    role: "Volunteer Coordinator",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    quote: "I've worked with many organizations, but Hapi's commitment to community empowerment is unmatched. They truly listen to and work alongside the people they serve.",
    date: "October 2024",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What People Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear from our community of donors, partners, and volunteers about their experience with Hapi.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Card */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-card rounded-3xl p-8 lg:p-12 shadow-elevated relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-8 right-8 lg:top-12 lg:right-12">
                <Quote className="w-12 h-12 lg:w-16 lg:h-16 text-primary/20" />
              </div>

              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-2xl overflow-hidden shadow-lg border-4 border-primary/20">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <p className="text-lg lg:text-xl text-foreground leading-relaxed mb-6 italic">
                    "{testimonials[currentIndex].quote}"
                  </p>
                  <div>
                    <h4 className="font-heading text-xl font-bold text-foreground">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-primary font-medium">
                      {testimonials[currentIndex].role}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {testimonials[currentIndex].date}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors duration-300 flex items-center justify-center"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-primary w-8"
                        : "bg-border hover:bg-muted-foreground"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-12 h-12 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors duration-300 flex items-center justify-center"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;