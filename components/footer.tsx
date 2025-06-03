import Link from "next/link"
import { Zap, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Zap className="h-8 w-8 text-blue-400 mr-2" />
              <span className="text-2xl font-bold">DrClean.com.au</span>
            </div>
            <p className="text-gray-300 mb-4">
              Australia's leading drone cleaning service provider. Safe, efficient, and professional cleaning solutions.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-gray-300 hover:text-white">
                  Gutter Cleaning
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-white">
                  Window Cleaning
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-white">
                  Skylight Cleaning
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-white">
                  Solar Panel Cleaning
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-white">
                  Pressure Washing
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-white">
                  Other Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-gray-300 hover:text-white">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Safety
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Insurance
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-blue-400" />
                <span className="text-gray-300">1300 DR CLEAN</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-blue-400" />
                <span className="text-gray-300">info@drclean.com.au</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-blue-400" />
                <span className="text-gray-300">Australia Wide</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} DrClean Australia. All rights reserved. |
            <Link href="#" className="hover:text-white ml-1">
              Privacy Policy
            </Link>{" "}
            |
            <Link href="#" className="hover:text-white ml-1">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
