import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, Droplets, Sun, Sparkles, Zap, Settings } from "lucide-react"
import Image from "next/image"

const services = [
  {
    icon: Home,
    title: "Gutter Cleaning",
    description:
      "Complete gutter cleaning and debris removal using precision drone technology. Prevent water damage and maintain proper drainage.",
    features: ["Debris removal", "Downspout clearing", "Damage inspection", "Before/after photos"],
    image: "/images/service-gutter-cleaning.png",
  },
  {
    icon: Droplets,
    title: "Window Cleaning",
    description:
      "Crystal clear windows for residential and commercial properties. Reach high-rise windows safely without scaffolding.",
    features: ["Streak-free finish", "High-rise access", "Eco-friendly solutions", "Regular maintenance"],
    image: "/images/service-window-cleaning.png",
  },
  {
    icon: Sparkles,
    title: "Skylight Cleaning",
    description:
      "Restore natural light with professional skylight cleaning. Remove dirt, moss, and debris for maximum brightness.",
    features: ["Moss removal", "Seal inspection", "Light restoration", "Weather protection"],
    image: "/images/service-skylight-cleaning.png",
  },
  {
    icon: Sun,
    title: "Solar Panel Cleaning",
    description:
      "Maximise energy efficiency with regular solar panel maintenance. Remove dust, bird droppings, and environmental buildup.",
    features: ["Efficiency boost", "Gentle cleaning", "Performance monitoring", "Warranty safe"],
    image: "/images/service-solar-panel-cleaning.png",
  },
  {
    icon: Zap,
    title: "Pressure Washing",
    description:
      "High-pressure cleaning for driveways, patios, building exteriors, and hard-to-reach surfaces using drone-mounted equipment.",
    features: ["Surface restoration", "Mold removal", "Stain elimination", "Commercial grade"],
    image: "/images/service-pressure-washing.png",
  },
  {
    icon: Settings,
    title: "Other Services",
    description:
      "Custom cleaning solutions for unique requirements. From roof cleaning to specialised exterior maintenance tasks.",
    features: ["Custom solutions", "Specialised equipment", "Flexible approach", "Expert consultation"],
    image: "/images/service-other-services.png",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Drone Cleaning Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced drone technology meets professional cleaning expertise. Safe, efficient, and thorough cleaning for
            all your exterior needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={`${service.title} service demonstration`}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="text-center">
                <service.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">{service.description}</CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
