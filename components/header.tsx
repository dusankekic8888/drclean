"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Zap } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Zap className="h-8 w-8 text-blue-600 mr-2" />
            <span className="text-2xl font-bold text-gray-900">DrClean.com.au</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">
              Services
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">
              Reviews
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex">
            <Button asChild>
              <Link href="#quote">Get Free Quote</Link>
            </Button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link href="#services" className="text-gray-700 hover:text-blue-600">
                Services
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-blue-600">
                About
              </Link>
              <Link href="#testimonials" className="text-gray-700 hover:text-blue-600">
                Reviews
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-blue-600">
                Contact
              </Link>
              <Button asChild className="w-full">
                <Link href="#quote">Get Free Quote</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
