import {
  Hospital,
  Phone,
  Mail,
  Ambulance,
  MessageCircle,
  Instagram,
  Facebook,
  MapPin,
  Clock,
  Shield,
  Star,
  ArrowRight,
  Heart,
  Menu,
  X
} from "lucide-react";
import splashscreen_icon from "./assets/splash-icon.png";
import hosta_icon from "./assets/HOSTAICON.png";
import { WelcomeAnimation } from "./components/WelcomeAnimation";
import { GoToTopButton } from "./components/GoToTopButton";
import { InstallPWA } from "./components/installPWA";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Emergency",
      description: "Round-the-clock emergency services"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Trusted Partners",
      description: "Verified healthcare providers"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Quality Care",
      description: "Excellence in healthcare delivery"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Patient First",
      description: "Your health is our priority"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <WelcomeAnimation />

      <div id="scrollable-content" className="relative">
        <GoToTopButton containerId="scrollable-content" />

        {/* Modern Header */}
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 md:h-20">
              <div className="flex items-center gap-2">
                <img
                  src={splashscreen_icon}
                  alt="HOSTA Logo"
                  width={45}
                  height={45}
                  className="rounded-full border-2 border-emerald-500 shadow-md"
                />
                <span className="text-xl font-bold bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent hidden sm:inline">
                  HOSTA
                </span>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex gap-8">
                {['Home', 'Platforms', 'Features', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-700 hover:text-emerald-600 font-medium transition-colors relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300"></span>
                  </a>
                ))}
              </nav>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
              <div className="md:hidden py-4 border-t border-gray-100">
                {['Home', 'Platforms', 'Features', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-3 text-gray-700 hover:text-emerald-600 font-medium transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>
        </header>

        {/* Hero Section - Modern Design */}
        <section className="min-h-screen flex items-center pt-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-emerald-100 px-4 py-2 rounded-full mb-6">
                  <Heart className="w-4 h-4 text-emerald-600 fill-current" />
                  <span className="text-sm font-semibold text-emerald-700">Your Health Companion</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent">
                    Excellence in
                  </span>
                  <br />
                  <span className="text-gray-800">Healthcare</span>
                </h1>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  <b className="text-emerald-700">HOSTA</b> – Your Complete Healthcare Companion
                  <br className="hidden sm:block" />
                  Connect with trusted doctors, hospitals, and clinics across Allopathy, Unani & more.
                  Easily book appointments and manage your healthcare anytime, anywhere.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link to={'https://hostahospital.com/'} className="group bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
                    Get Started
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link to={'https://hostahospital.com/'} className="border-2 border-emerald-600 text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-emerald-50 transition-all duration-300">
                    Learn More
                  </Link>
                </div>
              </div>

              <div className="relative hidden lg:block">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <img
                  src={hosta_icon}
                  alt="HOSTA Icon"
                  className="relative mx-auto w-80 h-80 rounded-full shadow-2xl border-4 border-white"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Why Choose <span className="text-emerald-600">HOSTA</span>?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We provide comprehensive healthcare solutions with cutting-edge technology
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group p-6 bg-gradient-to-br from-white to-emerald-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-emerald-100"
                >
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-600 transition-colors">
                    <div className="text-emerald-600 group-hover:text-white transition-colors">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platforms Section - Modern Cards */}
        <section id="platforms" className="py-20 bg-gradient-to-br from-emerald-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Our <span className="text-emerald-600">Platforms</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Comprehensive healthcare solutions tailored to your needs
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
              {[
                {
                  title: "Hospital Platform",
                  description: "Manage your hospital services and appointments efficiently",
                  icon: <Hospital className="w-12 h-12" />,
                  color: "from-blue-500 to-cyan-500",
                  bgColor: "bg-blue-50",
                  link:"https://hostahospital.com/"
                },
                {
                  title: "Ambulance Platform",
                  description: "Emergency response and ambulance management system",
                  icon: <Ambulance className="w-12 h-12" />,
                  color: "from-red-500 to-orange-500",
                  bgColor: "bg-red-50",
                  link: "https://ambulaces-hosta.vercel.app/"
                },
             
              ].map((platform) => (
                <Link
                to={platform.link}
             
                  key={platform.title}
                  className="group w-80 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden cursor-pointer"
                >
                  <div className={`${platform.bgColor} p-8 text-center`}>
                    <div className={`inline-flex p-4 bg-gradient-to-r ${platform.color} rounded-2xl text-white shadow-lg`}>
                      {platform.icon}
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {platform.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {platform.description}
                    </p>
                    <button className="text-emerald-600 font-semibold flex items-center justify-center gap-1 group-hover:gap-2 transition-all">
                      Learn More
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Mobile App Section - Modern Design */}
        <section className="py-20 bg-gradient-to-r from-emerald-700 to-teal-700">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get the HOSTA Mobile App
              </h2>
              <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
                Access healthcare at your fingertips. Download our app for seamless experience.
              </p>
              <InstallPWA />
            </div>
          </div>
        </section>

        {/* Contact Section - Modern Design */}
        <section id="contact" className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Get in <span className="text-emerald-600">Touch</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
              {[
                {
                  icon: <MessageCircle className="w-5 h-5" />,
                  title: "WhatsApp",
                  url: "https://wa.me/918714412090",
                  color: "bg-green-500 hover:bg-green-600"
                },
                {
                  icon: <Phone className="w-5 h-5" />,
                  title: "Phone",
                  url: "tel:+918714412090",
                  color: "bg-blue-500 hover:bg-blue-600"
                },
                {
                  icon: <Mail className="w-5 h-5" />,
                  title: "Email",
                  url: "mailto:hostahealthcare@gmail.com",
                  color: "bg-gray-700 hover:bg-gray-800"
                },
                {
                  icon: <Instagram className="w-5 h-5" />,
                  title: "Instagram",
                  url: "https://www.instagram.com/hostahealthcare",
                  color: "bg-pink-500 hover:bg-pink-600"
                },
                {
                  icon: <Facebook className="w-5 h-5" />,
                  title: "Facebook",
                  url: "https://www.facebook.com/share/16VZQu8Ad6/",
                  color: "bg-blue-600 hover:bg-blue-700"
                }
              ].map((contact) => (
                <a
                  key={contact.title}
                  href={contact.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${contact.color} text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                >
                  {contact.icon}
                  <span>{contact.title}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Footer - Modern Design */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <img src={splashscreen_icon} alt="Logo" className="w-10 h-10 rounded-full" />
                  <span className="text-xl font-bold">HOSTA</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Excellence in Healthcare - Your Complete Healthcare Companion
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#home" className="hover:text-emerald-400 transition">Home</a></li>
                  <li><a href="#platforms" className="hover:text-emerald-400 transition">Platforms</a></li>
                  <li><a href="#features" className="hover:text-emerald-400 transition">Features</a></li>
                  <li><a href="#contact" className="hover:text-emerald-400 transition">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Legal</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-emerald-400 transition">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-emerald-400 transition">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-emerald-400 transition">Cookie Policy</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Address</h3>
                <div className="flex items-start gap-2 text-gray-400">
                  <MapPin size={18} className="mt-1 flex-shrink-0" />
                  <p className="text-sm">Kootilangadi, Malappuram, Kerala, India</p>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
              <p>© {new Date().getFullYear()} HOSTA. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
