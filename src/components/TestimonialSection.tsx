import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Card, CardContent } from "./ui/card";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
}

interface TestimonialSectionProps {
  testimonials?: Testimonial[];
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({
  testimonials = [
    {
      id: 1,
      name: "Pradip Chauhan",
      role: "Founder & MD",
      company: "Codeology AI",
      quote:
        "The Advertisments produced exceeded our expectations. The attention to detail and audience engagement ability transformed our brand completely.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    },
    {
      id: 2,
      name: "Nootan Raghav",
      role: "Sr. Graphic Designer",
      company: "Codeology AI",
      quote:
        "The Graphics were really appealing and must be appreciated that took our business to reach new heights by engaging our clients to our latest offers",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
    {
      id: 3,
      name: "Abhishek Kapoor",
      role: "IT Head",
      company: "Nexus Properties",
      quote:
        "Amazing work! The website designed was not only visually stunning but also user-friendly, resulting in increased traffic and customer engagement.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    },
  ],
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  };

  return (
    <section className="w-full py-16 px-4 md:px-8 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Client Testimonials
        </h2>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="w-full bg-gray-800 border-gray-700">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <Avatar className="h-20 w-20 border-2 border-purple-500">
                        <AvatarImage
                          src={testimonials[currentIndex].avatar}
                          alt={testimonials[currentIndex].name}
                        />
                        <AvatarFallback className="bg-purple-800 text-white">
                          {testimonials[currentIndex].name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                    </div>

                    <div className="flex-1 font-roboto text-center md:text-left">
                      <div className="mb-4">
                        <svg
                          className="h-8 w-8 text-purple-500 mb-2 mx-auto md:mx-0"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                        <p className="text-lg text-gray-300 italic">
                          "{testimonials[currentIndex].quote}"
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xl font-semibold text-white">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-purple-400">
                          {testimonials[currentIndex].role},{" "}
                          {testimonials[currentIndex].company}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full bg-gray-800 border-gray-700 hover:bg-gray-700 text-white"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous testimonial</span>
            </Button>

            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${index === currentIndex ? "w-6 bg-purple-500" : "w-2 bg-gray-600"}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full bg-gray-800 border-gray-700 hover:bg-gray-700 text-white"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
