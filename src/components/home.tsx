import { motion, useScroll, useSpring } from "framer-motion";
import { Github, Instagram, Linkedin, Mail, ExternalLink, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Separator } from "./ui/separator";
// Import the components directly from their files
// Assuming they are exported as default exports

import TestimonialSection from "./TestimonialSection";
import CinematicMediaGrid from "./CinematicMediaGrid";
import PostersMediaGrid from './PostersMediaGrid';
import ReelsMediaGrid from './ReelsMediaGrid'

const HomePage = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-zinc-900 text-white font-yanone">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 transform origin-[0%] z-50"
        style={{ scaleX }}
      />
      
      {/* Header Section */}
      <header className="container mx-auto px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-4">
            Hey, I'm Sarthak!
          </h1>
          <p className="text-2xl text-zinc-300 mb-6">
            Creative <span className="text-4xl font-bold">Video Editor</span> and <span className="text-4xl font-bold">Graphic Designer</span> with over 1+ years of
            experience crafting compelling visual stories and stunning designs
            that captivate audiences.
          </p>
          <div className="flex space-x-4">
            <Button
            onClick={() => window.open('https://www.instagram.com/the.unframed.guy')}
              size="icon"
              className="bg-zinc-700 rounded-full hover:bg-zinc-800"
            >
              <Instagram className="h-5 w-5" />
            </Button>
            <Button
            onClick={() => window.open('https://www.linkedin.com/in/hellosarthak')}
              size="icon"
              className="bg-zinc-700 rounded-full hover:bg-zinc-800"
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button 
              onClick={() => window.open('https://www.github.com/hackbysarthak03')}
              size="icon"
              className="bg-zinc-700 rounded-full hover:bg-zinc-800"
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button 
              onClick={() => window.open('mailto:vsarthak62@gmail.com')}
              size="icon"
              className="bg-zinc-700 rounded-full hover:bg-zinc-800"
            >
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </header>

      {/* Stats Section */}
      <section className="py-12 bg-zinc-850">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex items-center justify-center space-x-3 mb-2">
              <TrendingUp className="h-8 w-8 text-green-400" />
              <motion.div
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.4,
                  type: "spring",
                  stiffness: 200
                }}
                viewport={{ once: true }}
              >
                <h3 className="text-4xl md:text-4xl text-zinc-200">
                  Creations crossed{" "}
                  <motion.span
                    className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
                    initial={{ backgroundPosition: "0% 50%" }}
                    animate={{ backgroundPosition: "100% 50%" }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }}
                    style={{
                      backgroundSize: "200% 200%"
                    }}
                  >
                    50K+
                  </motion.span>{" "}
                  views
                </h3>
              </motion.div>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl text-zinc-400"
            >
              in last 30 days on various social media platforms
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Showcase Section */}
      <section className="py-16 bg-zinc-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-6xl font-bold mb-8 text-center">
              Creations
            </h2>
            <p className="text-center text-2xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Browse through my portfolio of cinematic videos, social media reels, and poster designs.
            </p>
            <motion.div
              className="text-4xl mb-8 relative inline-block"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="relative">
                Cinematic
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "150%" }}
                  transition={{
                    duration: 1.2,
                    delay: 0.8,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true }}
                />

              </span>
            </motion.div>
            <div className="w-full my-16">
              <CinematicMediaGrid />
            </div>
            <motion.div
              className="text-4xl mb-8 relative inline-block"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="relative">
                Reels & Advertisments
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "150%" }}
                  transition={{
                    duration: 1.2,
                    delay: 0.8,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true }}
                />

              </span>
            </motion.div>
            <div className="w-full my-16">
              <ReelsMediaGrid />
            </div>
            <motion.div
              className="text-4xl mb-8 relative inline-block"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="relative">
                Carousels & Posters
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "150%" }}
                  transition={{
                    duration: 1.2,
                    delay: 0.8,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true }}
                />

              </span>
            </motion.div>
            <div className="w-full my-16">
              <PostersMediaGrid />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-zinc-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <TestimonialSection />
          </motion.div>
        </div>
      </section>
      

      {/* Footer Section */}
      <footer className="bg-zinc-950 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold">Get In Touch</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-1"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="bg-zinc-800 border-zinc-700"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-1"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email"
                      className="bg-zinc-800 border-zinc-700"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-1"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    className="bg-zinc-800 border-zinc-700 min-h-[120px]"
                  />
                </div>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                  Send Message
                </Button>
              </div>
            </motion.div>

            {/* Additional Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold">Connect</h3>
              <div className="space-y-4">
                <a
                  href="https://www.instagram.com/the.unframed.guy"
                  className="flex items-center space-x-2 text-zinc-300 hover:text-purple-400 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                  <span>@the.unframed.guy</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/hellosarthak"
                  className="flex items-center space-x-2 text-zinc-300 hover:text-purple-400 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span>hellosarthak</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-2 text-zinc-300 hover:text-purple-400 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span>vsarthak62@gmail.com</span>
                </a>
                <a
                  href="https://heybuddy.vercel.app"
                  className="flex items-center space-x-2 text-zinc-300 hover:text-purple-400 transition-colors"
                >
                  <ExternalLink className="h-5 w-5" />
                  <span>heybuddy.vercel.app</span>
                </a>
              </div>
            </motion.div>
          </div>

          <Separator className="my-8 bg-zinc-800" />

          <div className="text-center text-zinc-500 text-sm">
            <p>© {new Date().getFullYear()} Sarthak Vishwakarma. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;