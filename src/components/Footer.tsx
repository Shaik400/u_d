import { Link } from 'react-router-dom';
import { GraduationCap, Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative z-10 bg-gray-950/90 backdrop-blur-xl border-t border-blue-500/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
                  UPADHYAYA
                </span>
                <span className="text-xs text-gray-400 -mt-1">Tutorials</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Quality Coaching for Classes 1–12
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/payment"
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Fee Structure
                </Link>
              </li>
            </ul>
          </div>

          {/* Classes */}
          <div>
            <h3 className="text-white mb-4">Classes Offered</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Classes 1–5: All Subjects</li>
              <li>Classes 6–8: All Subjects</li>
              <li>Classes 9–10: All Subjects</li>
              <li>11th & 12th: All Subjects</li>
              <li className="text-blue-400 mt-3">Online + Offline</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-400">
                  <div>9676387108</div>
                  <div>6304998492</div>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:upadhyayatutorials@gmail.com"
                  className="text-sm text-gray-400 hover:text-purple-400 transition-colors break-all"
                >
                  upadhyayatutorials@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-400">
                  50, 2nd Cross Road, Lakshmamma Layout, Dodda Banaswadi, Bengaluru, 560043
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Upadhyaya Tutorials. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Tutor: <span className="text-blue-400">Chandana Dayananda</span> | M.Sc in Physics
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
