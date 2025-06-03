import { Shield, Clock, DollarSign, Leaf, Users, Award } from "lucide-react"

const benefits = [
  {
    icon: Shield,
    title: "Safety First",
    description: "No ladders or scaffolding required. Our drones eliminate fall risks and ensure worker safety.",
  },
  {
    icon: Clock,
    title: "Time Efficient",
    description: "Complete cleaning jobs 3x faster than traditional methods with precision and thoroughness.",
  },
  {
    icon: DollarSign,
    title: "Cost Effective",
    description: "Competitive pricing with no hidden fees. Save money on equipment rental and insurance costs.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Environmentally conscious cleaning solutions that are safe for your property and the planet.",
  },
  {
    icon: Users,
    title: "Fully Insured",
    description: "Comprehensive insurance coverage and certified operators for complete peace of mind.",
  },
  {
    icon: Award,
    title: "Quality Guaranteed",
    description: "100% satisfaction guarantee with detailed before and after documentation.",
  },
]

export default function Benefits() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose DrClean Australia?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of cleaning with our innovative drone technology and professional service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <benefit.icon className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
