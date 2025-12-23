import { motion, useScroll, useSpring } from "framer-motion";
import { Github, Instagram, Linkedin, Mail, ExternalLink, TrendingUp, ZoomIn, ZoomOut, X } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Separator } from "./ui/separator";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { useState } from "react";
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

  const [zoomLevel, setZoomLevel] = useState(1);

  const ImageZoomDialog = ({ src, alt, title }: { src: string; alt: string; title: string }) => {
    const [localZoom, setLocalZoom] = useState(1);
    
    return (
      <Dialog>
        <DialogTrigger asChild>
          <img 
            src={src}
            alt={alt}
            className="w-full aspect-[1/1.4142] object-cover cursor-pointer hover:opacity-90 transition-opacity"
          />
        </DialogTrigger>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/90">
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute top-4 right-4 z-10 flex gap-2">
              <Button
                size="sm"
                variant="secondary"
                onClick={() => setLocalZoom(prev => Math.min(prev + 0.5, 3))}
              >
                <ZoomIn className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="secondary"
                onClick={() => setLocalZoom(prev => Math.max(prev - 0.5, 0.5))}
              >
                <ZoomOut className="h-4 w-4" />
              </Button>
            </div>
            <div className="w-full h-full overflow-auto scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-track-transparent">
              <img 
                src={src}
                alt={alt}
                className="min-w-full min-h-full object-contain transition-transform duration-200 cursor-grab active:cursor-grabbing"
                style={{ transform: `scale(${localZoom})` }}
                draggable={false}
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  };

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
            Creative <span className="text-4xl font-bold">Video Editor, Graphic Designer, UI Designer</span> with over 1+ years of
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
            <motion.div
              className="text-4xl mb-8 relative inline-block"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="relative">
                UI Samples
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* UI Sample Item */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-zinc-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
                >
                  <ImageZoomDialog 
                    src="https://res.cloudinary.com/doy34nvkz/image/upload/v1766523523/34ad4218-a853-470a-98ee-cf79affebdae.png"
                    alt="Mediseva Mobile App UI"
                    title="Mediseva Mobile App UI"
                  />
                  <div className="p-3">
                    <h3 className="font-medium text-sm truncate mb-2">Mediseva Mobile App UI</h3>
                    <a 
                      href="https://www.figma.com/proto/X1JHtTILDdzPUQ4fE5f27j/MediSeva---Dashboards?node-id=23-302&t=qYHskbVEyBu8802n-1" 
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors text-xs"
                    >
                      <ExternalLink className="h-3 w-3 mr-1" />
                      View on Figma
                    </a>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-zinc-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
                >
                  <ImageZoomDialog 
                    src="https://res.cloudinary.com/doy34nvkz/image/upload/v1766523500/mw_email_web_design_qn5ota.jpg"
                    alt="MW HomePage Template"
                    title="MW HomePage Template"
                  />
                  <div className="p-3">
                    <h3 className="font-medium text-sm truncate mb-2">MW HomePage Temp</h3>
                    <a 
                      href="https://www.figma.com/proto/X1JHtTILDdzPUQ4fE5f223/MW-Temp?node-id=23-302&t=qYHskbVsdkjbhdjks-1" 
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors text-xs"
                    >
                      <ExternalLink className="h-3 w-3 mr-1" />
                      View on Figma
                    </a>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-zinc-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
                >
                  <ImageZoomDialog 
                    src="https://res.cloudinary.com/doy34nvkz/image/upload/v1766523500/mw_email_15_ind_y7g8zm.jpg"
                    alt="MW Email Template"
                    title="MW Email Template"
                  />
                  <div className="p-3">
                    <h3 className="font-medium text-sm truncate mb-2">MW Email Template</h3>
                    <a 
                      href="https://www.figma.com/proto/X1JHtTILDdzPUQ4fE5f223/MW-Temp?node-id=23-302&t=jsdjhsafhbJHjhkjh-3" 
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors text-xs"
                    >
                      <ExternalLink className="h-3 w-3 mr-1" />
                      View on Figma
                    </a>
                  </div>
                </motion.div>
              </div>
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