import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, MapPin, Phone, Clock, MessageCircle, ChevronRight, Star, Scissors, Gem, User, Calendar, CheckCircle } from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, { threshold: 0.1 });
    
    const current = domRef.current;
    if (current) {
      observer.observe(current);
    }
    return () => {
      if (current) observer.unobserve(current);
    }
  }, []);

  return (
    <div 
      ref={domRef} 
      className={`transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"} ${className}`} 
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default function GlowWorldSite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans bg-stone-50 text-zinc-900 overflow-x-hidden">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-stone-50/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className={`font-serif text-2xl tracking-wide ${scrolled ? 'text-zinc-900' : 'text-stone-50'}`}>
            <span className="font-bold">Glow</span>World
          </div>
          
          <div className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-widest font-medium">
            <a href="#story" className={`${scrolled ? 'text-zinc-600 hover:text-rose-500' : 'text-stone-300 hover:text-white'} transition-colors`}>Our Story</a>
            <a href="#services" className={`${scrolled ? 'text-zinc-600 hover:text-rose-500' : 'text-stone-300 hover:text-white'} transition-colors`}>Services</a>
            <a href="#boutique" className={`${scrolled ? 'text-zinc-600 hover:text-rose-500' : 'text-stone-300 hover:text-white'} transition-colors`}>The Boutique</a>
            <a href="#gallery" className={`${scrolled ? 'text-zinc-600 hover:text-rose-500' : 'text-stone-300 hover:text-white'} transition-colors`}>Gallery</a>
            <a href="#booking" className="bg-rose-400 hover:bg-rose-500 text-stone-50 px-6 py-3 transition-colors">Book Now</a>
          </div>

          <button 
            className={`md:hidden ${scrolled ? 'text-zinc-900' : 'text-stone-50'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-stone-50 z-40 transition-transform duration-500 ease-in-out px-6 pt-24 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="flex flex-col space-y-8 text-2xl font-serif text-zinc-900">
          <a href="#story" onClick={() => setIsMenuOpen(false)}>Our Story</a>
          <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
          <a href="#boutique" onClick={() => setIsMenuOpen(false)}>The Boutique</a>
          <a href="#gallery" onClick={() => setIsMenuOpen(false)}>Gallery</a>
          <a href="#booking" onClick={() => setIsMenuOpen(false)} className="text-rose-500 mt-4">Book Appointment</a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-zinc-900 overflow-hidden">
        <img 
          src="/api/placeholder/1920/1080" 
          alt="Elegant salon ambiance" 
          className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
        />
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
          <FadeIn>
            <span className="text-rose-300 tracking-widest uppercase text-sm md:text-base font-semibold mb-6 block">The Modern Woman's Sanctuary</span>
          </FadeIn>
          <FadeIn delay={200}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-stone-50 mb-8 leading-tight">
              Empowered Beauty.<br />Reclaim Your Time.
            </h1>
          </FadeIn>
          <FadeIn delay={400}>
            <p className="text-lg md:text-2xl text-stone-200 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
              Glow World Beauty Saloon Cum Clinic in Adityapur. Designed exclusively for the woman who does it all.
            </p>
          </FadeIn>
          <FadeIn delay={600}>
            <a href="#booking" className="inline-flex bg-rose-400 hover:bg-rose-500 text-stone-50 px-8 py-5 uppercase tracking-widest text-sm md:text-base transition-colors items-center gap-3">
              Reserve Your Sanctuary <ChevronRight size={18} />
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Brand Story Section */}
      <section id="story" className="py-24 md:py-32 bg-stone-50 text-zinc-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
            <div className="md:w-1/2">
              <FadeIn>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-8">
                  You manage the household.<br />
                  <span className="text-zinc-400">You lead the meetings.</span><br />
                  But when do you pause?
                </h2>
              </FadeIn>
              <FadeIn delay={200}>
                <p className="text-lg md:text-xl text-zinc-600 leading-relaxed mb-6 font-light">
                  In the hustle of Jamshedpur, finding a moment strictly for yourself can feel like a luxury. We believe it is a necessity. 
                </p>
                <p className="text-lg md:text-xl text-zinc-600 leading-relaxed font-light">
                  Glow World isn't just a beauty parlour. It is your personal retreat. A quiet space nestled in Adityapur where the noise fades, time slows down, and you become the priority. Step in, breathe out, and reclaim the fearless confidence you carry into the world.
                </p>
              </FadeIn>
            </div>
            <div className="md:w-1/2 w-full mt-12 md:mt-0">
              <FadeIn delay={400}>
                <div className="relative">
                  <div className="absolute inset-0 bg-stone-200 translate-x-6 translate-y-6"></div>
                  <img 
                    src="/api/placeholder/800/1000" 
                    alt="Woman relaxing" 
                    className="relative z-10 w-full h-auto aspect-[4/5] object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-1000 border-8 border-white shadow-xl" 
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Services Menu */}
      <section id="services" className="py-24 bg-zinc-50 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="text-center mb-16 md:mb-24">
              <Scissors className="text-rose-400 w-10 h-10 mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-serif mb-6">Expert Services</h2>
              <p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto font-light">
                Transparent pricing, premium products. Experience clinical precision wrapped in luxury comfort.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {/* Hair Card */}
            <FadeIn delay={100}>
              <div className="bg-stone-50 p-8 md:p-10 shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-serif mb-8 text-center border-b border-zinc-200 pb-6">Hair Sanctuary</h3>
                <ul className="space-y-6">
                  {[['Global Keratin Treatment', '₹3,500+'], ['Root Touch-Up & Color', '₹800+'], ['Nourishing Hair Spa', '₹1,200'], ['Advanced Restyling', '₹600']].map((item, i) => (
                    <li key={i} className="flex justify-between items-end text-lg font-light text-zinc-700">
                      <span className="bg-stone-50 pr-2 relative z-10">{item[0]}</span>
                      <span className="flex-grow border-b border-dashed border-zinc-300 relative -top-2 mx-2"></span>
                      <span className="bg-stone-50 pl-2 relative z-10 font-medium">{item[1]}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* Skin Card */}
            <FadeIn delay={300}>
              <div className="bg-stone-50 p-8 md:p-10 shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-serif mb-8 text-center border-b border-zinc-200 pb-6">Clinical Skin</h3>
                <ul className="space-y-6">
                  {[['Signature Hydrafacial', '₹2,500'], ['O3+ Bridal Glow', '₹3,000'], ['Anti-Tan Clearing', '₹1,500'], ['Classic Threading', '₹150']].map((item, i) => (
                    <li key={i} className="flex justify-between items-end text-lg font-light text-zinc-700">
                      <span className="bg-stone-50 pr-2 relative z-10">{item[0]}</span>
                      <span className="flex-grow border-b border-dashed border-zinc-300 relative -top-2 mx-2"></span>
                      <span className="bg-stone-50 pl-2 relative z-10 font-medium">{item[1]}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* Bridal Card */}
            <FadeIn delay={500}>
              <div className="bg-zinc-900 text-stone-50 p-8 md:p-10 shadow-lg">
                <h3 className="text-2xl font-serif mb-8 text-center border-b border-zinc-700 pb-6 text-rose-300">Bridal & Glamour</h3>
                <ul className="space-y-6">
                   {[['Pre-Bridal Package', '₹5,500'], ['HD Wedding Glam', '₹8,500'], ['Airbrush Excellence', '₹12,000'], ['Guest / Party Styling', '₹2,000']].map((item, i) => (
                    <li key={i} className="flex justify-between items-end text-lg font-light text-zinc-200">
                      <span className="bg-zinc-900 pr-2 relative z-10">{item[0]}</span>
                      <span className="flex-grow border-b border-dashed border-zinc-600 relative -top-2 mx-2"></span>
                      <span className="bg-zinc-900 pl-2 relative z-10 font-medium text-rose-300">{item[1]}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10 text-center">
                  <a href="#booking" className="text-sm uppercase tracking-widest text-stone-50 hover:text-rose-400 transition-colors border-b border-rose-400 pb-1">Consult with an Expert</a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* The Boutique Counter */}
      <section id="boutique" className="py-24 bg-zinc-900 text-stone-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="text-center mb-20">
              <Gem className="text-rose-400 w-12 h-12 mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-serif mb-6">The Boutique Counter</h2>
              <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto font-light leading-relaxed">
                Your time is precious. We've curated a premium jewelry collection right at our billing counter. 
                Whether you need a subtle whisper of elegance for the office or a bold statement for the evening, complete your look before you leave.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={100} className="group cursor-pointer">
              <div className="overflow-hidden relative aspect-[3/4]">
                <img src="/api/placeholder/600/800" alt="Oxidized Jewelry" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-serif mb-2 text-stone-50">Hand-picked Oxidized</h3>
                  <p className="text-zinc-300 font-light">For the bold, artistic desk-to-dinner transition.</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={300} className="group cursor-pointer">
              <div className="overflow-hidden relative aspect-[3/4]">
                <img src="/api/placeholder/601/801" alt="Junk Jewelry" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-serif mb-2 text-stone-50">Junk Glamour</h3>
                  <p className="text-zinc-300 font-light">Statement pieces crafted to demand attention.</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={500} className="group cursor-pointer">
              <div className="overflow-hidden relative aspect-[3/4]">
                <img src="/api/placeholder/602/802" alt="City Gold" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-serif mb-2 text-stone-50">Premium City Gold</h3>
                  <p className="text-zinc-300 font-light">Enduring, accessible elegance for special occasions.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Visual Gallery Grid */}
      <section id="gallery" className="py-2 bg-stone-50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
          {[1,2,3,4,5,6,7,8].map((item, index) => (
             <div key={item} className="aspect-square relative overflow-hidden group">
               <img 
                 src={`/api/placeholder/50${item}/50${item}`} 
                 alt={`Gallery Work ${item}`} 
                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110" 
               />
               <div className="absolute inset-0 bg-rose-900/0 group-hover:bg-zinc-900/20 transition-all duration-500"></div>
             </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-stone-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif mb-4">Word of Mouth</h2>
              <p className="text-zinc-500 uppercase tracking-widest text-sm">From Jamshedpur's Working Professionals</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "I stepped in completely exhausted after a brutal 60-hour work week. The team at Glow World didn't just fix my hair, they gave me space to breathe. Left feeling invincible.", name: "Ritu M.", role: "Bank Manager" },
              { text: "The quality of service here rivals the premium salons I used to visit in Mumbai. Finding such clinical hygiene and luxury in Adityapur is a blessing.", name: "Anjali S.", role: "Educator" },
              { text: "Not only is the makeup flawless, but I ended up buying a stunning oxidized necklace set right from their boutique counter for the reception. Super convenient.", name: "Priya D.", role: "IT Consultant" }
            ].map((review, i) => (
              <FadeIn delay={i * 200} key={i}>
                <div className="bg-white p-10 shadow-sm border border-stone-100">
                  <div className="flex text-rose-400 mb-6">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                  </div>
                  <p className="text-lg text-zinc-700 italic font-serif mb-8 leading-relaxed">"{review.text}"</p>
                  <div className="font-medium text-zinc-900">{review.name}</div>
                  <div className="text-sm text-zinc-500 bg-stone-100 inline-block px-3 py-1 mt-2">{review.role}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Booking & Contact */}
      <section id="booking" className="py-24 bg-zinc-900 border-t border-zinc-800 text-stone-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            <div className="lg:w-5/12">
              <FadeIn>
                <h2 className="text-4xl md:text-5xl font-serif mb-8">Reserve Your Time</h2>
                <p className="text-zinc-400 text-lg mb-12 font-light leading-relaxed">
                  Avoid waiting in line. We respect your schedule. Book ahead online or reach out via WhatsApp for an immediate response from our Adityapur clinic.
                </p>
                
                <div className="space-y-8 mb-12">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-rose-400 mt-1" />
                    <div>
                      <h4 className="text-xl font-medium mb-1">Glow World Beauty Saloon</h4>
                      <p className="text-zinc-400 font-light">Main Road Adityapur,<br/>Jamshedpur, Jharkhand 831013</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Clock className="text-rose-400" />
                    <div>
                      <h4 className="text-xl font-medium mb-1">Clinic Hours</h4>
                      <p className="text-zinc-400 font-light">Mon - Sun: 10:00 AM - 8:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="text-rose-400" />
                    <div>
                      <h4 className="text-xl font-medium mb-1">Call Us</h4>
                      <p className="text-zinc-400 font-light">+91 98765 43210</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            <div className="lg:w-7/12">
              <FadeIn delay={200}>
                <div className="bg-stone-50 p-8 md:p-12 text-zinc-900 rounded-sm">
                  <h3 className="text-2xl font-serif mb-8 border-b border-zinc-200 pb-4">Request an Appointment</h3>
                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-600 flex items-center gap-2"><User size={14}/> Full Name</label>
                        <input type="text" className="w-full border-b border-zinc-300 py-3 bg-transparent focus:outline-none focus:border-rose-400 transition-colors" placeholder="e.g. Priya Sharma" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-600 flex items-center gap-2"><Phone size={14}/> WhatsApp Phone</label>
                        <input type="tel" className="w-full border-b border-zinc-300 py-3 bg-transparent focus:outline-none focus:border-rose-400 transition-colors" placeholder="+91" />
                      </div>
                    </div>
                    <div className="space-y-2 pt-2">
                      <label className="text-sm font-medium text-zinc-600 flex items-center gap-2"><Scissors size={14}/> Primary Service Needed</label>
                      <select className="w-full border-b border-zinc-300 py-3 bg-transparent focus:outline-none focus:border-rose-400 transition-colors text-zinc-700">
                        <option>Hair Styling & Treatment</option>
                        <option>Clinical Skin / Facial</option>
                        <option>Bridal & HD Makeup</option>
                        <option>Curated Boutique Inquiry</option>
                        <option>General Consultation</option>
                      </select>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-600 flex items-center gap-2"><Calendar size={14}/> Preferred Date</label>
                        <input type="date" className="w-full border-b border-zinc-300 py-3 bg-transparent focus:outline-none focus:border-rose-400 transition-colors text-zinc-700" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-600 flex items-center gap-2"><Clock size={14}/> Preferred Time</label>
                        <input type="time" className="w-full border-b border-zinc-300 py-3 bg-transparent focus:outline-none focus:border-rose-400 transition-colors text-zinc-700" />
                      </div>
                    </div>
                    
                    <div className="pt-8">
                      <button className="w-full bg-zinc-900 hover:bg-zinc-800 text-stone-50 py-4 font-medium uppercase tracking-widest text-sm transition-colors">
                        Submit Request
                      </button>
                    </div>
                  </form>

                  <div className="mt-8 pt-8 border-t border-zinc-200">
                    <p className="text-center text-sm text-zinc-500 mb-4">Or bypass the forms completely.</p>
                    <button className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 font-medium flex items-center justify-center gap-3 transition-colors rounded-sm shadow-md">
                      <MessageCircle fill="currentColor" size={20} />
                      <span className="text-lg">Chat on WhatsApp (Adityapur)</span>
                    </button>
                  </div>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 py-12 text-zinc-400 text-sm text-center border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="font-serif text-3xl text-stone-300 mb-6">
            <span className="font-bold">Glow</span>World
          </div>
          <p className="mb-8">The Professional Woman's Beauty Sanctuary.<br/>Adityapur, Jamshedpur.</p>
          <div className="flex justify-center flex-wrap gap-6 mb-8 uppercase tracking-wider text-xs">
            <a href="#" className="hover:text-rose-400 transition-colors">Instagram</a>
            <a href="#" className="hover:text-rose-400 transition-colors">Facebook</a>
            <a href="#" className="hover:text-rose-400 transition-colors">Directions</a>
          </div>
          <p>&copy; {new Date().getFullYear()} Glow World Beauty Saloon Cum Clinic. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}