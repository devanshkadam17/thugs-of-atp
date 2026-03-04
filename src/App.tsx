import React, { useState, useEffect } from 'react';
import { 
  Instagram, 
  MessageCircle, 
  CheckCircle2, 
  Star, 
  ArrowRight, 
  Upload, 
  Send, 
  Phone, 
  Mail, 
  MapPin,
  Menu,
  X,
  Zap,
  Target,
  Users
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Packages', href: '#packages' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-black/90 backdrop-blur-lg py-4 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-yellow rounded-lg flex items-center justify-center">
            <span className="text-brand-black font-black text-xl">T</span>
          </div>
          <span className="text-xl font-display font-black tracking-tighter uppercase">
            Thugs of <span className="text-brand-yellow">Anantapur</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium hover:text-brand-yellow transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="#book" className="btn-primary py-2 px-6 text-sm">
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-dark border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#book" 
                className="btn-primary w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-brand-yellow/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-1/2 bg-brand-yellow/5 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-yellow/10 border border-brand-yellow/20 text-brand-yellow text-sm font-bold mb-6">
            <Zap size={16} />
            <span>#1 Instagram Community in Anantapur</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-[0.9] mb-6">
            Promote Your Business to <span className="text-brand-yellow">182K+</span> Audience
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-lg leading-relaxed">
            Grow your brand with the most influential community in Anantapur. We help local businesses reach thousands of potential customers instantly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#book" className="btn-primary">
              Book Promotion <ArrowRight size={20} />
            </a>
            <a href="#packages" className="btn-secondary">
              View Packages
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i}
                  src={`https://picsum.photos/seed/user${i}/100/100`} 
                  alt="Client" 
                  className="w-10 h-10 rounded-full border-2 border-brand-black"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <div className="text-sm">
              <div className="flex items-center gap-1 text-brand-yellow">
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
              </div>
              <p className="text-gray-400">Trusted by 500+ Local Businesses</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden border-4 border-brand-yellow/20 shadow-2xl shadow-brand-yellow/10">
            <img 
              src="https://picsum.photos/seed/anantapur/800/1000" 
              alt="Anantapur Promotion" 
              className="w-full aspect-[4/5] object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="glass-card p-4 flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center text-brand-black">
                  <Instagram size={24} />
                </div>
                <div>
                  <p className="font-bold">Latest Campaign</p>
                  <p className="text-sm text-gray-400">45K+ Reach in 24 Hours</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-yellow rounded-full blur-3xl opacity-30 animate-pulse" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-brand-yellow rounded-full blur-3xl opacity-20" />
        </motion.div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { label: 'Followers', value: '182K+', icon: <Users className="text-brand-yellow" /> },
    { label: 'Avg. Reach', value: '50K+', icon: <Target className="text-brand-yellow" /> },
    { label: 'Businesses Helped', value: '500+', icon: <Zap className="text-brand-yellow" /> },
    { label: 'Engagement Rate', value: '8.5%', icon: <Star className="text-brand-yellow" /> },
  ];

  return (
    <section className="py-12 border-y border-white/5 bg-brand-dark/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="flex justify-center mb-3">{stat.icon}</div>
              <h3 className="text-3xl font-black mb-1">{stat.value}</h3>
              <p className="text-gray-400 text-sm uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Packages = () => {
  const packages = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses starting out.',
      features: [
        '1 Story Post (24 Hours)',
        'Tagging & Link Sticker',
        'Basic Analytics Report',
        'Standard Support'
      ],
      recommended: false
    },
    {
      name: 'Business Pro',
      description: 'Our most popular package for growth.',
      features: [
        '3 Story Posts (Spread over 3 days)',
        '1 Dedicated Reel/Post',
        'Link in Bio for 48 Hours',
        'Detailed Insights Report',
        'Priority Support'
      ],
      recommended: true
    },
    {
      name: 'Elite Brand',
      description: 'Full brand takeover for maximum impact.',
      features: [
        '7 Story Posts (1 Week)',
        '2 Dedicated Reels',
        'Link in Bio for 1 Week',
        'Collaborative Post',
        'Custom Content Strategy',
        '24/7 VIP Support'
      ],
      recommended: false
    }
  ];

  return (
    <section id="packages" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">Promotion <span className="text-brand-yellow">Packages</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Choose the plan that fits your business goals. All packages are designed to maximize your local reach in Anantapur.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className={`relative p-8 rounded-3xl border ${pkg.recommended ? 'border-brand-yellow bg-brand-yellow/5' : 'border-white/10 bg-brand-dark/50'} flex flex-col`}
            >
              {pkg.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-yellow text-brand-black text-xs font-black px-4 py-1 rounded-full uppercase tracking-tighter">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-black mb-2">{pkg.name}</h3>
              <p className="text-gray-400 text-sm mb-8">{pkg.description}</p>
              
              <ul className="space-y-4 flex-grow">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 size={18} className="text-brand-yellow shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    package: 'Business Pro',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        businessName: '',
        email: '',
        phone: '',
        package: 'Business Pro',
        message: '',
      });
    }, 1500);
  };

  return (
    <section id="book" className="py-24 bg-brand-dark/20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-yellow/20 to-transparent" />
      
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Ready to <span className="text-brand-yellow">Scale?</span></h2>
            <p className="text-gray-400 mb-8 text-lg">Fill out the form and our team will get back to you within 2 hours to discuss your campaign strategy.</p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-yellow/10 flex items-center justify-center text-brand-yellow">
                  <CheckCircle2 />
                </div>
                <div>
                  <h4 className="font-bold">Verified Reach</h4>
                  <p className="text-sm text-gray-500">Real followers, real engagement.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-yellow/10 flex items-center justify-center text-brand-yellow">
                  <Zap />
                </div>
                <div>
                  <h4 className="font-bold">Fast Turnaround</h4>
                  <p className="text-sm text-gray-500">Campaigns live within 24 hours.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 md:p-10 relative">
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-6 text-brand-black">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-black mb-2">Booking Received!</h3>
                <p className="text-gray-400 mb-8">Our team will contact you shortly on WhatsApp/Call.</p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="btn-secondary py-2"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Your Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-brand-black/50 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-yellow outline-none transition-colors"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Business Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-brand-black/50 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-yellow outline-none transition-colors"
                      placeholder="Cafe Anantapur"
                      value={formData.businessName}
                      onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">WhatsApp Number</label>
                  <input 
                    required
                    type="tel" 
                    className="w-full bg-brand-black/50 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-yellow outline-none transition-colors"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Enter Plan Name</label>
                  <input 
                    required
                    type="text" 
                    className="w-full bg-brand-black/50 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-yellow outline-none transition-colors"
                    placeholder="e.g. Business Pro"
                    value={formData.package}
                    onChange={(e) => setFormData({...formData, package: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Upload Logo/Ad Creative</label>
                  <div className="border-2 border-dashed border-white/10 rounded-xl p-6 text-center hover:border-brand-yellow/50 transition-colors cursor-pointer group">
                    <Upload className="mx-auto mb-2 text-gray-500 group-hover:text-brand-yellow transition-colors" />
                    <p className="text-sm text-gray-500">Click to upload or drag and drop</p>
                    <p className="text-[10px] text-gray-600 mt-1">PNG, JPG up to 10MB</p>
                  </div>
                </div>

                <button 
                  disabled={isSubmitting}
                  type="submit" 
                  className="btn-primary w-full py-4 mt-4"
                >
                  {isSubmitting ? 'Processing...' : 'Confirm Booking'} <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-brand-dark/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-black mb-8">Get in <span className="text-brand-yellow">Touch</span></h2>
            <p className="text-gray-400 mb-10">Have questions about our packages or need a custom strategy? Reach out to us directly.</p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-brand-yellow flex items-center justify-center text-brand-black">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase font-bold tracking-widest">Call / WhatsApp</p>
                  <p className="text-xl font-bold">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-brand-yellow flex items-center justify-center text-brand-black">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase font-bold tracking-widest">Email Us</p>
                  <p className="text-xl font-bold">hello@thugsofanantapur.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-brand-yellow flex items-center justify-center text-brand-black">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase font-bold tracking-widest">Office</p>
                  <p className="text-xl font-bold">Anantapur, Andhra Pradesh</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-brand-yellow/5 blur-3xl -z-10" />
            <div className="rounded-3xl overflow-hidden border border-white/10 h-full min-h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61845.8273646869!2d77.56111105!3d14.68188775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb14ac2413073df%3A0x10dc3963da10a0c!2sAnantapur%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1709500000000!5m2!1sen!2sin" 
                className="w-full h-full grayscale invert opacity-70"
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-yellow rounded flex items-center justify-center">
              <span className="text-brand-black font-black text-sm">T</span>
            </div>
            <span className="font-display font-black tracking-tighter uppercase">
              Thugs of <span className="text-brand-yellow">Anantapur</span>
            </span>
          </div>
          
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-brand-yellow transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-yellow transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-brand-yellow transition-colors">Refund Policy</a>
          </div>

          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-yellow hover:text-brand-black transition-all">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-yellow hover:text-brand-black transition-all">
              <MessageCircle size={20} />
            </a>
          </div>
        </div>
        <div className="mt-12 text-center text-xs text-gray-600">
          © {new Date().getFullYear()} Thugs of Anantapur. All rights reserved. Built for local growth.
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/919876543210" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 group"
    >
      <MessageCircle size={32} fill="currentColor" />
      <span className="absolute right-full mr-4 bg-white text-black px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
        Chat with us
      </span>
    </a>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-yellow selection:text-brand-black">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Packages />
        <BookingForm />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
