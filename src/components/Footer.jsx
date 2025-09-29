import {
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import { BsTwitter } from "react-icons/bs";

export default function Footer() {
  return (
    <footer id="footer" className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Business Logo and Social Media */}
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl lg:text-4xl font-semibold text-gray-900">
              Business Logo
            </h3>
            <div className="flex space-x-4 font-bold ">
              <a
                href="#"
                className="text-gray-900 hover:text-gray-800 transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="#"
                className="text-gray-900 hover:text-gray-800 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="#"
                className="text-gray-900 hover:text-gray-800 transition-colors"
              >
                <BsTwitter className="h-5 w-5" />
                <span className="sr-only">X</span>
              </a>
              <a
                href="#"
                className="text-gray-900 hover:text-gray-800 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          {/* Our Services */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Our Services
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Planning
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Drainage
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Bathrooms
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Commercial
                </a>
              </li>
            </ul>
          </div>

          {/* Useful Links Split into Two Columns */}
        
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Useful Links
            </h4>
            <div className="flex space-x-8">
              {/* First 4 links */}
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Updates
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Terms
                  </a>
                </li>
              </ul>

              {/* Last 4 links */}
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Customer Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Updates
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Locations
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Contact Info
            </h4>
            <div className="space-y-3 font-bold">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600 text-sm">
                  1 Sail Street, London, SE11 6NQ
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400 flex-shrink-0" />
                <a
                  href="mailto:enquiries@plumbingplus.com"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  enquiries@plumbingplus.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400 flex-shrink-0" />
                <a
                  href="tel:02084276474"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  020 8427 6474
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © Plumbing Plus. All Rights Reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Website by AI Awesome and Creative
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
