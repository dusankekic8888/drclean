import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Professional Drone Cleaning Services
              <span className="text-blue-600"> Australia</span>
            </h1>
            <p className="text-xl text-gray-600 mt-6 leading-relaxed">
              Revolutionary drone technology for safe, efficient cleaning of gutters, windows, skylights, solar panels,
              pressure washing, and specialized cleaning tasks. No ladders, no risk, just pristine results.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="#quote">Get Free Quote Today</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#services">View Our Services</Link>
              </Button>
            </div>
            <div className="mt-8 flex items-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">100%</div>
                <div className="text-sm text-gray-600">Safety Record</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/drone-cleaning-hero.png"
              alt="Professional drone cleaning service in action cleaning building exterior"
              width={600}
              height={600}
              className="rounded-lg shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
